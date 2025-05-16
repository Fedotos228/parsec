'use client'

import ServicesHero from '@/components/blocks/services/services-hero'
import ServicesItems from '@/components/blocks/services/services-items'
import Loader from '@/components/elements/loader'
import { servicesService } from '@/services/services.service'
import { ServicesType } from '@/types/services.types'
import { useQuery } from '@tanstack/react-query'

export default function ServicesPage() {
  const { data: services, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: () => servicesService.getServices(),
    select: data => data.data
  })

  function getSlugServices(): ServicesType {
    const slugMap = services?.map((item: any) => {
      return {
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
      <ServicesHero slugs={slugs} />
      <ServicesItems services={services} />
    </>
  )
}
