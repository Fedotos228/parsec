'use client'

import Box from '@/components/elements/box'
import SectionGrid from '@/components/elements/section-grid'
import ProjectsSwiper from '@/components/elements/sliders/projects-swiper'
import { LongArrow } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Paragraph } from '@/components/ui/typography/paragraph'
import { IHeadingSection } from '@/types/pages.types'
import BlockRendererClient from '../block-renderer-client'

export default function Projects({
  content
}: {
  content: IHeadingSection
}) {
  return (
    <SectionGrid className='grid-rows-[30%_1fr] sm:grid-rows-1 grid-cols-1 sm:grid-cols-1 '>
      <Box className='max-w-[468px]'>
        <Paragraph type='sm' color='accent' className='mb-4'>
          {content?.subtitle}
        </Paragraph>
        <BlockRendererClient content={content?.heading} headingClassName='mb-3 sm:mb-8 lg:mb-12 text-foreground' />
        <Button>
          Vezi proiecte
          <LongArrow className='fill-foreground group-hover:fill-neutral-900' />
        </Button>
      </Box>
      <ProjectsSwiper />
    </SectionGrid>
  )
}