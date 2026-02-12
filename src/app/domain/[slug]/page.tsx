import Hero from '@/components/pages/services/hero'
import ServicesList from '@/components/pages/services/services-list'
import CTA from '@/components/shared/cta'
import { getNodes } from '@/lib/utils/notNullable'
import { DomainQuery } from '@/queries/domains.queries'
import { wpFetch } from '@/queries/wordpress'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params
  const data = await wpFetch(DomainQuery, { slug })

  const title = data.domainBy?.title || 'Serviciu PR'
  const description = data.domainBy?.serviceFields?.hero?.description || 'Servicii profesionale de consultanță.'

  return {
    title: `${title} | Parsec`,
    description: description.substring(0, 160), // Limită pentru Google
    openGraph: {
      title: `${title} | Consultanță Strategică`,
      images: [data.domainBy?.featuredImage?.node.sourceUrl || '/og-image.jpg'],
    },
  }
}

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