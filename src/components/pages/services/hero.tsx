'use client'

import { sanitizeHtml } from '@/lib/utils/sanitize'
import gsap from 'gsap'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero({
  title,
  description
}: {
  title: string,
  description: string | null | undefined
}) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9 }
    )

    if (descRef.current) {
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      )
    }
  }, [])

  return (
    <div className='relative h-dvh xl:h-162 2xl:h-208'>
      <Image
        src="/parsec-bg.png"
        alt="Background"
        className="absolute inset-0 object-cover w-auto h-full"
        fill
        sizes='100vw'
        priority
      />

      <div className='absolute top-1/2 left-1/2 transform -translate-1/2 text-center w-full px-3.5'>
        <h1 ref={titleRef} className='display-lg mb-4' style={{ opacity: 0 }}>
          {title}
        </h1>
        {description && (
          <div
            ref={descRef}
            className='md:max-w-1/2 mx-auto leading-relaxed'
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(description) }}
            style={{ opacity: 0 }}
          />
        )}
      </div>
    </div>
  )
}
