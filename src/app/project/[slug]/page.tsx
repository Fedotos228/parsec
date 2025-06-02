import ProjectSingle from './project-single'

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data } = await fetch(
    `${process.env.STRAPI_URL}/projects?filters[slug][$eq]=${slug}&fields[0]=title&fields[1]=documentId`
  ).then(res => res.json()).catch((err) => console.log(err))

  return data?.map((item: { id: number, slug: string, title: string }) => ({
    slug: item.slug,
    title: item.title,
  }))
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
