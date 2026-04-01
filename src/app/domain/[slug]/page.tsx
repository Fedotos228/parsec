import Hero from '@/components/pages/services/hero'
import ServicesList from '@/components/pages/services/services-list'
import CTA from '@/components/shared/cta'
import { getNodes } from '@/lib/utils/getNodes'
import { DomainQuery } from '@/queries/domains.queries'
import { wpFetch } from '@/queries/wordpress'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params
  const data = await wpFetch(DomainQuery, { slug })

  const title = data.domainBy?.title || 'Serviciu PR'
  const description = data.domainBy?.serviceFields?.hero?.shortDescription || 'Servicii profesionale de consultanță.'

  return {
    title: `${title}`,
    description: description.substring(0, 160),
    alternates: {
      canonical: `https://parsec.md/domain/${slug}`,
    },
    openGraph: {
      title: `${title} | Consultanță Strategică`,
      images: [{
        url: data.domainBy?.featuredImage?.node.sourceUrl || '/og-image.jpg',
        width: 1200,
        height: 630,
      }],
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