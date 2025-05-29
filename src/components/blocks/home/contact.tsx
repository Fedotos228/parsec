import Box from '@/components/elements/box'
import ContactLinks from '@/components/elements/contact-links'
import SectionGrin from '@/components/elements/section-grid'
import { Paragraph } from '@/components/ui/typography/paragraph'
import { IHeadingSection } from '@/types/pages.types'
import BlockRendererClient from '../../elements/block-renderer-client'
import ContactForm from '../contact/contact-form'

export default function Contact({
  content
}: {
  content: IHeadingSection
}) {
  return (
    <SectionGrin className='grid-cols-1 md:grid-cols-2'>
      <Box className='gap-1/2 max-w-[468px] hidden md:flex'>
        <div className='mb-8 md:mb-20'>
          <Paragraph color='accent'>
            {content?.subtitle}
          </Paragraph>
          <BlockRendererClient content={content?.heading} />
        </div>
        <ContactLinks />
      </Box>
      <div className='bg-accent-500 flex flex-col items-center justify-center px-4'>
        <div className='md:hidden'>
          <BlockRendererClient content={content?.heading} headingClassName='text-neutral-900 mb-6 text-center leading-normals' />
        </div>
        <ContactForm />
      </div>
    </SectionGrin>
  )
}