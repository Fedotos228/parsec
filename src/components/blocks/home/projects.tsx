'use client'

import Box from '@/components/elements/box'
import SectionGrid from '@/components/elements/section-grid'
import ProjectsSwiper from '@/components/elements/sliders/projects-swiper'
import { LongArrow } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'

export default function Projects() {

  return (
    <SectionGrid className='grid-rows-[30%_1fr] sm:grid-rows-1 grid-cols-1 sm:grid-cols-1 '>
      <Box >
        <Paragraph type='sm' color='accent' className='mb-4'>
          Proiectele noastre
        </Paragraph>
        <Heading className='mb-3 sm:mb-8 lg:mb-12 text-foreground'>
          Povestea succesului, <br />
          proiect cu proiect
        </Heading>

        <Button>
          Vezi proiecte
          <LongArrow className='fill-foreground group-hover:fill-neutral-900' />
        </Button>
      </Box>
      <ProjectsSwiper />
    </SectionGrid>
  )
}