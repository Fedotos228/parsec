
import Footer from '@/components/layout/footer/footer'
import Header from '@/components/layout/header/header'
import { siteTitle } from '@/lib/constans'
import { hidi, montserrat } from '@/lib/fonts'
import type { Metadata } from "next"
import "./globals.css"
import Provider from './provider'

export const metadata: Metadata = {
  metadataBase: new URL('https://parsec.md'),
  title: { default: siteTitle, template: '%s | Parsec' },
  description: 'Parsec - Companie de comunicare si logistica',
  alternates: {
    canonical: 'https://parsec.md',
  },
  openGraph: {
    title: 'Parsec',
    description: 'Logistica si comunicare',
    url: 'https://parsec.md',
    siteName: 'Parsec',
    images: [{
      url: `${process.env.STRAPI_BASE}/uploads/FAVICON_2_19516a7bd6.svg`
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
