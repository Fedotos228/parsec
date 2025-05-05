import Link from 'next/link'
import ScrollButton from '../../elements/scroll-button'
import { LongArrow } from '../../icons'
import { Button } from '../../ui/button'
import { Heading } from '../../ui/typography/heading'
import { Paragraph } from '../../ui/typography/paragraph'

export default function Hero() {
  return (
    <section className='relative h-lvh'>
      <video
        className='absolute inset-0 w-full h-full object-cover -z-1'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src='/assets/video/hero.mp4' type='video/mp4' />
      </video>
      <div className='w-full absolute bottom-8 md:bottom-16 pr-3 md:pr-20 default-padding'>
        <Paragraph className='uppercase mb-4' type='sm' color='accent'>
          Agenție de comunicare
        </Paragraph>
        <Heading level={1} className='mb-8 md:mb-12'>
          Transformăm ideile în <br />
          <i>strategii</i> care contează
        </Heading>
        <div className='w-full flex items-center justify-between'>
          <Button variant='mainWhite' asChild>
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
