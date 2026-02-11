import Footer from '@/components/layout/footer'
import Hero from '@/components/pages/home/hero'
import CTA from '@/components/shared/cta'

export default function Home() {

  return (
    <>
      <main>
        <Hero />
        <CTA />
      </main>
      <Footer />
    </>
  )
}