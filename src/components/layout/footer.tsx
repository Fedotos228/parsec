'use client'

import { useBreakpoint } from '@/hook/useBreakpoint'
import { footerContacts, footerNav } from '@/lib/constans/footer.constans'
import Link from 'next/link'
import Language from './language'

export default function Footer() {
  const { isMobile } = useBreakpoint()

  return (
    <footer className='p-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-footer p-10 rounded-xl'>
        <nav className='flex items-center flex-col md:flex-row gap-9'>
          {footerNav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className='label whitespace-nowrap'
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className='hidden xl:flex items-center justify-center gap-9'>
          {footerContacts.map((item) => (
            <Link key={item.id} href={item.href} className='label'>
              {item.label}
            </Link>
          ))}
        </div>
        {!isMobile && <Language className='justify-end' />}
      </div>
    </footer>
  )
}