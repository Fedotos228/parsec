import Box from '@/components/elements/box'
import ScrollButton from '@/components/elements/scroll-button'
import SectionGrid from '@/components/elements/section-grid'
import Tags, { TagsProps } from '@/components/elements/tags'
import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'

type ServiceSingleHeroProps = {
  title: string
  tags: TagsProps[]
  description: string
}

export default function ServiceSingleHero({
  title,
  tags,
  description
}:
  ServiceSingleHeroProps
) {
  return (
    <SectionGrid>
      <Box className='items-center md:items-start bg-neutral-800'>
        <div className='max-w-[468px]'>
          <Heading level={1} className='mb-8 md:text-left text-center'>
            {title}
          </Heading>
          <Tags tags={tags || []} className='justify-center lg:justify-start' />
        </div>
      </Box>
      <div className='flex items-center justify-center bg-accent-500'>
        <Paragraph type="lg" color='black' className='font-hidi font-lights max-w-[500px] px-4'>
          {description}
        </Paragraph>
      </div>
      <ScrollButton className='absolute bottom-9 right-2.5 md:bottom-20 md:right-20 z-10' />
    </SectionGrid>
  )
}
