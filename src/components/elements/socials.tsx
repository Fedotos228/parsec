'use client'

import { socials } from '@/lib/constans'
import Image from 'next/image'
import Link from 'next/link'
import { RightUpArrow } from '../icons'
import { Button } from '../ui/button'


type SocialProps = {
  type: 'buttons' | 'icons'
}

export default function Socials({ type }: SocialProps) {
  return (
    <>
      {type === 'icons' && (
        <div className='flex items-center gap-4'>
          {socials.map(social => (
            <Link key={social.label} href={social.href} target='_blank'>
              <Image
                src={`/assets/icons/${social.label}.svg`}
                alt={social.label}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      )}

      {type === 'buttons' && (
        <div className='space-y-4'>
          {socials.map(social => (
            <Button
              key={social.label}
              variant='ghost'
              className='gap-2'
              asChild
            >
              <Link href={social.href} target='_blank'>
                {social.label}
                <RightUpArrow className='fill-foreground group-hover:fill-neutral-900 group-hover:translate-x-1 group-hover:-translate-y-1 w-4 h-4 md:w-6 md:h-6'/>
              </Link>
            </Button>
          ))}
        </div>
      )}
    </>
  )
}
