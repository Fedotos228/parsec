import Footer from '@/components/layout/footer'
import Menu from '@/components/layout/menu'
import Hero from '@/components/pages/home/hero'
import Partners from '@/components/pages/home/partners'
import CTA from '@/components/shared/cta'
import { homeMetadata, jsonLd } from '@/lib/seo/home.metadata'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = homeMetadata

export default function Home() {
  return (
    <div className='relative'>
      <Script
        id="schema-org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className='absolute top-0 w-full p-8 z-40 opacity-100 md:opacity-0'>
        <Menu />
      </header>
      <main>
        <Hero />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}