'use server'

import { getNodes } from '@/lib/utils/getNodes'
import { Projects } from '@/queries/projects.queries'
import { wpFetch } from '@/queries/wordpress'

export async function fetchMoreProjects(after: string) {
  const { projects } = await wpFetch(Projects, { after })
  return {
    nodes: getNodes(projects),
    pageInfo: projects?.pageInfo ?? { hasNextPage: false, endCursor: null },
  }
}
