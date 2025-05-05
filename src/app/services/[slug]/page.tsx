
type ServicesSingleProps = {
  params: {
    slug: string
  }
}

export default async function page({ params }: ServicesSingleProps) {
  const { slug } = await params

  return (
    <div>Service pages - {slug}</div>
  )
}
