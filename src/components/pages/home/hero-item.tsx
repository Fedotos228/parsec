'use client'

import BackgroundVideo from '@/components/shared/background-video'
import { Button } from '@/components/ui/button'
import { FragmentType, useFragment } from '@/gql'
import { getNodes } from '@/lib/utils/getNodes'
import { paths } from '@/lib/utils/paths'
import { RepresentativeVideosFragment } from '@/queries/home.queries'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export function HeroItem(props: { video: FragmentType<typeof RepresentativeVideosFragment> }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playPromiseRef = useRef<Promise<void> | null>(null)
  const video = useFragment(RepresentativeVideosFragment, props.video)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      playPromiseRef.current = videoRef.current.play()
    }

    playPromiseRef.current?.catch((e) => {
      if (e.name !== 'AbortError') {
        console.log('Video play error', e)
      }
    })
  }

  const hadleMouseLeave = () => {
    if (playPromiseRef.current !== null) {
      playPromiseRef.current
        .then(() => {
          videoRef.current?.pause()
        })
        .catch(() => { })
        .finally(() => {
          playPromiseRef.current = null
        })
    } else {
      videoRef.current?.pause()
    }
  }

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice && videoRef.current) {
      videoRef.current.play().catch(() => { })
    }
  }, [])

  const domainSlug = getNodes(video.domain)[0].slug || '#'

  return (
    <div
      className='relative overflow-hidden'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={hadleMouseLeave}
    >
      {video.video ? (
        <BackgroundVideo video={video.video} videoRef={videoRef} />
      ) : (
        <div className='absolute inset-0 bg-background/80' />
      )}

      <div className='absolute left-1/2 translate-y-1/2 md:translate-y-0 -translate-x-1/2 md:-translate-x-1/2 bottom-1/2 md:bottom-12 lg:bottom-14 2xl:bottom-20 flex flex-col items-center gap-4 z-30 w-full px-4 text-center'>
        <h2 className='drop-shadow-md'>{video.title}</h2>
        <Button variant='link'>
          <Link href={paths.domain(domainSlug)}>
            Descoperă
          </Link>
        </Button>
      </div>
    </div>
  )
}