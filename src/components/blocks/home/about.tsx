'use client'

import Box from '@/components/elements/box'
import SectionGrid from '@/components/elements/section-grid'
import { strapiMedia } from '@/lib/utils'
import Image from 'next/image'
import { Heading } from '../../ui/typography/heading'
import { Paragraph } from '../../ui/typography/paragraph'

export default function About({ content }: any) {

  const mainContent = (
    <>
      <Paragraph type='sm' color='accent' className='mb-4'>
        {content?.subtitle}
      </Paragraph>
      <Heading level={2} className='mb-8'>
        {content?.title}
      </Heading>
      <Paragraph type='lg' color='gray'>
        {content?.description}
      </Paragraph>
    </>
  )

  return (
    <>
      <SectionGrid className='hidden lg:grid'>
        <Box className='max-w-[468px]'>
          {mainContent}
        </Box>

        <Image
          src={'/assets/image/cyclist.png'}
          alt='About'
          className='h-lvh w-full object-cover'
          width={720}
          height={1024}
        />
      </SectionGrid>


      <div className='relative h-lvh lg:hidden'>
        <Image
          src={strapiMedia(content?.image?.url)}
          alt='About'
          className='absolute inset-0 -z-10 h-full w-full object-cover mask-b-from-35%'
          width={720}
          height={1024}
          priority
        />
        <Box className='absolute bottom-8 sm:bottom-2/12'>
          {mainContent}
        </Box>
      </div>
    </>
  )
}
