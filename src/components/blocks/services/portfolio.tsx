'use client'

import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'
import paths from '@/lib/paths'
import { PortfolioType } from '@/types/services.types'
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio({
  portfolio
}: {
  portfolio: PortfolioType
}) {

  return (
    <div className='default-inline-padding mx-auto mt-48'>
      <Paragraph color='accent' type='sm'>
        Portofoliu
      </Paragraph>
      <Heading className=''>
        Lucrările noastre
      </Heading>
      <div className='grid grid-cols-2 gap-20 mx-auto mt-10'>
        {portfolio.map((item) => (
          <Link
            key={item.slug}
            href={paths.projectSingle(item.slug)}
          >
            <Image
              src={item.imageUrl}
              alt={item.slug}
              width={570}
              height={500}
              className='max-h-[500px] w-full object-cover object-center'
            />
            <Heading level={4} className='mt-4'>
              {item.company} - {item.title}
            </Heading>
            <div className='mt-2'>
              {item.services.map((service, index) => (
                <p key={index} className='inline text-sm text-neutral-200'>
                  {service}{index < item.services.length - 1 ? ', ' : ''}
                </p>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}