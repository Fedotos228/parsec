import { Button } from '@/components/ui/button'
import { FragmentType, useFragment } from '@/gql'
import { ServicesTaxonomiesFragment } from '@/queries/fragments.queries'
import Link from 'next/link'

interface ProjectHeroPros {
  title: string | null | undefined
  services: FragmentType<typeof ServicesTaxonomiesFragment>[]
}

export default function Hero({ title, services }: ProjectHeroPros) {
  const category = useFragment(ServicesTaxonomiesFragment, services)

  return (
    <div className='py-28.5 px-4'>
      <h1 className='display-lg mb-6'>{title}</h1>
      <div className='lg:max-w-2/3 mx-auto mt-4 text-center flex flex-wrap gap-3 justify-center'>
        {category.map((category) => (
          <Button asChild key={category.id} variant={'secondary'}>
            <Link href={`/projects?filter=${category.slug}`}>
              {category.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
