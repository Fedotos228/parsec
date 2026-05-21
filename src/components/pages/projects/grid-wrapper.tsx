import { getNodes } from '@/lib/utils/getNodes'
import { Projects } from '@/queries/projects.queries'
import { wpFetch } from '@/queries/wordpress'
import Grid from './grid'

export default async function GridWrapper() {
  const { projects } = await wpFetch(Projects)
  const projectNodes = getNodes(projects)
  const pageInfo = projects?.pageInfo ?? { hasNextPage: false, endCursor: null }

  return <Grid projects={projectNodes} initialPageInfo={pageInfo} />
}
