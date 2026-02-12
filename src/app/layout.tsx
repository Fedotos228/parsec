import { ebGaramond, helix } from '@/lib/utils/fonts'
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
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
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${helix.variable} antialiased`}
      >
        <div className="wrapper">
          {children}
        </div>
      </body>
    </html>
  )
}
