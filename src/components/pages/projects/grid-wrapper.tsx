import { getNodes } from '@/lib/utils/notNullable'
import { Projects } from '@/queries/projects.queries'
import { wpFetch } from '@/queries/wordpress'
import Grid from './grid'

export default async function GridWrapper() {
  const { projects } = await wpFetch(Projects)
  const projectNode = getNodes(projects)

  return <Grid projects={projectNode} />
}
