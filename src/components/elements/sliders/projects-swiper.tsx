'use client'

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
      navigatioPrevButton && buttonsContainer.appendChild(navigatioPrevButton)
      navigatioNextButton && buttonsContainer.appendChild(navigatioNextButton)
    }
  })

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='project-swiper'
      >
        {slides.map(slide => (
          // de inlocuit div cu bg-img si shadow cu o imagine cu mask-image
          <SwiperSlide key={slide.id} className={`relative bg-[url('/assets/image/landscape.png')] bg-cover bg-center`}>
            <div className="absolute inset-0 h-dvh w-full -z-10 bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.48)] to-[rgba(0,0,0,0.6)]"></div>
            <div className='max-w-[500px] w-full absolute bottom-[135px] left-1/2 -translate-x-1/2'>
              <Heading level={4} className='mb-2.5'>
                {slide.companyName}
              </Heading>
              <Paragraph type='sm' color='gray' fontFamily={'hidi'}>
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
        <div className='navigation-container max-w-[500px] w-full absolute bottom-[80px] left-1/2 -translate-x-1/2 z-10'>
          <div className='buttons-container flex items-center justify-end gap-4'></div>

          <div
            className="z-10 р-12 flex items-center justify-center text-accent-500"
            slot="container-end"
          >
            <div className="relative w-full h-1 overflow-hidden">
              <div
                className="h-full w-0 bg-accent-500 transition-all duration-300 ease-linear"
                ref={progressBar}
              ></div>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  )
}


