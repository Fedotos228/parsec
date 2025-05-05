'use client'

import Box from '@/components/elements/box'
import SectionGrid from '@/components/elements/section-grid'
import Image from 'next/image'
import { Heading } from '../../ui/typography/heading'
import { Paragraph } from '../../ui/typography/paragraph'

export default function About() {
  const mainContent = (
    <>
      <Paragraph type='sm' color='accent' className='mb-4'>
        Despre noi
      </Paragraph>
      <Heading level={2} className='mb-8'>
        Repede, calitativ
        și scump
      </Heading>
      <Paragraph type='lg' color='gray'>
        Parsec construiește ideile în strategii cu impact. Oferim soluții de comunicare, PR, foto-video și web, livrate rapid și eficient.
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
          src={'/assets/image/cyclist.png'}
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
