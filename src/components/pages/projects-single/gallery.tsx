'use client'

import { FragmentType, useFragment } from '@/gql'
import useFancybox from '@/hook/useFancybox'
import { GalleryFragment } from '@/queries/fragments.queries'
import "@fancyapps/ui/dist/fancybox/fancybox.css"
import Image from 'next/image'
import Link from 'next/link'

interface GalleryProps {
  images: FragmentType<typeof GalleryFragment>
}

export default function Gallery({ images }: GalleryProps) {
  const galleryImages = useFragment(GalleryFragment, images)
  const [fancyboxRef] = useFancybox({
    Carousel: {}
  })


  return (
    <div ref={fancyboxRef} className='grid grid-cols-2 gap-6'>
      {galleryImages.nodes.map((item, i) => (
        <Link
          key={i}
          href={item.sourceUrl || '#'}
          data-fancybox="project gallery"
          className='first-of-type:col-span-2 h-auto'
        >
          {item.sourceUrl && (
            <Image
              src={item.sourceUrl}
              alt={item.altText || 'Gallery image'}
              width={450}
              height={500}
              className='w-full h-full object-cover'
            />
          )}
        </Link>
      ))}
    </div>
  )
}
