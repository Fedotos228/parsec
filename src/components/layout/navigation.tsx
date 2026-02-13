'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const navigation: { name: string; href: string }[] = [
  { name: 'Homepage', href: '/' },
  { name: 'Proiecte', href: '/projects' },
  { name: 'Strategic', href: '/services/strategic' },
  { name: 'PR & Marketing', href: '/services/pr-marketing' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
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

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <motion.div
      className='absolute z-90 top-3'
      initial={{ left: '-100%' }}
      animate={{ left: isMenuOpen ? '12px' : '-100%' }}
      ref={menuRef}
    >
      <div className='px-5 py-9 md:p-9 bg-[#F4F4F4]' >
        <div className='flex items-center gap-2 cursor-pointer' onClick={() => setIsMenuOpen(false)}>
          <X color='black' />
          <span className='text-background'>
            Închide
          </span>
        </div>
        <nav className='space-y-14 w-62.75 border-t-[#E4E4E4] border-b-[#E4E4E4] border-t border-b my-14 py-14'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block w-fit text-lable-dark ${item.href === pathname ? active : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  )
}
