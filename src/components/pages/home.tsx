'use client'

import Loader from '@/components/elements/loader'
import { useStrapiQuery } from '@/hooks/use-strapi'
import { pagesService } from '@/services/pages.service'
import { notFound } from 'next/navigation'
import About from '../blocks/home/about'
import Contact from '../blocks/home/contact'
import Hero from '../blocks/home/hero'
import Partners from '../blocks/home/partners'
import Projects from '../blocks/home/projects'
import Services from '../blocks/home/services'

export default function Home() {
  const { data, isLoading } = useStrapiQuery(
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
