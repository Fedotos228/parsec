import { FragmentType, useFragment } from '@/gql'
import { CardDetails } from '@/queries/projects.queries'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  project: FragmentType<typeof CardDetails>
}

export default function Card({ project }: CardProps) {
  const { title, slug, projectFields, featuredImage } = useFragment(CardDetails, project)

  return (
    <Link
      href={`projects/${slug}`}
      className='relative w-full h-134.5 rounded-lg overflow-hidden group cursor-pointer '
    >
      <div className='w-full h-full inset-0 project-card-bg'>
        {
          featuredImage?.node.sourceUrl && (
            <Image
              src={featuredImage?.node.sourceUrl}
              alt={featuredImage?.node.altText || 'Project image'}
              fill
              className='object-cover'
            />
          )
        }
      </div>
      <p className='absolute top-6 left-6 flex items-center gap-1.5 text-lg before:inline-block before:w-2.5 before:h-2.5 before:bg-red-400'>{title}</p>
      <span className='absolute top-6 right-6'>{projectFields?.year}</span>
      <div className='absolute inset-0 flex flex-col justify-between bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity p-6'>
        <h5>{projectFields?.client}</h5>

        {projectFields?.shortDescription && (
          <div
            className='prose prose-sm'
            dangerouslySetInnerHTML={{ __html: projectFields?.shortDescription }}
          />
        )}
      </div>
    </Link>
  )
}
