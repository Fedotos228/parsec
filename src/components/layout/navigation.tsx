'use client'

import { paths } from '@/lib/utils/paths'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const navigation: { name: string; href: string }[] = [
  { name: 'Acasă', href: paths.home() },
  { name: 'Proiecte', href: paths.projects() },
  { name: 'Consultanță strategică', href: '/domain/consultanta-strategica' },
  { name: 'PR & Marketing', href: '/domain/pr-marketing' },
  { name: 'Contact', href: paths.contact() },
  { name: 'Privacy Policy', href: paths.privacy() },
]

export default function Navigation({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}) {
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const active = 'font-semibold text-raven'

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen, setIsMenuOpen])

  return (
    <motion.div
      className='absolute z-90 top-3'
      initial={{ left: '-100%' }}
      animate={{ left: isMenuOpen ? '12px' : '-100%' }}
      ref={menuRef}
      id='main-navigation'
    >
      <div className='px-5 py-9 md:px-5 md:py-9 bg-[#F4F4F4]' >
        <button className='flex items-center gap-2 cursor-pointer' onClick={() => setIsMenuOpen(false)}>
          <X color='black' />
          <span className='text-background'>
            Închide
          </span>
        </button>
        <nav className='space-y-14 w-62.75 border-t-[#E4E4E4] border-b-[#E4E4E4] border-t border-b my-14 py-14'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block w-fit text-lable-dark ${item.href === pathname ? active : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  )
}
