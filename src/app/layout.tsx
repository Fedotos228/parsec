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
  keywords: ['PR', 'comunicare strategică', 'management de criză', 'branding', 'campanii media', 'consultanță afaceri', 'producție video'],
  authors: [{ name: 'Parsec Team' }],
  openGraph: {
    title: 'Parsec | Partenerul tău în Comunicare Strategică',
    description: 'Expertiză în PR, campanii media și reputație publică cu experiență la nivel guvernamental și internațional.',
    url: 'https://parsec.md',
    siteName: 'Parsec',
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parsec | Comunicare Strategică',
    description: 'Expertiză în PR, campanii media și reputație publică cu experiență la nivel guvernamental și internațional.',
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
      </body>
      <GoogleAnalytics gaId='G-MVYRTRHH8G' />
      <Analytics />
    </html>
  )
}