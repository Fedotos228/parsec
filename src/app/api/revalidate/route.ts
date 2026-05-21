import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * On-demand revalidation endpoint.
 *
 * WordPress apelează acest endpoint printr-un webhook la fiecare
 * publish / update / delete de post/page/custom-post-type.
 *
 * Exemplu request din WordPress:
 *   POST https://parsec.md/api/revalidate
 *   Authorization: Bearer <REVALIDATE_SECRET>
 *   Content-Type: application/json
 *   { "type": "project", "slug": "campanie-pr-2025" }
 *
 * Tipuri suportate:
 *   - "project"  → revalidează /projects și /projects/[slug]
 *   - "domain"   → revalidează / și /domain/[slug]
 *   - "home"     → revalidează /
 *   - "all"      → revalidează tot
 */
export async function POST(req: NextRequest) {
  // 1. Verifică secretul
  const authHeader = req.headers.get('authorization')
  const secret = process.env.REVALIDATE_SECRET

  if (!secret) {
    return NextResponse.json(
      { error: 'REVALIDATE_SECRET is not configured on the server.' },
      { status: 500 }
    )
  }

  if (authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // 2. Parsează body-ul
  let body: { type?: string; slug?: string } = {}
  try {
    body = await req.json()
  } catch {
    // body gol sau invalid — revalidăm tot
  }

  const { type, slug } = body

  try {
    if (type === 'project') {
      revalidatePath('/projects', 'page')
      if (slug) revalidatePath(`/projects/${slug}`, 'page')
    } else if (type === 'domain') {
      revalidatePath('/', 'page')
      if (slug) revalidatePath(`/domain/${slug}`, 'page')
    } else if (type === 'home') {
      revalidatePath('/', 'page')
    } else {
      // "all" sau body gol → revalidează tot site-ul
      revalidatePath('/', 'layout')
    }

    return NextResponse.json({
      revalidated: true,
      type: type ?? 'all',
      slug: slug ?? null,
      timestamp: new Date().toISOString(),
    })
  } catch (err) {
    return NextResponse.json(
      { error: 'Revalidation failed', details: String(err) },
      { status: 500 }
    )
  }
}

// GET util pentru a testa că endpoint-ul e live
export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  const secret = process.env.REVALIDATE_SECRET

  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({ ok: true, message: 'Revalidation endpoint is live.' })
}
