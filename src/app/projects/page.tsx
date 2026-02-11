import Grid from '@/components/pages/projects/grid'
import Hero from '@/components/pages/projects/hero'
import { getNodes } from '@/lib/utils/notNullable'
import { Projects } from '@/queries/projects.queries'
import { ServcesTaxonomieQuery } from '@/queries/service.queries'
import { wpFetch } from '@/queries/wordpress'



export default async function ProjectsPage() {
  const { services } = await wpFetch(ServcesTaxonomieQuery)
  const { projects } = await wpFetch(Projects)

  const servicesNode = getNodes(services)
  const projectNode = getNodes(projects)

  return (
    <main>
      <Hero title='Proiecte' services={servicesNode} />
      <Grid projects={projectNode} />
    </main>
  )
}