import ServiceSingle from './service-single'

export async function generateStaticParams() {
  const { data } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services?fields[0]=documentId`).then(res => res.json())

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