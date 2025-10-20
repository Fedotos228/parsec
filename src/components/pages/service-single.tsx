'use client'

import Loader from '@/components/elements/loader'

import { useStrapiQuery } from '@/hooks/use-strapi'
import { servicesService } from '@/services/services.service'
import { notFound } from 'next/navigation'
import ServiceSingleHero from '../blocks/service-single/service-single-hero'
import ServiceSingleProjects from '../blocks/service-single/service-single-projects'

export default function ServiceSingle({
  slug
}: {
  slug: string
}) {
  const { data, isLoading } = useStrapiQuery(
    ['singleService', slug],
    () => servicesService.getSingleService(slug),
  )

  if (isLoading) return <Loader />
  
  const serviceSingle = data?.[0]
  if (!serviceSingle) return notFound()

  const { title, tags, description, projects } = serviceSingle


  return (
    <>
      <ServiceSingleHero
        title={title}
        tags={tags}
        description={description}
      />
      <ServiceSingleProjects
        projects={Array.isArray(projects) ? projects : projects ? [projects] : []}
      />
    </>
  )
}