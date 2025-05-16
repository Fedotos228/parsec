'use client'

import ProjectHero from '@/components/blocks/project/project-hero'
import Loader from '@/components/elements/loader'
import { projectService } from '@/services/projects.service'
import { useQuery } from '@tanstack/react-query'

export default function ProjectSingle({ documentId }: { documentId: string }) {
  const { data: project, isLoading } = useQuery({
    queryKey: ['singleProject', documentId],
    queryFn: () => projectService.getSingleProject(documentId),
    select: data => data.data
  })

  if (isLoading) return <Loader />

  return (
    <div>
      <ProjectHero
        date={project?.date}
        title={project?.title}
        slug={project?.slug}
        company={project?.company}
        services={project?.services}
        thumbnail={project?.thumbnail}
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
