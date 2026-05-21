'use client'

import { FragmentType, useFragment } from '@/gql'
import { ProjectDetailsFragment } from '@/gql/graphql'
import { fetchMoreProjects } from '@/app/projects/actions'
import { ProjectDetails } from '@/queries/projects.queries'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Card from './card'

interface PageInfo {
  hasNextPage: boolean
  endCursor?: string | null
}

interface GridProps {
  projects: FragmentType<typeof ProjectDetails>[]
  initialPageInfo: PageInfo
}

export default function Grid({ projects, initialPageInfo }: GridProps) {
  const activeFilter = useSearchParams().get('filter')
  const initialProjects = useFragment(ProjectDetails, projects)
  const [allProjects, setAllProjects] = useState<ProjectDetailsFragment[]>(() => [...initialProjects])
  const [pageInfo, setPageInfo] = useState(initialPageInfo)
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState<string | null>(activeFilter)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setFilter(!activeFilter || activeFilter === 'all' ? null : activeFilter)
  }, [activeFilter])

  useEffect(() => {
    if (!pageInfo.hasNextPage || !sentinelRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageInfo.hasNextPage, pageInfo.endCursor, loading])

  async function loadMore() {
    if (!pageInfo.endCursor || loading) return
    setLoading(true)
    try {
      const { nodes, pageInfo: nextPageInfo } = await fetchMoreProjects(pageInfo.endCursor)
      setAllProjects((prev) => [...prev, ...(nodes as unknown as ProjectDetailsFragment[])])
      setPageInfo(nextPageInfo)
    } finally {
      setLoading(false)
    }
  }

  const filteredProjects = !filter
    ? allProjects
    : allProjects.filter((project) =>
        project.services?.nodes.some((service) => service.slug === filter)
      )

  return (
    <div className='flex flex-col gap-6 px-3.5 my-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
        {filteredProjects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
        {loading && [0, 1, 2].map((i) => (
          <div key={i} className='w-full h-134.5 bg-lable-dark animate-pulse rounded-lg' />
        ))}
      </div>
      {pageInfo.hasNextPage && <div ref={sentinelRef} />}
    </div>
  )
}
