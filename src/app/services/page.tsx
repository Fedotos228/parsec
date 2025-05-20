'use client'

import ServicesHero from '@/components/blocks/services/services-hero'
import ServicesItems from '@/components/blocks/services/services-items'
import Loader from '@/components/elements/loader'
import { servicesService } from '@/services/services.service'
import { IServiceItem, ServicesSlugs } from '@/types/services.types'
import { useQuery } from '@tanstack/react-query'

export default function ServicesPage() {
  const { data: services, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: () => servicesService.getServices(),
    select: (data) => data.data as IServiceItem[]
  })
 
  function getSlugServices(): ServicesSlugs {
    const slugMap = services?.map((item) => {
      return {
        title: item.title,
        slug: item.slug,
        documentId: item.documentId
      }
    })

    return slugMap || []
  }

  const slugs = getSlugServices()

  if (isLoading) return <Loader loading={isLoading} />

  return (
    <>
      <ServicesHero slugs={slugs} />
      <ServicesItems services={services || []} />
    </>
  )
}