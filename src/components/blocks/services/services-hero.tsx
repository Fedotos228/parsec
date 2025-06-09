import ScrollButton from '@/components/elements/scroll-button'
import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'
import { ServicesSlugs } from '@/types/services.types'
import ServicesButtons from '../../elements/services-buttons'

export default function ServicesHero({ slugs }: { slugs: ServicesSlugs }) {
  return (
    <div className='relative h-lvh' style={{ background: 'url("/assets/image/service-bg.png") 50% 50% / cover no-repeat' }}>
      <div className='flex flex-col items-center justify-center h-full'>
        <Paragraph color='accent' className='text-center'>
          Servicii
        </Paragraph>
        <Heading level={1} className='text-center mb-11'>
          De la idee la execuție, <br />
          acoperim <em>totul</em>
        </Heading>
        <ServicesButtons slugs={slugs} />
      </div>
      <ScrollButton className='absolute bottom-9 right-2.5 md:bottom-20 md:right-20' />
    </div>
  )
}