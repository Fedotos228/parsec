import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'
import ServicesButtons from '../services-buttons'

export default function ServicesHero() {
  return (
    <div className='h-lvh'>
      <div className='flex flex-col items-center justify-center h-full'>
        <Paragraph color='accent' className='text-center'>
          Servicii
        </Paragraph>
        <Heading level={1} className='text-center mb-11'>
          De la idee la execuție, <br />
          acoperim <em>totul</em>
        </Heading>
        <ServicesButtons />
      </div>
    </div>
  )
}
