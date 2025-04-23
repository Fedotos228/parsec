import About from '@/components/blocks/home/about'
import Contact from '@/components/blocks/home/contact'
import Hero from '@/components/blocks/home/hero'
import Partners from '@/components/blocks/home/partners'
import Projects from '@/components/blocks/home/projects'
import Services from '@/components/blocks/home/services'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Partners/>
      <Contact />
    </>
  )
}
