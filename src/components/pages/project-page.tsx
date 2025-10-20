'use client'

import { useStrapiQuery } from '@/hooks/use-strapi'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import ProjectHero from '../blocks/project/project-hero'
import ProjectList from '../blocks/project/project-list'
import { Button } from '../ui/button'
import { servicesService } from '@/services/services.service'

export default function ProjectPage() {
  const [active, setActive] = useState<string>('')

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const { data: services } = useStrapiQuery(
    ['project services'],
    () => servicesService.getServicesTitle(),
  )

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
