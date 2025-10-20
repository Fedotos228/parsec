import { Paragraph } from '@/components/ui/typography/paragraph'

import { Heading } from '@/components/ui/typography/heading'
import { ProjectsType } from '@/types/projects.types'

import ProjectCard from '@/components/elements/project-card'


export default function ServiceSingleProjects({
  projects
}: {
  projects: ProjectsType[]
}) {
  return (
    <div className='relative h-lvh default-inline-padding'>
      <Paragraph color='accent' type='sm'>
        Portofoliu
      </Paragraph>
      <Heading>
        Lucrările noastre
      </Heading>

      <div className='grid grid-cols-3 gap-4 mt-8'>
        {projects.map(project => (
          <ProjectCard key={project.documentId} project={project} />
        ))}
      </div>
    </div>
  )
}
