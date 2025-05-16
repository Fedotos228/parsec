import ProjectSingle from './project-single'

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
