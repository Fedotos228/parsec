'use client'

import Loader from '@/components/elements/loader'
import { useStrapiQuery } from '@/hooks/use-strapi'
import { pagesService } from '@/services/pages.service'
import { IHeadingSection } from '@/types/pages.types'
import Contact from '../blocks/home/contact'

export default function ContactPage() {
  const { data, isLoading } = useStrapiQuery<IHeadingSection>(
    ['contact'],
    () => pagesService.getContactPage()
  )

  if (isLoading) return <Loader />
  if(!data) return <div>
    <h1 className='text-8xl font-bold text-center text-accent-500'>404</h1>
    <h2 className='text-3xl font-bold text-center text-neutral-300'>Pagina nu există</h2>
  </div>

  return <Contact content={data} />
}
