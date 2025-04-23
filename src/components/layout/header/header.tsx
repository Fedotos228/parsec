'use client'

import { Logo } from '@/components/ui/logo'
import { useEffect, useState } from 'react'
import Burger from './burger/burger'
import Menu from './menu'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <div className='absolute top-0 flex items-center justify-between w-full px-5 lg:px-[80px] py-3 md:py-7 z-20'>
      <Logo />
      <Burger isOpen={isOpen} handleClick={handleClick} />
      <Menu isOpen={isOpen} />
    </div>
  )
}
