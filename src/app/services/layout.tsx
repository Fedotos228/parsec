import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicii',
  description: 'Descoperă serviciile noastre de logistică și comunicare. Oferim soluții personalizate pentru nevoile tale.',
}

export default function ServicesLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
