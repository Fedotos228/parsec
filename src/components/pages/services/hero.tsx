import { FragmentType, useFragment } from '@/gql'
import { getWPMedia } from '@/lib/utils/getWPMedia'
import { VideoFragment } from '@/queries/fragments.queries'

export default function Hero({
  background,
  title,
  description
}: {
  background: FragmentType<typeof VideoFragment> | undefined | null,
  title: string,
  description: string | null | undefined
}) {
  const backgroundFragment = useFragment(VideoFragment, background)
  const node = backgroundFragment?.node

  if (!node?.filePath) return <div className='absolute inset-0 bg-background/60' />

  return (
    <div className='relative h-dvh xl:h-162 2xl:h-208'>
      <div className='relative h-full w-full'>
        <video
          className='h-full w-full object-cover'
          muted
          loop
          playsInline
          autoPlay
          preload='metadata'
        >
          <source src={getWPMedia(node.filePath)} type={node.mimeType ?? "video/mp4"} />
        </video>
        <div className='absolute inset-0 bg-background/80'></div>
      </div>

      <div className='absolute top-1/2 left-1/2 transform -translate-1/2 text-center w-full px-3.5'>
        <h1 className='display-lg mb-4'>
          {title}
        </h1>
        {description && (
          <div
            className='md:max-w-1/2 mx-auto leading-relaxed'
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </div>
  )
}
