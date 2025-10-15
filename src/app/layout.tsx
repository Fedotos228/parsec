
import Footer from '@/components/layout/footer/footer'
import Header from '@/components/layout/header/header'
import { hidi, montserrat } from '@/lib/fonts'
import type { Metadata } from "next"
import "./globals.css"
import Provider from './provider'

const siteTitle = 'Parsec'
const strapiURL = process.env.STRAPI_BASE
const siteURL = process.env.SITE_URL as string

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  title: { default: siteTitle, template: '%s | Parsec' },
  description: 'Parsec este o agenție de PR și comunicare cu servicii complete: strategii de comunicare, criză, branding, media, influenceri, evenimente, producție, IT. Experiență națională și internațională.',
  alternates: {
    canonical: siteURL,
  },
  openGraph: {
    title: 'Parsec',
    description: 'Logistica si comunicare',
    url: siteURL,
    siteName: 'Parsec',
    type: 'website',
    images: [{
      url: `${strapiURL}/uploads/FAVICON_2_19516a7bd6.svg`
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parsec',
    description: 'Logistica si comunicare',
    images: [{
      url: `${strapiURL}/uploads/FAVICON_2_19516a7bd6.svg`
    }]
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <body
        className={`${montserrat.variable} ${hidi.variable} antialiased`}
      >
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
