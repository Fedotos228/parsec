'use client'

import Image from 'next/image'

import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper/types'

import 'swiper/css'
import 'swiper/css/pagination'

import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'
import { slides } from '@/lib/constans'
import { Autoplay, Navigation } from 'swiper/modules'

export default function ProjectsSwiper() {
  const progressBar = useRef<HTMLDivElement | null>(null)

  const onAutoplayTimeLeft = (swiper: SwiperType, timeLeft: number, percentage: number) => {
    if (progressBar.current) {
      progressBar.current.style.width = `${percentage * 100}%`
    }
  }

  useEffect(() => {
    const buttonsContainer = document.querySelector('.buttons-container')
    const navigatioNextButton = document.querySelector('.project-swiper .swiper-button-next')
    const navigatioPrevButton = document.querySelector('.project-swiper .swiper-button-prev')

    if (buttonsContainer) {
      if (navigatioPrevButton) buttonsContainer.appendChild(navigatioPrevButton)
      if (navigatioNextButton) buttonsContainer.appendChild(navigatioNextButton)
    }
  })

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='project-swiper'
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id} className='relative'>
            <Image
              src={slide.imageUrl}
              alt={slide.companyName}
              width={500}
              height={500}
              className='absolute inse-0 w-full h-full object-cover object-center lg:rounded-lg shadow-lg -z-10 mask-b-from-30%'
            />
            <div className='max-w-[500px] w-full absolute px-3 bottom-[135px] left-1/2 -translate-x-1/2'>
              <Heading level={4} className='mb-2.5'>
                {slide.companyName}
              </Heading>
              <Paragraph type='sm' color='gray' className='font-hidi'>
                {slide.service.map((item, index) => (
                  <span key={index}>
                    {item}
                    {index < slide.service.length - 1 && ', '}
                  </span>
                ))}
              </Paragraph>
            </div>
          </SwiperSlide>
        ))}
        <div className='navigation-container px-3 max-w-[500px] w-full absolute bottom-[80px] left-1/2 -translate-x-1/2 z-10'>
          <div className='buttons-container flex items-center justify-end gap-4'></div>

          <div
            className="z-10 р-12 flex items-center justify-center text-accent-500"
            slot="container-end"
          >
            <div className="relative w-full h-1 overflow-hidden">
              <div
                className="h-full w-0 bg-accent-500"
                ref={progressBar}
              ></div>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  )
}


