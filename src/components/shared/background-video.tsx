import { FragmentType, useFragment } from '@/gql'
import { getWPMedia } from '@/lib/utils/getWPMedia'
import { VideoFragment } from '@/queries/fragments.queries'
import React from 'react'

export default function BackgroundVideo(props: {
  video: NonNullable<FragmentType<typeof VideoFragment>>
  videoRef?: React.RefObject<HTMLVideoElement | null>
}) {
  const videoData = useFragment(VideoFragment, props.video)
  const node = videoData?.node

  if (!node?.filePath) return <div className='absolute inset-0 bg-background/60' />

  return (
    <div className='absolute inset-0 z-10 group'>
      <video
        ref={props.videoRef}
        poster=''
        className='h-full w-full object-cover'
        muted
        playsInline
        loop
        preload='metadata'
      >
        <source src={getWPMedia(node.filePath)} type={node.mimeType ?? 'video/mp4'} />
      </video>
      <div className='absolute inset-0 bg-background/60 transition-colors duration-150 ease-in-out group-hover:bg-background/40 z-20' />
    </div>
  )
}
