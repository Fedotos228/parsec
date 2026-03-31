'use client'

import Link from 'next/link'
import { useLayoutEffect, useState } from 'react'

const COOKIE_KEY = 'parsec_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useLayoutEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-2xl">
      <div className="secondary-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-5">
        <p className="text-sm text-lable leading-relaxed">
          Folosim cookies esențiale pentru funcționarea site-ului.{' '}
          <Link href="/privacy-policy" className="text-foreground underline underline-offset-2 hover:text-lable transition-colors">
            Politica de confidențialitate
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-sm text-lable hover:text-foreground transition-colors px-4 py-2 cursor-pointer"
          >
            Refuz
          </button>
          <button
            onClick={accept}
            className="primary-border text-sm text-foreground px-5 py-2 rounded-xl hover:opacity-80 transition-opacity cursor-pointer"
          >
            Acceptă
          </button>
        </div>
      </div>
    </div>
  )
}