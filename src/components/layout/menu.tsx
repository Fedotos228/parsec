'use client'

import { useEffect, useState } from 'react'
import Burger from '../shared/burger'
import Navigation from './navigation'

export default function Menu({
  mobile = false
}: {
  mobile?: boolean
}) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
 
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMenuOpen])

  return (
    <>
      <Burger setIsMenuOpen={setIsMenuOpen} />
      <Navigation setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </>
  )
}
