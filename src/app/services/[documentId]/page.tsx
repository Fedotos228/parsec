import ServiceSingle from './service-single'

export async function generateStaticParams() {
  const { data } = await fetch(
    `${process.env.STRAPI_URL}/services?fields[0]=documentId`
  ).then(res => res.json()).catch((err) => console.log(err))

  return data.map((item: { id: number, documentId: string }) => ({
    documentId: item.documentId,
  }))
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ documentId: string }>
}) {
  const { documentId } = await params

  return (
    <ServiceSingle documentId={documentId} />
  )
}