'use client'

import { services } from '@/lib/services.constans'
import { ArrowRight, RightUpArrow } from '../icons'
import { Button } from '../ui/button'

export default function ServicesButtons() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='flex items-center flex-wrap shrink gap-4 justify-center max-w-2/3'>
      {services.map((link) => (
        <Button key={link.id} variant='secundary' asChild className='flex items-center gap-2'>
          <button onClick={() => handleScroll(link.slug)} className='group flex items-center gap-2'>
            {link.title}
            <div className='relative w-5 h-5'>
              <RightUpArrow className='absolute inset-0 group-hover:opacity-0 group-hover:invisible fill-accent-500' />
              <ArrowRight className='absolute inset-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible fill-foreground' />
            </div>
          </button>
        </Button>
      ))}
    </div>
  )
}
