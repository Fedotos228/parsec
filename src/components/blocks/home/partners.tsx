import PartnersLogo from '@/components/elements/parters-logo/partners-logo'
import PartnersSwiper from '@/components/elements/sliders/partners-swiper'
import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'

export default function Partners() {
  return (
    <div className=' h-dvh max-w-[1216px] mx-auto'>
      <div className='mb-20'>
        <Paragraph type='sm' color='accent' className='uppercase mb-4'>
          Partenerii noaștri
        </Paragraph>
        <Heading>
          Ce spun <em>partenerii</em> <br />
          noștri despre noi
        </Heading>
      </div>
      <PartnersSwiper />
      <PartnersLogo />
    </div>
  )
}
