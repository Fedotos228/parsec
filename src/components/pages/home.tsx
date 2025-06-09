'use client'

import About from '@/components/blocks/home/about'
import Contact from '@/components/blocks/home/contact'
import Hero from '@/components/blocks/home/hero'
import Partners from '@/components/blocks/home/partners'
import Projects from '@/components/blocks/home/projects'
import Services from '@/components/blocks/home/services'
import Loader from '@/components/elements/loader'
import { pagesService } from '@/services/pages.service'
import { IHomePage } from '@/types/pages.types'
import { useQuery } from '@tanstack/react-query'

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['home'],
    queryFn: () => pagesService.getHomePage(),
    select: data => data.data
  })

  const { hero, about, projects, partners, contacts } = data || {} as IHomePage

  if (isLoading) return <Loader />

  return (
    <>
      <Hero content={hero} />
      <About content={about} />
      <Services />
      <Projects content={projects} />
      <Partners content={partners} />
      <Contact content={contacts} />
    </>
  )
}
