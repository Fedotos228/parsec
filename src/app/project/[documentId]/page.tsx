import ProjectSingle from './project-single'

export async function generateStaticParams() {
  const { data } = await fetch(
    `${process.env.STRAPI_URL}/projects?fields[0]=documentId`
  ).then(res => res.json())

  return data.map((item: { id: number, documentId: string }) => ({
    documentId: item.documentId,
  }))
}

export default async function page({
  params,
}: {
  params: Promise<{ documentId: string }>
}) {
  const { documentId } = await params

  return (
    <ProjectSingle documentId={documentId} />
  )
}
