import Box from '@/components/elements/box'
import ContactLinks from '@/components/elements/contact-links'
import SectionGrin from '@/components/elements/section-grid'
import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'
import ContactForm from '../contact-form'

export default function Contact() {
  return (
    <SectionGrin className='grid-cols-1 md:grid-cols-2'>
      <Box className='gap-1/2 max-w-[468px] hidden md:flex'>
        <div className=''>
          <Paragraph color='accent'>
            Proiectele noastre
          </Paragraph>
          <Heading level={2}>
            Începe o <br />
            <em>conversație</em> cu noi
          </Heading>
        </div>
        <ContactLinks />
      </Box>
      <div className='bg-accent-500 flex flex-col items-center justify-center px-4'>
        <div className='md:hidden'>
          <Heading level={2} className='text-neutral-900 mb-6 text-center leading-normals'>
            Începe o <br />
            <em>conversație</em> cu noi
          </Heading>
        </div>
        <ContactForm />
      </div>
    </SectionGrin>
  )
}