import Image from 'next/image'

import Box from '@/components/elements/box'
import SectionGrid from '@/components/elements/section-grid'
import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'

type ProjectHeroProps = {
  date: string
  title: string
  company: string
  serviceProvided: string[]
  image: string
}

export default function ProjectHero({ date, title, company, serviceProvided, image }: ProjectHeroProps) {
  return (
    <SectionGrid>
      <Box>
        <Paragraph color='accent' type='sm' className='mb-2'>
          {date}
        </Paragraph>
        <Heading level={1} className='mb-4'>
          {title} - {company}
        </Heading>
        <Paragraph className=''>
          {serviceProvided.map((service, index) => (
            <span key={index}>
              {service}
              {index < serviceProvided.length - 1 ? ', ' : ''}
            </span>
          ))}
        </Paragraph>
      </Box>
      <Image
        src={image || ''}
        alt={title || 'Proiect image'}
        width={500}
        height={500}
        className='h-lvh w-full object-cover'
      />
    </SectionGrid>
  )
}
