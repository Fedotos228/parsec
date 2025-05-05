import { siteTitle } from '@/lib/constans'
import { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: `${siteTitle} | Contact`,
  description: "Contact page of Parsec",
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      {children}
    </div>
  )
}
