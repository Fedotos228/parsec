import ProjectSingle from '@/components/pages/project-single'
import { strapiMedia } from '@/lib/utils'

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data } = await fetch(
    `${process.env.STRAPI_URL}/projects?filters[slug][$eq]=${slug}&populate[0]=seo&populate[1]=seo.shareImage`
  ).then(res => res.json()).catch((err) => console.log(err))

  const project = data?.[0]
  const { metaTitle, metaDescription, shareImage } = project?.seo

  return {
    title: metaTitle || project?.title,
    description: metaDescription,
    openGraph: {
      title: metaTitle || project?.title,
      description: metaDescription,
      url: `${process.env.SITE_URL}/projects/${slug}`,
      siteName: 'Parsec',
      images: [{
        url: strapiMedia(shareImage?.url)
      }]
    },
  }
}

export async function generateStaticParams() {
  const { data } = await fetch(
    `${process.env.STRAPI_URL}/projects?fields[0]=slug&fields[1]=documentId`
  ).then(res => res.json()).catch((err) => console.log(err))

  return data?.map((item: { id: number, slug: string }) => ({
    slug: item.slug,
  }))
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <ProjectSingle slug={slug} />
  )
}
