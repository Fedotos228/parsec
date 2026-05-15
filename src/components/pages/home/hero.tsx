import { HomeQuery } from '@/queries/home.queries'
import { wpFetch } from '@/queries/wordpress'
import Image from 'next/image'
import { HeroItem } from './hero-item'

export default async function Hero() {
  const videoData = await wpFetch(HomeQuery)
  const videos = videoData.pageBy?.home?.representativeVideos

  return (
    <div className='relative h-dvh w-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1'>
      <div className='absolute top-1/2 left-1/2 -translate-1/2 z-30'>
        <Image
          src='/Logo.svg'
          alt='SCP Parsec Logo'
          width={200}
          height={200}
          className='mx-auto mb-3.5 hidden md:block md:w-52 md:h-52'
          priority
        />
      </div>

      {/* <video autoPlay loop muted playsInline className='absolute inset-0 object-cover z-20 w-full h-full'>
        <source src="/video/hero.mp4" media="(min-width: 768px)" type="video/mp4" />
        <source src="/video/hero-mobile.mp4" media="(max-width: 767px)" type="video/mp4" />
      </video> */}
      {videos && videos.map((video, i) => (
        video && <HeroItem key={i} video={video} />
      ))}
    </div>
  )
}