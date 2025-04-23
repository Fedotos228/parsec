import Box from '@/components/elements/box'
import SectionGrid from '@/components/elements/section-grid'
import ProjectsSwiper from '@/components/elements/sliders/projects-swiper'
import { LongArrow } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/typography/heading'
import { Paragraph } from '@/components/ui/typography/paragraph'

export default function Projects() {
  return (
    <SectionGrid>
      <Box>
        <Paragraph type='sm' color='accent' className='mb-4'>
          Proiectele noastre
        </Paragraph>
        <Heading className='mb-12'>
          Povestea succesului, <br />
          proiect cu proiect
        </Heading>
        <Button>
          Vezi proiecte
          <LongArrow className='fill-foreground hover:fill-neutral-900' />
        </Button>
      </Box>
      <ProjectsSwiper />
    </SectionGrid>
  )
}
