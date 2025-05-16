'use client'

import Box from '@/components/elements/box'
import Loader from '@/components/elements/loader'
import SectionGrid from '@/components/elements/section-grid'
import Tags from '@/components/elements/tags'
import { Paragraph } from '@/components/ui/typography/paragraph'
import { servicesService } from '@/services/services.service'
import { useQuery } from '@tanstack/react-query'

import 'swiper/css'

import { LineArrowLeft, LineArrowRight } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/typography/heading'
import paths from '@/lib/paths'
import { strapiMedia } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function ServiceSingle({ documentId }: { documentId: string }) {
  const { data: serviceSingle, isLoading } = useQuery({
    queryKey: ['singleService', documentId],
    queryFn: () => servicesService.getSingleService(documentId),
    select: data => data.data
  })

  const prevRef = React.useRef(null)
  const nextRef = React.useRef(null)

  if (isLoading) return <Loader />

  return (
    <div>
      <SectionGrid>
        <Box className='items-center md:items-start bg-neutral-800'>
          <div className='max-w-[468px]'>
            <Heading level={1} className='mb-8 md:text-left text-center'>
              {serviceSingle?.title}
            </Heading>
            <Tags tags={serviceSingle?.tags || []} />
          </div>
        </Box>
        <div className='flex items-center justify-center bg-accent-500'>
          <Paragraph type="lg" color='black' className='font-hidi font-lights max-w-[500px] px-4'>
            {serviceSingle?.description}
          </Paragraph>
        </div>
      </SectionGrid>
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
          className='!h-fit'
        >
          {serviceSingle?.projects.map((item: any) => (
            <SwiperSlide key={item.documentId}>
              <Link
                key={item.documentId}
                href={paths.projectSingle(item.documentId)}
              >
                <Image
                  src={strapiMedia(item.thumbnail.url)}
                  alt={item.slug}
                  width={570}
                  height={320}
                  className='max-h-[320px] w-full object-cover object-center'
                />
                <Heading level={4} className='mt-4'>
                  {item.title} - {item.company}
                </Heading>
                <div className='mt-2'>
                  {item.services.map((service: any, index: number) => (
                    <p key={service.documentId} className='inline text-sm text-neutral-200'>
                      {service.title}{index < item.services.length - 1 ? ', ' : ''}
                    </p>
                  ))}
                </div>
              </Link>
            </SwiperSlide>
          ))}
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
        </Swiper>
      </div>
    </div>
  )
}
