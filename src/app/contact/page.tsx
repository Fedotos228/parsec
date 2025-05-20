'use client'

import Contact from '@/components/blocks/home/contact'
import Loader from '@/components/elements/loader'
import { contactService } from '@/services/contact.service'
import { IHeadingSection } from '@/types/pages.types'
import { useQuery } from '@tanstack/react-query'

export default function ContactPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['contact'],
    queryFn: () => contactService.getContactPage(),
    select: data => data.data.contact
  })

  console.log('contactPage', data)

  const contactPage = data || {} as IHeadingSection
  if (isLoading) return <Loader loading={isLoading} />

  return <Contact content={contactPage || {}} />
}
