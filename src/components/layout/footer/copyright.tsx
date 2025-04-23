'use client'

import { Paragraph } from '@/components/ui/typography/paragraph'
import Link from 'next/link'

export default function Copyright() {
  const currentYear = new Date().getFullYear()

  return (
    <div className='flex items-center justify-between py-8 border-t border-t-neutral-600'>
      <Paragraph>
        © {currentYear} PARSEC All rights reserved
      </Paragraph>
      <nav className='flex items-center gap-8'>
        <Link className='text-neutral-200' href={'/terms-and-conditions'}>
          Termeni si condiții
        </Link>
        <Link className='text-neutral-200' href={'/privacy-policy'}>
          Confidențialitate
        </Link>
        <Link className='text-neutral-200' href={'/cookies'}>
          Cookies
        </Link>
      </nav>
    </div>
  )
}