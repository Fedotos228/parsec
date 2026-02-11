'use client'

import { FragmentType, useFragment } from '@/gql'
import { ProjectDetails } from '@/queries/projects.queries'
import { useSearchParams } from 'next/navigation'
import Card from './card'

interface GridProps {
  projects: FragmentType<typeof ProjectDetails>[]
}

export default function Grid({ projects }: GridProps) {
  const searchParams = useSearchParams()
  const activeFilter = searchParams.get('filter')

  const allProjects = useFragment(ProjectDetails, projects)

  const filteredProjects = !activeFilter || activeFilter === 'all'
    ? allProjects
    : allProjects.filter((project) =>
      project.services?.nodes.some(service => service.slug === activeFilter)
    )

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-3.5 my-20'>
      {filteredProjects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  )
}
