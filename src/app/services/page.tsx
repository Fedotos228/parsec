import ServicePage from '@/components/pages/serivce-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicii',
  description: 'Descoperă serviciile noastre de logistică și comunicare. Oferim soluții personalizate pentru nevoile tale.',
}

export default function page() {
  return <ServicePage />
}