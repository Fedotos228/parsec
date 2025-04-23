import Box from '@/components/elements/box'
import Image from 'next/image'
import SectionGrid from '../../elements/section-grid'
import { Heading } from '../../ui/typography/heading'
import { Paragraph } from '../../ui/typography/paragraph'
export default function About() {
  return (
    <div>
      <SectionGrid>
        <Box className='max-w-[468px]'>
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
        </Box>

        <Image
          src={'/assets/image/cyclist.png'}
          alt='About'
          className='h-dvh w-full object-cover'
          width={720}
          height={1024}
        />
      </SectionGrid>
    </div>
  )
}
