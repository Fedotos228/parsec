'use client'
import { useRef } from 'react'

import { Paragraph } from '@/components/ui/typography/paragraph'
import { strapiMedia } from '@/lib/utils'
import { testimonialsService } from '@/services/testimonials.service'
import { useQuery } from '@tanstack/react-query'

import Image from 'next/image'
import Link from 'next/link'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import paths from '@/lib/paths'
import 'swiper/css'


export default function PartnersSwiper() {
  const { data: sliders } = useQuery({
    queryKey: ['partners'],
    queryFn: () => testimonialsService.getTestimonials(),
    select: (data) => data.data,
  })

  const nextButton = useRef<HTMLButtonElement>(null)
  const prevButton = useRef<HTMLButtonElement>(null)

  return (
    <div className='mb-6 md:mb-20 px-4 md:px-10 lg:px-12 py-10 lg:py-20 border border-neutral-600 rounded-sm'>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== 'boolean'
          ) {
            swiper.params.navigation.prevEl = prevButton.current
            swiper.params.navigation.nextEl = nextButton.current
          }
        }}
        navigation={{
          nextEl: nextButton.current,
          prevEl: prevButton.current,
        }}
        modules={[Navigation]}
        className='partners-swiper'

      >
        {sliders?.map(item => (
          <SwiperSlide key={item.documentId}>
            <div className='flex items-start md:items-center flex-col md:flex-row gap-10 md:gap-20'>
              <Image
                src={strapiMedia(item.logo.url)}
                alt='Franzeluta'
                width={114}
                height={38}
                className='object-cover basis-0 md:basis-28'
              />
              <div className='basis-0 md:basis-3/4'>
                <Paragraph type='lg' color='foreground' className='font-hidi mb-10'>
                  {item.content}
                </Paragraph>
                <div className='flex items-start flex-col sm:flex-row sm:items-center gap-4'>
                  <Paragraph color='gray'>
                    {item.person}
                  </Paragraph>
                  {item.project && <span className='hidden sm:block h-3 w-[1px] bg-neutral-300'></span>}
                  {item.project && (
                    <Link href={paths.projectsSingle(item.project.slug)} className='text-sm text-accent-500 underline'>
                      Studiu de caz
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className='partners-navigation-container flex items-center justify-end gap-4 mt-10'>
          <button ref={prevButton} className='swiper-button-prev'></button>
          <button ref={nextButton} className='swiper-button-next'></button>
        </div>
      </Swiper>
    </div>
  )
}
