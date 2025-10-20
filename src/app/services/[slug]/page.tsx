import ServiceSingle from '@/components/pages/service-single'
import { strapiMedia } from '@/lib/utils'

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data } = await fetch(
    `${process.env.STRAPI_URL}/services?filters[slug][$eq]=${slug}&populate[image][fields][0]=url`
  ).then(res => res.json()).catch((err) => console.log(err))

  const service = data?.[0]

  return {
    title: service?.title || 'Service',
    description: service?.description || 'Service description',
    openGraph: {
      title: service?.title || 'Service',
      description: service?.description || 'Service description',
      siteName: 'Parsec',
      images: [{
        url: strapiMedia(service?.image?.url)
      }],
      url: `${process.env.SITE_URL}/services/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: service?.title || 'Service',
      description: service?.description || 'Service description',
      images: [{
        url: strapiMedia(service?.image?.url)
      }],
    }
  }
}

export async function generateStaticParams() {
  const { data } = await fetch(
    `${process.env.STRAPI_URL}/services?fields[0]=slug&fields[1]=documentId`
  ).then(res => res.json()).catch((err) => console.log(err))

  return data?.map((item: { id: number, slug: string }) => ({
    slug: item.slug,
  }))
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <ServiceSingle slug={slug} />
  )
}