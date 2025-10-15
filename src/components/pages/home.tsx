'use client'

import About from '@/components/blocks/home/about'
import Contact from '@/components/blocks/home/contact'
import Hero from '@/components/blocks/home/hero'
import Partners from '@/components/blocks/home/partners'
import Projects from '@/components/blocks/home/projects'
import Services from '@/components/blocks/home/services'
import Loader from '@/components/elements/loader'
import { useStrapiQuery } from '@/hooks/use-strapi'
import { pagesService } from '@/services/pages.service'
import { IHomePage } from '@/types/pages.types'
import { notFound } from 'next/navigation'

export default function Home() {
  const { data, isLoading } = useStrapiQuery<IHomePage>(
    ['home'],
    () => pagesService.getHomePage()
  )

  if (isLoading) return <Loader />
  if (!data) return notFound()

  const { hero, about, projects, partners, contacts } = data

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
