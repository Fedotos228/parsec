'use client'

import ProjectCard from '@/components/elements/project-card'
import { projectService } from '@/services/projects.service'
import { IProject } from '@/types/project.types'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

export default function ProjectList() {
  const servicesSearchParams = useSearchParams().get('service')
  const service = servicesSearchParams ? servicesSearchParams : 'event-managment'

  const { data, isLoading } = useQuery({
    queryKey: ['projects', service],
    queryFn: () => projectService.getFilteredProjects(service),
    select: (data) => data.data,
  })

  const projects = data as IProject[]

  return (
    <div>
      <div className='min-h-lvh grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-4'>
        {isLoading ? (
          <>
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className='h-[400px] w-full bg-neutral-500 animate-pulse rounded-lg'></div>
            ))}
          </>
        ) : (
          <>
            {projects?.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}
