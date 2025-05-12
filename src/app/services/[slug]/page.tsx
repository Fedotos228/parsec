import Portfolio from '@/components/blocks/services/portfolio'
import Box from '@/components/elements/box'
import SectionGrid from '@/components/elements/section-grid'
import Tags from '@/components/elements/tags'
import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'
import { services } from '@/lib/services.constans'


export default async function ServicesPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const singleService = await Promise.resolve(services.find((service) => service.slug === slug))

  return (
    <div>
      <SectionGrid>
        <Box className='bg-neutral-800'>
          <div className='max-w-[468px]'>
            <Heading level={1} className='mb-8'>
              {singleService?.title}
            </Heading>
            <Tags tags={singleService?.tags || []} />
          </div>
        </Box>
        <div className='flex items-center justify-center bg-accent-500'>
          <Paragraph type="lg" color='black' className='font-hidi font-lights max-w-[500px] px-4'>
            {singleService?.description}
          </Paragraph>
        </div>
      </SectionGrid>
      {singleService?.portfolio && (
        <Portfolio
          portfolio={singleService.portfolio}
        />
      )}
    </div>
  )
}
