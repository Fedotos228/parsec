import { HomeQuery } from '@/queries/home.queries'
import { wpFetch } from '@/queries/wordpress'
import Image from 'next/image'
import { HeroItem } from './hero-item'

export default async function Hero() {
  const data = await wpFetch(HomeQuery)
  const videos = data.pageBy?.home?.representativeVideos

  return (
    <div className='relative h-dvh w-full grid grid-cols-1 md:grid-cols-2'>
      <Image
        src='/Logo.svg'
        alt='SCP Parsec Logo'
        width={200}
        height={200}
        className='absolute top-1/2 left-1/2 -translate-1/2 z-30 h-20 w-20 md:w-52 md:h-52'
        priority
      />
      {videos && videos.map((video, i) => (
        video && <HeroItem key={i} video={video} />
      ))}
    </div>
  )
}