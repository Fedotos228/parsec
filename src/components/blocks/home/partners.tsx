import PartnersLogo from '@/components/elements/parters-logo/partners-logo'
import PartnersSwiper from '@/components/elements/sliders/partners-swiper'
import { Paragraph } from '@/components/ui/typography/paragraph'
import { IHeadingSection } from '@/types/pages.types'
import BlockRendererClient from '../block-renderer-client'

export default function Partners({
  content
}: {
  content: IHeadingSection
}) {
  return (
    <div className=' h-lvh px-4 md:px-10 xl:px-[112px] mx-auto'>
      <div className='my-10'>
        <Paragraph type='sm' color='accent' className='uppercase mb-4'>
          {content?.subtitle}
        </Paragraph>
        <BlockRendererClient content={content?.heading} />
      </div>
      <PartnersSwiper />
      <PartnersLogo />
    </div>
  )
}
