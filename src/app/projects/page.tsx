import GridWrapper from '@/components/pages/projects/grid-wrapper'
import Hero from '@/components/pages/projects/hero'
import ProjectsGridSkeleton from '@/components/pages/projects/skeleton-card'
import { getNodes } from '@/lib/utils/notNullable'
import { ServcesTaxonomieQuery } from '@/queries/service.queries'
import { wpFetch } from '@/queries/wordpress'
import { Suspense } from 'react'

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