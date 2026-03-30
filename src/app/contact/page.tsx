import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactează echipa Parsec pentru consultanță în PR, comunicare strategică și campanii media.',
  openGraph: {
    title: 'Contact | Parsec',
    description: 'Contactează echipa Parsec pentru consultanță în PR și comunicare strategică.',
    url: 'https://parsec.md/contact',
  },
  alternates: {
    canonical: 'https://parsec.md/contact',
  },
}

export default async function page() {
  return (
    <div>COntact page &gt;:(((</div>
  )
}
