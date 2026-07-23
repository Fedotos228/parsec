
import { FragmentType, useFragment } from '@/gql'
import { getFeaturedImage } from '@/lib/utils/getFeaturedImage'
import { sanitizeHtml } from '@/lib/utils/sanitize'
import { ProjectFragment } from '@/queries/domains.queries'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  card: FragmentType<typeof ProjectFragment>
}

export default function ProjectCard(props: ProjectCardProps) {
  const card = useFragment(ProjectFragment, props.card)

  const { url: featuredImageUrl, altText } = getFeaturedImage(card)

  return (
    <Link href={`/projects/${card.slug}`}>
      {featuredImageUrl && (
        <Image
          src={featuredImageUrl}
          alt={altText || card.title || "Project Card Image"}
          width={450}
          height={500}
          sizes='(max-width: 1024px) 100vw, 450px'
          className='w-full lg:h-100 2xl:h-125 object-cover mb-6'
        />
      )}
      <h5 className='mb-2'>{card.title}</h5>
      {card?.projectFields?.shortDescription && (
        <div
          className='text-foreground/80'
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(card.projectFields?.shortDescription) }}
        />
      )}
    </Link>
  )
}