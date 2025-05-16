import Image from 'next/image'

import Box from '@/components/elements/box'
import SectionGrid from '@/components/elements/section-grid'
import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'
import { formattingDate, strapiMedia } from '@/lib/utils'

type ProjectHeroProps = {
  date: string
  slug: string
  title: string
  company: string
  services: {
    title: string
    id: number
    documentId: string
  }[]
  thumbnail: {
    url: string
    documentId: string
    id: number
  }
}

export default function ProjectHero({ date, title, company, services, thumbnail }: ProjectHeroProps) {
  return (
    <SectionGrid>
      <Box>
        <Paragraph color='accent' type='sm' className='mb-2'>
          {formattingDate(date)}
        </Paragraph>
        <Heading level={1} className='mb-4'>
          {title} - {company}
        </Heading>
        <Paragraph className=''>
          {services.map((service, index) => (
            <span key={service.id}>
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
