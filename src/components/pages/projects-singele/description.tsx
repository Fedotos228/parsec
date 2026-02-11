
interface ProjectDescriptionProps {
  year: string | undefined | null
  content: string | undefined | null
  client: string | undefined | null
}

export default function Description({ content, year, client }: ProjectDescriptionProps) {
  return (
    <div className='w-full md:max-w-112.5'>
      <p className='mb-3'>Client: <strong>{client}</strong></p>
      <p className='mb-3'>Anul: <strong>{year}</strong></p>
      {content && (
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className='project-single__content'
        />
      )}
    </div>
  )
}
