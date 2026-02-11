import Hr from '@/components/shared/hr'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { FragmentType, useFragment } from '@/gql'
import { ServiceFragment } from '@/queries/domains.queries'
import ProjectCard from './project-card'

interface ServicesCarouselProps {
  services: FragmentType<typeof ServiceFragment>[]
}

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
  const service = useFragment(ServiceFragment, services)

  return (
    <div className='relative py-20 px-6'>
      <Carousel>
        <CarouselContent>
          {service.map(item => (
            <CarouselItem key={item.id} className='py-6'>
              <Hr position='top' mobileTop='0' />
              <h3 className='font-serif mb-4 text-4xl'>
                {item.name}
              </h3>
              <p className='text-foreground/80 text-lg leading-relaxed mb-10'>
                {item.description}
              </p>
              {item.projects?.nodes.slice(0, 1).map((project, i) => (
                <ProjectCard key={i} card={project} />
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='flex items-center gap-2 my-6'>
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <Hr position='bottom' mobileBottom='0' />
      </Carousel>
    </div>
  )
}