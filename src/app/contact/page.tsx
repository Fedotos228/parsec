import ContactPage from '@/components/pages/contact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Contact`,
  description: "Contact page of Parsec",
}

export default function page() {
  return <ContactPage />
}
