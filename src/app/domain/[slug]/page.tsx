import Hero from '@/components/pages/services/hero'
import ServicesList from '@/components/pages/services/services-list'
import CTA from '@/components/shared/cta'
import { getNodes } from '@/lib/utils/notNullable'
import { DomainQuery } from '@/queries/domains.queries'
import { wpFetch } from '@/queries/wordpress'
import { notFound } from 'next/navigation'

export default async function page({ params }: PageProps<'/domain/[slug]'>) {
  const { slug } = (await params)
  const data = await wpFetch(DomainQuery, { slug: slug })
  if (!data.domainBy) return notFound()

  const heroData = data.domainBy?.serviceFields?.hero
  const title = data.domainBy?.title ?? 'Serviciu'
  const services = getNodes(data.domainBy.services)


  return (
    <div>
      <Hero
        background={heroData?.video}
        title={title}
        description={heroData?.description}
      />
      <ServicesList
        services={services}
      />
      <CTA />
    </div>
  )
}