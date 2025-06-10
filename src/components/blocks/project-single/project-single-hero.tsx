import Image from 'next/image'

import Box from '@/components/elements/box'
import SectionGrid from '@/components/elements/section-grid'
import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'
import { formattingDate, strapiMedia } from '@/lib/utils'
import { IProject } from '@/types/project.types'

export default function ProjectSingleHero({
  hero
}: {
  hero: IProject
}) {
  return (
    <SectionGrid>
      <Box>
        <Paragraph color='accent' type='sm' className='mb-2'>
          {formattingDate(hero.date)}
        </Paragraph>
        <Heading level={1} className='mb-4'>
          {hero.title} - {hero.company}
        </Heading>
        <Paragraph className=''>
          {hero.services.map((service, index) => (
            <span key={service.documentId}>
              {service.title}
              {index < hero.services.length - 1 ? ', ' : ''}
            </span>
          ))}
        </Paragraph>
      </Box>
      <Image
        src={strapiMedia(hero.thumbnail.url)}
        alt={hero.title || 'Proiect image'}
        width={500}
        height={500}
        className='h-lvh w-full object-cover'
      />
    </SectionGrid>
  )
}
