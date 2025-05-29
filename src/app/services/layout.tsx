import { Metadata } from 'next'

export const meta: Metadata = {
  
}

export default function ServicesLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
