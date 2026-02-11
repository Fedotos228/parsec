'use client'

import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'

export default function Header({
  position = 'absolute',
}: {
  position: 'absolute' | 'static',
}) {
  return (
    <header
      className={`flex w-full p-6 ${position === 'absolute' ? 'absolute top-0 left-0 right-0  z-50' : ''}`}
    >
      <Menu />
      <Link href='/' className='cursor-pointer'>
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={80}
          height={80}
          className='w-20 h-20'
        />
      </Link>
      <div className='flex-1' />
    </header>
  )
}