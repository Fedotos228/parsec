'use client'

import { Button } from '@/components/ui/button'
import { FragmentType, useFragment } from '@/gql'
import { cn } from '@/lib/utils/utils'
import { ServicesTaxonomiesFragment } from '@/queries/fragments.queries'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface ProjectHeroPros {
  services: FragmentType<typeof ServicesTaxonomiesFragment>[]
}

export default function Hero({ services }: ProjectHeroPros) {
  const searchParam = useSearchParams()
  const categories = useFragment(ServicesTaxonomiesFragment, services)

  const filterParam = searchParam.get('filter')

  return (
    <div className='relative h-112 xl:h-162 2xl:h-208 flex items-center justify-center flex-col'>

      <Image
        src="/parsec-bg.png"
        alt="Background"
        className="-z-10 absolute inset-0 object-cover w-auto h-full"
        fill
        sizes='100vw'
        priority
      />

      <div className='flex items-start justify-between md:block'>
        <h1 className='display-lg text-left md:text-center'>Proiecte</h1>
      </div>

      <div className='hidden md:flex max-w-4xl mx-auto mt-12 text-center flex-wrap gap-3 justify-center'>
        <Button asChild variant={'secondary'} className="rounded-full px-6">
          <Link href="/projects">Toate</Link>
        </Button>
        {categories.map((category) => (
          <Button
            asChild key={category.id}
            variant={'secondary'}
            className={cn(
              "rounded-full px-6",
              filterParam === category.slug && 'active'
            )}
          >
            <Link href={`/projects?filter=${category.slug}`}>
              {category.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}