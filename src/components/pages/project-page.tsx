'use client'

import { servicesService } from '@/services/services.service'
import { useQuery } from '@tanstack/react-query'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import ProjectHero from '../blocks/project/project-hero'
import ProjectList from '../blocks/project/project-list'
import { Button } from '../ui/button'

export default function ProjectPage() {
  const [active, setActive] = useState<string>('')

  const { data: services } = useQuery({
    queryKey: ['project services'],
    queryFn: () => servicesService.getServicesTitle(),
    select: (data) => data.data,
  })

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const handleServiceClick = (slug: string) => {
    const queryString = createQueryString('service', slug)
    router.push(`${pathname}?${queryString}`, {
      scroll: false,
    })

    setActive(slug)
  }

  return (
    <>
      <ProjectHero />
      <div>
        <nav className='flex items-center gap-3 flex-wrap justify-center mt-10 mb-8'>
          {services?.map((service) => (
            <Button
              key={service.documentId}
              variant='secundary'
              onClick={() => handleServiceClick(service.slug)}
              className={ active === service.slug ? 'text-foreground bg-accent-500' : ''}
            >
              {service.title}
            </Button>
          ))}
        </nav>
        <ProjectList />
      </div>
    </>
  )
}
