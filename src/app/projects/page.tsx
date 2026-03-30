import GridWrapper from '@/components/pages/projects/grid-wrapper'
import Hero from '@/components/pages/projects/hero'
import ProjectsGridSkeleton from '@/components/pages/projects/skeleton-card'
import { getNodes } from '@/lib/utils/getNodes'
import { ServcesTaxonomieQuery } from '@/queries/service.queries'
import { wpFetch } from '@/queries/wordpress'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Proiecte',
  description: 'Descoperă proiectele noastre de PR, comunicare strategică și campanii media realizate pentru clienți din Moldova și România.',
  openGraph: {
    title: 'Proiecte | Parsec',
    description: 'Descoperă proiectele noastre de PR, comunicare strategică și campanii media.',
    url: 'https://parsec.md/projects',
  },
  alternates: {
    canonical: 'https://parsec.md/projects',
  },
}

export default async function ProjectsPage() {
  const { services } = await wpFetch(ServcesTaxonomieQuery)

  const servicesNode = getNodes(services)

  return (
    <main>
      <Hero title='Proiecte' services={servicesNode} />
      <Suspense fallback={<ProjectsGridSkeleton />}>
        <GridWrapper />
      </Suspense>
    </main>
  )
}