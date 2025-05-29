'use client'

import Loader from '@/components/elements/loader'
import { servicesService } from '@/services/services.service'
import { useQuery } from '@tanstack/react-query'

import ServiceSingleHero from '@/components/blocks/service-single/service-single-hero'
import ServiceSingleProjects from '@/components/blocks/service-single/service-single-projects'
import { IServiceItem } from '@/types/services.types'

export default function ServiceSingle({
  documentId
}: {
  documentId: string
}) {
  const { data, isLoading } = useQuery({
    queryKey: ['singleService', documentId],
    queryFn: () => servicesService.getSingleService(documentId),
    select: data => data.data
  })

  const serviceSingle = data || {} as IServiceItem

  if (isLoading) return <Loader loading={isLoading} />

  return (
    <div>
      <ServiceSingleHero
        title={serviceSingle?.title}
        tags={serviceSingle?.tags}
        description={serviceSingle?.description}
      />
      <ServiceSingleProjects
        projects={serviceSingle?.projects}
      />
    </div>
  )
}