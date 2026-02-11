import { ebGaramond, helix } from '@/lib/utils/fonts'
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: 'Parsec',
    template: '%s | Parsec',
  },
  description: "Strategic Consulting Partners Parsec",
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
