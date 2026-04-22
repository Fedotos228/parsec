'use client'

import { FragmentType, useFragment } from '@/gql'
import { ProjectDetails } from '@/queries/projects.queries'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Card from './card'

interface GridProps {
  projects: FragmentType<typeof ProjectDetails>[]
}

export default function Grid({ projects }: GridProps) {
  const activeFilter = useSearchParams().get('filter')
  const allProjects = useFragment(ProjectDetails, projects)
  const [filter, setFilter] = useState<string | null>(activeFilter)


  useEffect(() => {
    if (!activeFilter || activeFilter === 'all') {
      setFilter(null)
    } else {
      setFilter(activeFilter)
    }

    
  }, [activeFilter])

  const filteredProjects = !filter || filter === 'all'
    ? allProjects
    : allProjects.filter((project) =>
      project.services?.nodes.some(service => service.slug === filter)
    )

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-3.5 my-20'>
      {filteredProjects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  )
}
