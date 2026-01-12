'use client'

import Loader from '@/components/elements/loader'
import { useStrapiQuery } from '@/hooks/use-strapi'
import { pagesService } from '@/services/pages.service'
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
  if (!data) return <div>
    <h1 className='text-8xl font-bold text-center text-accent-500'>404</h1>
    <h2 className='text-3xl font-bold text-center text-neutral-300'>Pagina nu există</h2>
  </div>

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
