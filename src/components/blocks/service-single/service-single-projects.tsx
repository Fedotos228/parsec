import { Paragraph } from '@/components/ui/typography/paragraph'

import { LineArrowLeft, LineArrowRight } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/typography/heading'
import paths from '@/lib/paths'
import { strapiMedia } from '@/lib/utils'
import { IProject } from '@/types/project.types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

export default function ServiceSingleProjects({
  projects
}: {
  projects: IProject[]
}) {
  const prevRef = React.useRef(null)
  const nextRef = React.useRef(null)

  return (
    <div className='h-lvh default-inline-padding'>
      <Paragraph color='accent' type='sm'>
        Portofoliu
      </Paragraph>
      <Heading className=''>
        Lucrările noastre
      </Heading>

      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== 'boolean'
          ) {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }
        }}
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={60}
        className='!h-1/2'

      >
        {projects.map((item: IProject) => (
          <SwiperSlide key={item.documentId}
          >
            <Link
              key={item.documentId}
              href={paths.projectSingle(item.documentId)}
            >
              <Image
                src={strapiMedia(item.thumbnail.url)}
                alt={item.slug}
                fill
                objectFit='cover'
                className='h-1/2'

              />

              <Heading level={4} className='mt-4'>
                {item.title} - {item.company}
              </Heading>
              <div className='mt-2'>
                {item.services.map((service, index: number) => (
                  <p key={service.documentId} className='inline text-sm text-neutral-200'>
                    {service.title}{index < item.services.length - 1 ? ', ' : ''}
                  </p>
                ))}
              </div>
            </Link>
          </SwiperSlide>
        ))}
        {projects.length > 2 && (
          <div className='flex items-center justify-end'>
            <Button ref={prevRef} variant='longBlack'>
              <LineArrowLeft
                className='fill-foreground'
                width={68}
                height={34}
                viewBox={'0 5.8 24 12'}
              />
              Înapoi
            </Button>
            <Button ref={nextRef} variant='longAccent'>
              Urmatorul
              <LineArrowRight
                className='fill-neutral-900'
                width={68}
                height={34}
                viewBox={'0 5.8 24 12'}
              />
            </Button>
          </div>
        )}
      </Swiper>
    </div>
  )
}
