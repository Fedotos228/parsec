'use client'

import ProjectSingleHero from '@/components/blocks/project-single/project-single-hero'
import Loader from '@/components/elements/loader'
import { projectService } from '@/services/projects.service'
import { IProject } from '@/types/project.types'
import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'

export default function ProjectSingle({ slug }: { slug: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['singleProject', slug],
    queryFn: () => projectService.getSingleProject(slug),
    select: data => data.data[0]
  })

  const project = data as IProject | undefined

  if (isLoading) return <Loader />
  if (!project) return notFound()

  return (
    <div>
      <ProjectSingleHero
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
