import Link from 'next/link'
import Socials from './socials'


const menuContacts = [
  {
    href: 'contact@parsec.md',
  },
  {
    href: '+(373) 69 262 712'
  },
  {
    href: '+(373) 69 090 438'
  }
]

export default function ContactLinks() {
  function hrefDetermitator(href: string) {
    if (/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(href)) {
      return `mailto:${href}`
    }

    if (/\+\(\d{3}\)\s\d{2}\s\d{3}\s\d{3}/.test(href)) {
      return `tel:${href}`
    }
  }

  return (
    <div>
      <div className='flex flex-col gap-2 mb-4'>
        {menuContacts.map((link) => (
          <Link
            key={link.href}
            href={hrefDetermitator(link.href) || '#'}
            className='text-lg text-neutral-200'
          >
            {link.href}
          </Link>
        ))}
      </div>
      <Socials type='icons' />
    </div>
  )
}
