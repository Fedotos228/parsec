import paths from '@/lib/paths'
import { formattingDate, strapiMedia } from '@/lib/utils'
import { IProject } from '@/types/project.types'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '../ui/typography/heading'
import { Paragraph } from '../ui/typography/paragraph'

export default function ProjectCard({
  project
}: {
  project: IProject
}) {
  return (
    <Link href={paths.projectsSingle(project.slug)} key={project.id} className=''>
      <div className='relative w-full h-[300px] inset-0 -z-10'>
        <Image
          src={strapiMedia(project?.thumbnail?.url)}
          alt={`Project thumbnail for ${project.title}`}
          fill
          objectFit='cover'
        />
      </div>
      <Heading level={4} className='text-foreground mt-3'>
        {project.title}
      </Heading>
      <Paragraph className='mt-2 font-bold'>
        {project.company} - {formattingDate(project.date)}
      </Paragraph>
      <Paragraph color={'gray'}>
        {project?.services?.map((service, index) => (
          <span key={service.id}>
            {service.title}
            {index < project.services.length - 1 ? ', ' : ''}
          </span>
        ))}
      </Paragraph>
    </Link>
  )
}
