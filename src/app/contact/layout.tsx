'use client'

import { useSearchParams } from 'next/navigation'

export default function Layout({ form, succes }: LayoutProps<'/contact'>) {
  const succesParams = useSearchParams().get('succes')

  return (
    <>
      {succesParams && succesParams === 'true' ? succes : form}
    </>
  )
}
