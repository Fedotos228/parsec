import ServiceSingle from './service-single'

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
