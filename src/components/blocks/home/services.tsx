'use client'

import { useStrapiQuery } from '@/hooks/use-strapi'
import paths from '@/lib/paths'
import { servicesService } from '@/services/services.service'
import Image from 'next/image'
import Link from 'next/link'
import { LineArrowRight } from '../../icons'
import { Paragraph } from '../../ui/typography/paragraph'

export default function Services() {
  const { data } = useStrapiQuery(
    ['homePage services'],
    () => servicesService.getServicesTitle(),
  )

  return (
    <section className='relative h-lvh' style={{ background: 'url("/assets/image/eternal.png") 50% 50% / cover no-repeat' }}>
      <Image
        src='/assets/image/cosmonaut.png'
        width={351}
        height={522}
        alt='cosmonaut'
        priority
        quality={100}
        className='absolute top-1/2 hidden md:block md:right-1 lg:right-2/12 -translate-x-2/12  -translate-y-1/2'
      />

      <div className='h-full flex flex-col justify-center gap-6 default-padding'>
        <Paragraph type='sm' color={'accent'} className='uppercase'>
          ne specializăm în
        </Paragraph>
        <div className='flex flex-col w-fit gap-8'>
          {data?.map(link => (
            <Link
              key={link.documentId}
              href={paths.servicesSingle(link.documentId)}
              className='w-fit flex items-center text-2xl md:text-3xl font-semibold hover:text-accent-500 transition-colors duration-500 ease-in-out group'
            >
              {link.title}
              <LineArrowRight
                width={68}
                height={34}
                viewBox={'0 5.8 24 12'}
                className='opacity-0 transition-all duration-300 fill-accent-500 group-hover:opacity-100 group-hover:translate-x-5'
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
