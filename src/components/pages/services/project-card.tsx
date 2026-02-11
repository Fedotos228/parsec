
import { FragmentType, useFragment } from '@/gql'
import { ProjectFragment } from '@/queries/domains.queries'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  card: FragmentType<typeof ProjectFragment>
}

export default function ProjectCard(props: ProjectCardProps) {
  const card = useFragment(ProjectFragment, props.card)

  return (
    <Link href={`/projects/${card.slug}`}>
      {card.featuredImage?.node.sourceUrl && (
        <Image
          src={card.featuredImage?.node.sourceUrl}
          alt={card.featuredImage?.node.altText || "Project Card Image"}
          width={450}
          height={500}
          className='w-full lg:h-100 2xl:h-125 object-cover mb-6'
        />
      )}
      <h5 className='mb-2'>{card.title}</h5>
      {card?.projectFields?.shortDescription && (
        <div
          className='text-foreground/80'
          dangerouslySetInnerHTML={{ __html: card.projectFields?.shortDescription }}
        />
      )}
    </Link>
  )
}