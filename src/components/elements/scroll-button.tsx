'use client'

import { cn } from '@/lib/utils'

export default function ScrollButton({
  className
}: {
  className?: string
}) {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <button className={cn('relative w-7 h-13 border border-foreground rounded-full z-10', className)} onClick={handleClick}>
      <span className='absolute top-4 left-1/2 -translate-x-1/2 block w-1 h-1 bg-foreground rounded-full animate-[dropAndFade_1300ms_ease-in-out_infinite]'></span>
    </button>
  )
}
