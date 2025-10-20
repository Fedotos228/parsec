import Image from 'next/image'

import Box from '@/components/elements/box'
import SectionGrid from '@/components/elements/section-grid'
import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'
import { formattingDate, strapiMedia } from '@/lib/utils'
import { ProjectsType } from '@/types/projects.types'

export default function ProjectSingleHero({
  title,
  company,
  thumbnail,
  date,
  services,
}: {
  title: string
  company: string
  date: string
  thumbnail: ProjectsType['thumbnail']
  services: ProjectsType['services']
}) {
  return (
    <SectionGrid>
      <Box>
        <Paragraph color='accent' type='sm' className='mb-2'>
          {formattingDate(date)}
        </Paragraph>
        <Heading level={1} className='mb-4'>
          {title}
        </Heading>
        <Heading level={2} className='mb-4'>
          {company}
        </Heading>
        <Paragraph className=''>
          {services.map((service, index) => (
            <span key={service.documentId}>
              {service.title}
              {index < services.length - 1 ? ', ' : ''}
            </span>
          ))}
        </Paragraph>
      </Box>
      <Image
        src={strapiMedia(thumbnail.url)}
        alt={title || 'Proiect image'}
        width={500}
        height={500}
        className='h-lvh w-full object-cover'
      />
    </SectionGrid>
  )
}
