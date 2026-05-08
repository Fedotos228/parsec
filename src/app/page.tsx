import Footer from '@/components/layout/footer'
import Menu from '@/components/layout/menu'
import Hero from '@/components/pages/home/hero'
import Partners from '@/components/pages/home/partners'
import CTA from '@/components/shared/cta'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Parsec | Agenție de Marketing și PR în Chișinău, Moldova',
  description: 'Agenție de marketing și PR în Chișinău, Moldova. Social media management, creare reels, design grafic, organizare evenimente și consultanță business.',
  keywords: [
    'reels maker Chișinău', 'social media manager Chișinău',
    'agenție de marketing Chișinău', 'organizare evenimente Chișinău',
    'design grafic Chișinău', 'consultanță business Moldova',
    'agenție SMM Chișinău', 'promovare online afaceri Chișinău',
    'Parsec Moldova', 'parsec.md',
  ],
  alternates: {
    canonical: 'https://parsec.md',
  },
  openGraph: {
    title: 'Parsec | Agenție de Marketing și PR în Chișinău, Moldova',
    description: 'Agenție de marketing și PR în Chișinău, Moldova. Social media management, creare reels, design grafic, organizare evenimente și consultanță business.',
    url: 'https://parsec.md',
    type: 'website',
    images: [{ url: 'https://parsec.md/opengraph-image', width: 1200, height: 630 }],
  },
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Parsec",
    "description": "Agenție de marketing și PR full-service în Chișinău, Moldova. Specializați în social media management, creare reels, design grafic, organizare evenimente și consultanță business.",
    "url": "https://parsec.md",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chișinău",
      "addressCountry": "Moldova"
    },
    "areaServed": ["Chișinău", "Moldova", "Romania"],
    "knowsAbout": [
      "Reels maker Chișinău",
      "Social media manager Chișinău",
      "Creare conținut video pentru Instagram",
      "Managementul rețelelor sociale",
      "Agenție SMM",
      "Organizare evenimente corporate Chișinău",
      "Organizare evenimente private Moldova",
      "Design grafic Chișinău",
      "Design materiale publicitare",
      "Publicitate online Moldova",
      "Promovare online afaceri",
      "Plasare publicitate mass-media",
      "Consultanță marketing digital",
      "Consultanță business Moldova",
      "PR", "Branding", "Comunicare de criză",
      "Digital Marketing", "Public Affairs",
      "Producție video", "Web development",
      "Media relations", "Influencer marketing",
      "SEO", "SEM", "Email marketing"
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