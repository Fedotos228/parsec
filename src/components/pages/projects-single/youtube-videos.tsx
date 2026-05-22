import { cn } from '@/lib/utils/utils'

type Props = {
  youtubeVideo: ({
    __typename?: "ProjectFieldsYoutubeVideo" | undefined
    fieldGroupName?: string | null | undefined
    video?: string | null | undefined
  } | null)[]
}

export default function YoutubeVideos({ youtubeVideo }: Props) {
  const singleVideo = youtubeVideo && youtubeVideo.length === 1
  const twoVideos = youtubeVideo && youtubeVideo.length === 2
  const multipleVideos = youtubeVideo && youtubeVideo.length > 2

  return (
    <div className='mt-10'>
      {/* Single Youtube video */}
      {youtubeVideo && singleVideo && (
        <div
          dangerouslySetInnerHTML={{ __html: youtubeVideo?.[0]?.video || '' }}
          className='[&_iframe]:w-full! [&_iframe]:h-full! [&_iframe]:aspect-video [&_iframe]:object-cover my-10'
        />
      )}

      {/* Two Youtube videos */}
      {youtubeVideo && twoVideos && (
        <div className='grid grid-cols-2 gap-3.5'>
          {youtubeVideo.map((video, i) => (
            <div
              key={i}
              dangerouslySetInnerHTML={{ __html: video?.video || '' }}
              className={cn(
                '[&_iframe]:w-full! [&_iframe]:h-full! [&_iframe]:aspect-video [&_iframe]:object-cover',
              )}
            />
          ))}
        </div>
      )}

      {/* Multiple Youtube videos */}
      {youtubeVideo && multipleVideos && (
        <div className='grid grid-cols-2 gap-3.5'>
          {youtubeVideo.map((video, i) => (
            <div
              key={i}
              dangerouslySetInnerHTML={{ __html: video?.video || '' }}
              className={cn(
                '[&_iframe]:w-full! [&_iframe]:h-full! [&_iframe]:aspect-video [&_iframe]:object-cover',
                i === 0 ? 'col-span-2' : ''
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
