'use client'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Paragraph } from '@/components/ui/typography/paragraph'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function PartnersSwiper() {
  useEffect(() => {
    const navigationContainer = document.querySelector('.partners-navigation-container')
    const navigatioNextButton = document.querySelector('.partners-swiper .swiper-button-next')
    const navigatioPrevButton = document.querySelector('.partners-swiper .swiper-button-prev')

    if (navigationContainer) {
      if (navigatioPrevButton) navigationContainer.appendChild(navigatioPrevButton)
      if (navigatioNextButton) navigationContainer.appendChild(navigatioNextButton)
    }
  })

  return (
    <div className='mb-6 md:mb-28 px-4 md:px-10 lg:px-12 py-10 lg:py-20 border border-neutral-600 rounded-sm'>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Navigation]}
        className='partners-swiper'

      >
        <SwiperSlide>
          <div className='flex items-start md:items-center flex-col md:flex-row gap-10 md:gap-20'>
            <Image
              src='/assets/image/endava.png'
              alt='Franzeluta'
              width={114}
              height={38}
              className='object-cover basis-0 md:basis-28'
            />
            <div className='basis-0 md:basis-3/4'>
              <Paragraph type='lg' color='foreground' className='font-hidi mb-10'>
                Colaborarea cu această echipă a fost un adevărat succes. Ne-au ajutat să punem în aplicare strategii clare și eficiente, iar rezultatele au depășit așteptările noastre. Profesionalismul și capacitatea de a înțelege nevoile noastre ne-au impresionat cu adevărat. Recomandăm cu încredere!
              </Paragraph>
              <div className='flex items-start flex-col sm:flex-row sm:items-center gap-4'>
                <Paragraph color='gray'>
                  Andrei Popa, Director de Marketing
                </Paragraph>
                <span className='hidden sm:block h-3 w-[1px] bg-neutral-300'></span>
                <Link href='/' className='text-sm text-accent-500 underline'>
                  Studiu de caz
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-start md:items-center flex-col md:flex-row gap-10 md:gap-20'>
            <Image
              src='/assets/image/endava.png'
              alt='Franzeluta'
              width={114}
              height={38}
              className='object-cover basis-0 md:basis-28'
            />
            <div className='basis-0 md:basis-3/4'>
              <Paragraph type='lg' color='foreground' className='font-hidi mb-10'>
                Colaborarea cu această echipă a fost un adevărat succes. Ne-au ajutat să punem în aplicare strategii clare și eficiente, iar rezultatele au depășit așteptările noastre. Profesionalismul și capacitatea de a înțelege nevoile noastre ne-au impresionat cu adevărat. Recomandăm cu încredere!
              </Paragraph>
              <div className='flex items-start flex-col sm:flex-row sm:items-center gap-4'>
                <Paragraph color='gray'>
                  Andrei Popa, Director de Marketing
                </Paragraph>
                <span className='hidden sm:block h-3 w-[1px] bg-neutral-300'></span>
                <Link href='/' className='text-sm text-accent-500 underline'>
                  Studiu de caz
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className='partners-navigation-container flex items-center justify-end gap-4 mt-10'></div>
      </Swiper>
    </div>
  )
}
