'use client'

import Hr from '@/components/shared/hr'
import { FragmentType, useFragment } from '@/gql'
import { useBreakpoint } from '@/hook/useBreakpoint'
import { ServiceFragment } from '@/queries/domains.queries'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import ProjectCard from './project-card'

interface ScrollingServicesProps {
  services: FragmentType<typeof ServiceFragment>[]
}

export default function ScrollingServices({ services }: ScrollingServicesProps) {
  const service = useFragment(ServiceFragment, services)
  const [currentProject, setCurrentProject] = useState<number>(0)
  const { width } = useBreakpoint()

  service[currentProject].projects?.nodes

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const offsetTop = -rect.top
      const sectionHeight = rect.height

      if (offsetTop < 0) return

      const totalScrollableDistance = sectionHeight - window.innerHeight
      const scrollPerService = totalScrollableDistance / service.length

      const index = Math.floor(offsetTop / scrollPerService)

      const clampedIndex = Math.max(0, Math.min(service.length - 1, index))

      setCurrentProject(clampedIndex)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [service.length])

  return (
    <div
      ref={containerRef}
      className='relative my-28'
      style={{ height: `${service.length * 100}dvh` }}
    >
      <div className='sticky top-0 h-dvh overflow-hidden bg-background'>

        <AnimatePresence mode='wait'>
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className='absolute inset-0 max-w-4/5 mx-auto grid grid-cols-[39%_1fr] max-[1366px]:grid-cols-2 gap-6'
          >

            <div className='relative h-full flex flex-col justify-center items-center'>
              <Hr position='top' />
              <div className='self-center'>
                <h3 className='font-serif mb-4 text-4xl'>
                  {service[currentProject].name}
                </h3>
                <p className='text-foreground/80 text-lg leading-relaxed'>
                  {service[currentProject].description}
                </p>
              </div>
              <Hr position='bottom' />
            </div>

            <div className='relative h-full flex flex-col justify-center items-center'>
              <Hr position='top' />
              <div className='grid grid-cols-2 max-[1366px]:grid-cols-1 gap-6'>
                {service[currentProject].projects?.nodes?.slice(0, width < 1366 ? 1 : 2).map((project, i) => (
                  <ProjectCard key={i} card={project} />
                ))}
              </div>
              <Hr position='bottom' />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}