import { strapiMedia } from '@/lib/utils'
import { HomeHeroTypes } from '@/types/pages.types'
import Link from 'next/link'
import ScrollButton from '../../elements/scroll-button'
import { LongArrow } from '../../icons'
import { Button } from '../../ui/button'
import { Paragraph } from '../../ui/typography/paragraph'
import BlockRendererClient from '../block-renderer-client'

export default function Hero({
  content
}: {
  content: HomeHeroTypes
}) {
  return (
    <section className='relative h-lvh'>
      <video
        className='absolute inset-0 w-full h-full object-cover -z-1'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={strapiMedia(content.video.url)} type='video/mp4' />
      </video>
      <div className='w-full absolute bottom-8 md:bottom-16 pr-3 md:pr-20 default-padding'>
        <Paragraph className='uppercase mb-4' type='sm' color='accent'>
          Agenție de comunicare
        </Paragraph>
        <BlockRendererClient content={content?.heading} />
        <div className='w-full flex items-center justify-between'>
          <Button variant='mainWhite' asChild className='mt-4'>
            <Link href='/projects'>
              Vezi Proiectele
              <LongArrow className='fill-foreground group-hover:fill-neutral-900' />
            </Link>
          </Button>
          <ScrollButton />
        </div>
      </div>
    </section>
  )
}
