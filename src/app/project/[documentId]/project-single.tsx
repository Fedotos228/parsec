'use client'

import ProjectHero from '@/components/blocks/project/project-hero'
import Loader from '@/components/elements/loader'
import { projectService } from '@/services/projects.service'
import { IProject } from '@/types/project.types'
import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'

export default function ProjectSingle({ documentId }: { documentId: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['singleProject', documentId],
    queryFn: () => projectService.getSingleProject(documentId),
    select: data => data.data
  })

  const project = data as IProject | undefined

  if (isLoading) return <Loader />

  if (!project) return notFound()

  return (
    <div>
      <ProjectHero
        hero={project}
      />
      {/* {project?.content.map((content, index) => (
        <ProjectContent
          key={index}
          content={content}
        />
      ))} */}
    </div>
  )
}
