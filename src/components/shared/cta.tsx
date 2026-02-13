'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from 'react'
import { Button } from '../ui/button'

gsap.registerPlugin(ScrambleTextPlugin)
gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.to('.display-text', {
      duration: 4,
      scrambleText: {
        text: 'Putem începe proiectul tău',
        chars: 'X0ox01',
        revealDelay: 0.5,
        speed: 0.3
      },
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    })
  }, { scope: containerRef })

  return (
    <div className='box flex items-center flex-col gap-9 py-40 px-2' ref={containerRef}>
      <h1 className='display-text display-lg'>Loading...</h1>
      <Button >
        Angajează-ne
      </Button>
    </div>
  )
}
