'use client'

import { Paragraph } from '@/components/ui/typography/paragraph'
import Link from 'next/link'

export default function Copyright() {
  const currentYear = new Date().getFullYear()

  return (
    <div className='block md:flex items-center justify-between py-8 border-t border-t-neutral-600'>
      <Paragraph className='mb-4 md:mb-0 text-neutral-200 md:text-foreground'>
        © {currentYear} PARSEC All rights reserved
      </Paragraph>
      <nav className='flex items-center gap-3 md:gap-8'>
        <Link className='text-neutral-200 text-[12px] md:text-base' href={'/terms-and-conditions'}>
          Termeni si condiții
        </Link>
        <Link className='text-neutral-200 text-[12px] md:text-base' href={'/privacy-policy'}>
          Confidențialitate
        </Link>
        <Link className='text-neutral-200 text-[12px] md:text-base' href={'/cookies'}>
          Cookies
        </Link>
      </nav>
    </div>
  )
}