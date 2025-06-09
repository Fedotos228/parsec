import Box from '@/components/elements/box'
import SectionGrid from '@/components/elements/section-grid'
import Tags from '@/components/elements/tags'
import { LongArrow } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'
import paths from '@/lib/paths'
import { strapiMedia } from '@/lib/utils'
import { IServiceItem } from '@/types/services.types'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesItems({
  services
}: {
  services: IServiceItem[]
}) {
  return (
    <>
      {services?.map(item => (
        <SectionGrid className='grid-rows-2 md:grid-rows-1' id={item.slug} key={item.id}>
          <Box className='relative pr-4 py-5 sm:py-10 md:py-0 bg-neutral-800'>
            <div className='max-w-[468px]'>
              <Heading className='text-foreground text-[28px]/9 sm:text-4xl/9 lg:text-5xl/12 mb-8'>
                {item.title}
              </Heading>
              <Tags tags={item.tags} className='justify-start' />
              <Paragraph type='lg' color='gray' className='mb-11'>
                {item.description}
              </Paragraph>
              <Button asChild>
                <Link href={paths.servicesSingle(item.slug)} className='flex items-center gap-2'>
                  Vezi Proiecte
                  <LongArrow className='fill-foreground group-hover:fill-neutral-900' />
                </Link>
              </Button>
            </div>
            <div className='absolute bottom-10 lg:bottom-20 hidden md:flex items-center justify-center gap-5 lg:gap-10'>
              {item?.clients_logos?.map((logo) => (
                <Image
                  key={logo.id}
                  src={strapiMedia(logo.image.url)}
                  alt={logo.alt}
                  width={85}
                  height={48}
                  className='w-[85px] h-[48px] object-contain'
                />
              ))}
            </div>
          </Box>
          <Image
            src={strapiMedia(item.image.url)}
            alt={item.title}
            width={500}
            height={500}
            className='w-full h-full md:h-lvh object-cover overflow-hidden'
            priority
          />
        </SectionGrid>
      ))}
    </>
  )
}
