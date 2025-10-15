'use client'

import Loader from '@/components/elements/loader'
import { useStrapiQuery } from '@/hooks/use-strapi'
import { servicesService } from '@/services/services.service'
import { IServiceItem, IServicesSlugs } from '@/types/services.types'
import ServicesItems from '../blocks/services/services-items'
import ScrollButton from '../elements/scroll-button'
import ServicesButtons from '../elements/services-buttons'
import { Heading } from '../ui/typography/heading'
import { Paragraph } from '../ui/typography/paragraph'

export default function ServicePage() {
  const { data: services, isLoading } = useStrapiQuery<IServiceItem[]>(
    ['services'],
    () => servicesService.getServices(),
  )

  console.log(services)

  function getSlugServices(): IServicesSlugs[] {
    const slugMap = services?.map((item) => {
      return {
        id: item.id,
        title: item.title,
        slug: item.slug,
        documentId: item.documentId
      }
    })

    return slugMap || []
  }

  const slugs = getSlugServices()

  if (isLoading) return <Loader />

  return (
    <>
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
      <ServicesItems services={services || []} />
    </>
  )
}
