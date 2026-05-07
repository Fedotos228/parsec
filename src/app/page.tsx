import Footer from '@/components/layout/footer'
import Menu from '@/components/layout/menu'
import Hero from '@/components/pages/home/hero'
import Partners from '@/components/pages/home/partners'
import CTA from '@/components/shared/cta'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Parsec | Consultanță Strategică și PR Full-Service',
  description: 'Agenție de PR și comunicare strategică. Oferim servicii de management de criză, campanii media, branding și soluții digitale pentru companii și instituții internaționale.',
  alternates: {
    canonical: 'https://parsec.md',
  },
  openGraph: {
    title: 'Parsec | Consultanță Strategică și PR Full-Service',
    description: 'Agenție de PR și comunicare strategică. Oferim servicii de management de criză, campanii media, branding și soluții digitale pentru companii și instituții internaționale.',
    url: 'https://parsec.md',
    type: 'website',
  },
}

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
    "areaServed": ["Moldova", "Romania"],
    "knowsAbout": [
      "Comunicare de criză",
      "Strategii de comunicare",
      "PR",
      "Digital Marketing",
      "Branding",
      "Public Affairs",
      "Producție video",
      "Web development",
      "Reclama",
      "Design grafic",
      "Social media management",
      "Content creation",
      "Media relations",
      "Event management",
      "Corporate communications",
      "Reputation management",
      "Crisis communication",
      "Internal communications",
      "External communications",
      "Stakeholder engagement",
      "Influencer marketing",
      "SEO",
      "SEM",
      "Email marketing",
      "Analytics and reporting"
    ],
  }

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