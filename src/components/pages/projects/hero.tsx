'use client'

import { Button } from '@/components/ui/button'
import { FragmentType, useFragment } from '@/gql'
import { ServicesTaxonomiesFragment } from '@/queries/fragments.queries'
import { AnimatePresence, motion } from 'framer-motion'
import { SlidersHorizontal, X } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

interface ProjectHeroPros {
  title: string | null | undefined
  services: FragmentType<typeof ServicesTaxonomiesFragment>[]
}

export default function Hero({ title, services }: ProjectHeroPros) {
  const searchParam = useSearchParams()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const categories = useFragment(ServicesTaxonomiesFragment, services)

  const filterParam = searchParam.get('filter')

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <div className='relative py-10.75 md:py-28.5 px-4 md:px-10'>

      <div className='flex items-start justify-between md:block'>
        <h1 className='display-lg md:mb-6 text-left md:text-center'>{title}</h1>

        <div className='relative md:hidden'>
          <Button
            className={`size-13 `}
            onClick={toggleMenu}
          >
            {isOpen ? <X size={20} /> : <SlidersHorizontal size={20} />}
          </Button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 15, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className='absolute right-0 top-full z-50 min-w-55 origin-top-right'
              >
                <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
                  <nav className='flex flex-col space-y-1'>
                    <Link
                      href="/projects"
                      onClick={() => setIsOpen(false)}
                      className='px-4 py-3 text-sm font-light tracking-wide text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors'
                    >
                      Toate
                    </Link>
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/projects?filter=${category.slug}`}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-3 text-sm font-light tracking-wide  hover:text-white hover:bg-white/5 rounded-xl transition-colors ${filterParam === category.slug ? 'text-white underline underline-offset-5' : 'text-gray-400'} `}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className='hidden md:flex max-w-4xl mx-auto mt-12 text-center flex-wrap gap-3 justify-center'>
        <Button asChild variant={'secondary'} className="rounded-full px-6">
          <Link href="/projects">Toate</Link>
        </Button>
        {categories.map((category) => (
          <Button asChild key={category.id} variant={'secondary'} className="rounded-full px-6">
            <Link href={`/projects?filter=${category.slug}`}>
              {category.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}