import { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: `Contact`,
  description: "Contact page of Parsec",
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return children
}
