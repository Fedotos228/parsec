'use client'

import Loader from '@/components/elements/loader'
import { useStrapiQuery } from '@/hooks/use-strapi'
import { pagesService } from '@/services/pages.service'
import { IHeadingSection } from '@/types/pages.types'
import { notFound } from 'next/navigation'
import Contact from '../blocks/home/contact'

export default function ContactPage() {
  const { data, isLoading } = useStrapiQuery<IHeadingSection>(
    ['contact'],
    () => pagesService.getContactPage()
  )

  if (isLoading) return <Loader />
  if(!data) return notFound()

  return <Contact content={data} />
}
