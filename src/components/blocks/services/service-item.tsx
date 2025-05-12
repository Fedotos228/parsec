import Box from '@/components/elements/box'
import SectionGrid from '@/components/elements/section-grid'
import Tags from '@/components/elements/tags'
import { LongArrow } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'
import paths from '@/lib/paths'
import { IServiceItem } from '@/types/services.types'
import Image from 'next/image'
import Link from 'next/link'

export default function ServiceItem({
  title,
  tags,
  description,
  clientsLogos,
  imageUrl,
  slug
}: IServiceItem) {
  return (
    <div id={slug}>
      <SectionGrid className='col-span-1 md:col-span-2'>
        <Box className='relative pr-4 py-5 sm:py-10 md:py-0 bg-neutral-800'>
          <div className='max-w-[468px'>
            <Heading className='text-foreground text-[28px]/9 sm:text-4xl/9 lg:text-5xl/12 mb-8'>
              {title}
            </Heading>
            <Tags tags={tags} />
            <Paragraph type='lg' color='gray' className='mb-11'>
              {description}
            </Paragraph>
            <Button asChild>
              <Link href={paths.servicesSingle(slug)} className='flex items-center gap-2'>
                Vezi Proiecte
                <LongArrow className='fill-foreground group-hover:fill-neutral-900' />
              </Link>
            </Button>
          </div>
          <div className='absolute bottom-10 lg:bottom-20 hidden md:flex items-center justify-center gap-5 lg:gap-10'>
            {clientsLogos.map((logo) => (
              <Image
                key={logo.id}
                src={logo.src}
                alt={logo.alt}
                width={85}
                height={48}
                className='w-[85px] h-[48px] object-contain'
              />
            ))}
          </div>
        </Box>
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          className='w-full h-full md:h-lvh object-cover overflow-hidden'
          priority
        />
      </SectionGrid>
    </div>
  )
}
