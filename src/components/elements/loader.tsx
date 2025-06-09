'use client'

import { useEffect } from 'react'

export default function Loader() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  })

  return (
    <div className='flex h-screen w-full items-center justify-center z-50 overflow-hidden'>
      <div className='relative border border-foreground rounded-full h-20 w-20 animated-autoRotate'>
        <span className='absolute top- left-1/2 -translate-x-1/2 -translate-y-[5px] block w-2.5 h-2.5 bg-foreground rounded-full'></span>
      </div>
    </div>
  )
}
