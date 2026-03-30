import { MetadataRoute } from 'next'

const API_URL = process.env.API_URL as string

async function fetchSlugs(): Promise<{ projects: string[]; domains: string[] }> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        projects(first: 100) { nodes { slug } }
        domains(first: 100) { nodes { slug } }
      }`,
    }),
    next: { revalidate: 3600 },
  })

  const { data } = await res.json()

  return {
    projects: (data?.projects?.nodes ?? []).map((n: { slug: string }) => n.slug),
    domains: (data?.domains?.nodes ?? []).map((n: { slug: string }) => n.slug),
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://parsec.md'
  const { projects, domains } = await fetchSlugs()

  return [
    { url: base, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/projects`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/contact`, changeFrequency: 'yearly', priority: 0.5 },
    ...domains.map((slug) => ({
      url: `${base}/domain/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...projects.map((slug) => ({
      url: `${base}/projects/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}