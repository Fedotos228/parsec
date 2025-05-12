import ProjectContent from '@/components/blocks/project/project-content'
import ProjectHero from '@/components/blocks/project/project-hero'
import { projects } from '@/lib/projects.constants'

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await Promise.resolve(projects.find(project => project.slug === slug))

  return (
    <div>
      <ProjectHero
        date={project?.date || ''}
        title={project?.title || ''}
        company={project?.company || ''}
        serviceProvided={project?.serviceProvided || []}
        image={project?.image || ''}
      />
      {project?.content.map((content, index) => (
        <ProjectContent
          key={index}
          content={content}
        />
      ))}
    </div>
  )
}
