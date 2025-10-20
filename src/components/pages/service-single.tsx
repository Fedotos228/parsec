'use client'

import Loader from '@/components/elements/loader'

import { useStrapiQuery } from '@/hooks/use-strapi'
import { servicesService } from '@/services/services.service'
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
  if (!serviceSingle) return <div>
    <h1 className='text-8xl font-bold text-center text-accent-500'>404</h1>
    <h2 className='text-3xl font-bold text-center text-neutral-300'>Pagina nu există</h2>
  </div>

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