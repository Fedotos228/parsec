'use client'

import { LineArrowRight } from '@/components/icons'
import { linksMenu } from '@/lib/constans'
import Link from 'next/link'
import React from 'react'

export default function Navigation({ handleClick }: { handleClick: () => void }) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  return (
    <div>
      <nav className='w-fit flex flex-col mg:gap-5 lg:gap-11'>
        {linksMenu.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={handleClick}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex items-center justify-between gap-8 text-3xl lg:text-5xl font-semibold group transition-colors duration-300 ${hoveredIndex === null ? 'text-foreground' : hoveredIndex === index ? 'text-foreground' : 'text-neutral-400'}`}
          >
            {link.label}
            <LineArrowRight
              width={68}
              height={34}
              viewBox={'0 5.8 24 12'}
              className='opacity-0 transition-all duration-300 fill-foreground group-hover:opacity-100 group-hover:translate-x-5'
            />
          </Link>
        ))
        }
      </nav>
    </div>
  )
}
