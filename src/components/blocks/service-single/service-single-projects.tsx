import { Paragraph } from '@/components/ui/typography/paragraph'

import { Heading } from '@/components/ui/typography/heading'
import { IProject } from '@/types/project.types'

import Image from 'next/image'


import paths from '@/lib/paths'
import { strapiMedia } from '@/lib/utils'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'


export default function ServiceSingleProjects({
  projects
}: {
  projects: IProject[]
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
          <Link href={paths.projectSingle(project.slug)} key={project.id} className='h-[300px] rounded-lg'>
            <div className='relative w-full h-full inset-0 -z-10'>
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
            <Paragraph className='text-foreground/70 relative bottom-0 z-50'>
              {project?.services?.map((service, index) => (
                <span key={service.id}>
                  {service.title}
                  {index < project.services.length - 1 ? ', ' : ''}
                </span>
              ))}
            </Paragraph>
          </Link>
        ))}
      </div>

    </div>
  )
}
