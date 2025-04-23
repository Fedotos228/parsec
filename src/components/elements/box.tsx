import { cn } from '@/lib/utils'
import React from 'react'

type BoxProps = {
  children: React.ReactNode
  className?: string
}

export default function Box({ children, className }: BoxProps) {
  return (
    <div className={cn('flex justify-center flex-col default-padding', className)}>
      {children}
    </div>
  )
}
