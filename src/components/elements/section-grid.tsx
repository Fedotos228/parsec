import { cn } from '@/lib/utils'
import React from 'react'

type SectionGridProps = {
  children?: React.ReactNode
  className?: string
}

export default function SectionGrin({ children, className }: SectionGridProps) {
  return (
    <section className={cn('h-dvh grid grid-cols-2', className)}>
      {children}
    </section>
  )
}
