import Footer from '@/components/layout/footer'
import Menu from '@/components/layout/menu'
import Hero from '@/components/pages/home/hero'
import CTA from '@/components/shared/cta'
import Script from 'next/script'

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Parsec",
    "description": "Companie de PR și comunicare strategică full-service, specializată în managementul crizei și branding.",
    "url": "https://parsec.md",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Moldova"
    },
    "knowsAbout": [
      "Comunicare de criză",
      "Strategii de comunicare",
      "PR",
      "Digital Marketing",
      "Branding",
      "Public Affairs",
      "Producție video",
      "Web development"
    ],
    "memberOf": [
      { "@type": "Organization", "name": "USAID" },
      { "@type": "Organization", "name": "UNDP" }
    ]
  }

  return (
    <div className='relative'>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className='absolute top-0 w-full p-8 z-30 opacity-100 md:opacity-0'>
        <Menu />
      </header>
      <main>
        <Hero />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}