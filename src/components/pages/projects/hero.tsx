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
    <div className='py-28.5'>
      <h1 className='display-lg mb-6'>{title}</h1>
      <div className=' 2xl:max-w-2/3 px-3.5 mx-auto mt-4 text-center flex flex-wrap gap-3 justify-center'>
        <Button asChild variant={'secondary'}>
          <Link href="/projects">
            Toate
          </Link>
        </Button>
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
