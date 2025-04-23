import { Heading } from '@/components/ui/typography/heading'
import Link from 'next/link'

type INavigationItemProps = {
  title: string,
  list: {
    id: number,
    label: string,
    href: string
  }[]
}

export default function NavigationItem({ title, list }: INavigationItemProps) {
  return (
    <div className='max-w-[215px]'>
      <Heading level={6} className='text-accent-500 mb-6'>
        {title}
      </Heading>
      <div className='space-y-4'>
        {list.map(item => (
          <Link
            href={item.href}
            key={item.id}
            className='block text-sm text-foreground hover:text-accent-500 transition-colors duration-200'
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
