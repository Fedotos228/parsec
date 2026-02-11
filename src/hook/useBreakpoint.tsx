'use client'

import { useCallback, useEffect, useState } from 'react'

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export type BreakpointKey = keyof typeof breakpoints

export function useBreakpoint() {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    const handlers = Object.values(breakpoints).map((width) => {
      const mql = window.matchMedia(`(min-width: ${width}px)`)
      
      const onChange = () => setWindowWidth(window.innerWidth)
      
      mql.addEventListener('change', onChange)
      return { mql, onChange }
    })

    return () => {
      handlers.forEach(({ mql, onChange }) => mql.removeEventListener('change', onChange))
    }
  }, [])

  const isUp = useCallback((key: BreakpointKey) => {
    return windowWidth >= breakpoints[key]
  }, [windowWidth])

  const isDown = useCallback((key: BreakpointKey) => {
    return windowWidth < breakpoints[key]
  }, [windowWidth])

  return {
    isUp,
    isDown,
    width: windowWidth,
    isMobile: windowWidth < breakpoints.md,
  }
}