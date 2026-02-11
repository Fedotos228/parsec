'use client'

import { useBreakpoint } from '@/hook/useBreakpoint'
import { cn } from '@/lib/utils/utils'
import Link from 'next/link'

export default function Language({
  className
}: {
  className?: string
}) {
  const { isMobile } = useBreakpoint()

  return (
    <div className={cn('flex items-center gap-9', className)}>
      {isMobile ? (
        <>
          <Link href='#' className='label text-foreground'>RO</Link>
          <Link href='#' className='label'>RU</Link>
          <Link href='#' className='label'>En</Link>
        </>
      ) : (
        <>
          <Link href='#' className='label text-foreground'>Română</Link>
          <Link href='#' className='label'>Русский</Link>
          <Link href='#' className='label'>English</Link>
        </>
      )}
    </div>
  )
}