'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
import { SplitText } from 'gsap/SplitText'
import Link from 'next/link'
import { useRef } from 'react'
import { Button } from '../ui/button'

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const containerRef = useRef(null)

  useGSAP(() => {
    const split = new SplitText('.display-text', { type: 'words' })
    gsap.from(split.words, {
      filter: 'blur(12px)',
      opacity: 0,
      y: 20,
      stagger: 0.12,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    })
  }, { scope: containerRef })

  return (
    <div className='box flex items-center flex-col gap-9 py-40 px-2' ref={containerRef}>
      <h1 className='display-text display-lg'>Putem începe proiectul tău</h1>
      <Button asChild>
        <Link href={'/contact'}>
          Angajează-ne
        </Link>
      </Button>
    </div>
  )
}
