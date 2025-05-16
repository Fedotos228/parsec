'use client'

import About from '@/components/blocks/home/about'
import Contact from '@/components/blocks/home/contact'
import Hero from '@/components/blocks/home/hero'
import Partners from '@/components/blocks/home/partners'
import Projects from '@/components/blocks/home/projects'
import Services from '@/components/blocks/home/services'
import Loader from '@/components/elements/loader'
import { pagesService } from '@/services/pages.service'
import { useQuery } from '@tanstack/react-query'

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['home'],
    queryFn: () => pagesService.getHomePage(),
  })

  if(isLoading) return <Loader loading={isLoading} />

  return (
    <>
      <Hero content={data?.data.hero} />
      <About content={data?.data.about} />
      <Services />
      <Projects content={data?.data?.projects} />
      <Partners content={data?.data?.partners} />
      <Contact content={data?.data?.contacts} />
    </>
  )
}