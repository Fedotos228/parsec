import Box from '@/components/elements/box'
import ContactLinks from '@/components/elements/contact-links'
import SectionGrin from '@/components/elements/section-grid'
import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'
import ContactForm from '../contact-form'


export default function Contact() {
  return (
    <SectionGrin>
      <Box className='gap-1/2 max-w-[468px]'>
        <div className=''>
          <Paragraph color='accent'>
            Proiectele noastre
          </Paragraph>
          <Heading level={2}>
            Începe o <br />
            conversație cu noi
          </Heading>
        </div>
        <ContactLinks />
      </Box>
      <div className='bg-accent-500 flex items-center justify-center'>
        <ContactForm />
      </div>
    </SectionGrin>
  )
}