'use client'

import { FragmentType } from '@/gql'
import { useBreakpoint } from '@/hook/useBreakpoint'
import { ServiceFragment } from '@/queries/domains.queries'
import ScrollingServices from './scrolling-services'
import ServicesCarousel from './services-carousel'

interface ScrollingProjectsProps {
  services: FragmentType<typeof ServiceFragment>[]
}

export default function ServicesList({ services }: ScrollingProjectsProps) {
  const { isMobile } = useBreakpoint()

  return (
    <>
      {isMobile ? (
        <ServicesCarousel services={services} />
      ) : (
        <ScrollingServices services={services} />
      )}
    </>
  )
}
