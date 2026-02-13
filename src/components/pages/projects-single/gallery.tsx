'use client'

import useFancybox from '@/hook/useFancybox'
import "@fancyapps/ui/dist/fancybox/fancybox.css"
import Image from 'next/image'
import Link from 'next/link'

interface IGallery {
  id: number,
  url: string,
  alt: string
}

const gallery: IGallery[] = [
  {
    id: 0,
    url: '/gallery1.png',
    alt: 'Gallerye',
  },
  {
    id: 1,
    url: '/galery2.png',
    alt: 'Gallerye',
  },
  {
    id: 2,
    url: '/gallery3.png',
    alt: 'Gallerye',
  }
]

export default function Gallery() {
  const [fancyboxRef] = useFancybox({
    Carousel: {}
  })

  return (
    <div ref={fancyboxRef} className='grid grid-cols-2 gap-6'>
      {gallery.map((item, i) => (
        <Link
          key={i}
          href={item.url}
          data-fancybox="project gallery"
          className='first-of-type:col-span-2 h-auto'
        >
          <Image
            src={item.url}
            alt={item.alt}
            width={450}
            height={500}
            className='w-full h-full object-cover'
          />
        </Link>
      ))}
    </div>
  )
}
