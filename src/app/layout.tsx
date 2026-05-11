import { ebGaramond, helix } from '@/lib/utils/fonts'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/next"

import CookieBanner from '@/components/shared/cookie-banner'
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://parsec.md'),
  title: {
    default: 'Parsec | Consultanță Strategică și PR Full-Service',
    template: '%s | Parsec',
  },
  description: 'Agenție de PR și comunicare strategică. Oferim servicii de management de criză, campanii media, branding și soluții digitale pentru companii și instituții internaționale.',
  keywords: [
    // Short-tail
    'reels maker Chișinău', 'reels maker Moldova',
    'social media manager Chișinău', 'social media manager Moldova',
    'organizare evenimente Chișinău', 'agenție publicitate Chișinău',
    'design grafic Chișinău', 'consultanță business Moldova',
    // Long-tail
    'servicii reels și video marketing Chișinău',
    'creare conținut video pentru Instagram Chișinău',
    'managementul rețelelor sociale Moldova',
    'agenție SMM Chișinău',
    'organizare evenimente corporate Chișinău',
    'organizare evenimente private Moldova',
    'publicitate online Moldova',
    'promovare online afaceri Chișinău',
    'plasare publicitate mass-media Moldova',
    'design broșură Chișinău',
    'design materiale publicitare Moldova',
    'consultanță marketing digital Moldova',
    'agenție de marketing Chișinău',
    'promovare social media Moldova',
    'creare conținut social media Chișinău',
    // Russian
    'рилс мейкер Кишинев', 'SMM менеджер Кишинев',
    'организация мероприятий Кишинев', 'реклама онлайн Молдова',
    'графический дизайн Кишинев', 'маркетинговое агентство Кишинев',
    // Branded
    'Parsec Moldova', 'parsec.md', 'SCP Parsec Chișinău', 'agenție Parsec Moldova',
  ],
  authors: [{ name: 'Parsec Team' }],
  openGraph: {
    title: 'Parsec | Partenerul tău în Comunicare Strategică',
    description: 'Expertiză în PR, campanii media și reputație publică cu experiență la nivel guvernamental și internațional.',
    url: 'https://parsec.md',
    siteName: 'Parsec',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: 'https://parsec.md/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parsec | Comunicare Strategică',
    description: 'Expertiză în PR, campanii media și reputație publică cu experiență la nivel guvernamental și internațional.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            wait_for_update: 500
          });
          try {
            var c = localStorage.getItem('parsec_cookie_consent');
            if (c === 'accepted') gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted' });
          } catch(e) {}
        `}} />
      </head>
      <body
        className={`${ebGaramond.variable} ${helix.variable} antialiased`}
      >
        <div className="wrapper">
          {children}
        </div>
        <CookieBanner />
        <GoogleAnalytics gaId='G-MVYRTRHH8G' />
        <Analytics />
      </body>
    </html>
  )
}