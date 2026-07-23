import Hero from '@/components/pages/services/hero'
import ServicesList from '@/components/pages/services/services-list'
import CTA from '@/components/shared/cta'
import { getNodes } from '@/lib/utils/getNodes'
import { DomainQuery } from '@/queries/domains.queries'
import { wpFetch } from '@/queries/wordpress'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = (await params)
  const data = await wpFetch(DomainQuery, { slug })
  
  const title = data.domainBy?.title || 'Serviciu PR'
  const description = data.domainBy?.serviceFields?.hero?.shortDescription || 'Servicii profesionale de consultanță.'

  const ogDescription = description.substring(0, 160)
  const ogImage = data.domainBy?.featuredImage?.node.sourceUrl || 'https://parsec.md/opengraph-image'

  return {
    title: `${title}`,
    description: ogDescription,
    alternates: {
      canonical: `https://parsec.md/domain/${slug}`,
    },
    openGraph: {
      title: `${title} | Consultanță Strategică`,
      description: ogDescription,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Consultanță Strategică`,
      description: ogDescription,
      images: [ogImage],
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: heroData?.description?.replace(/<[^>]*>/g, '') || undefined,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Parsec',
      url: 'https://parsec.md',
    },
    url: `https://parsec.md/domain/${slug}`,
  }

  return (
    <div>
      <Script
        id="domain-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
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