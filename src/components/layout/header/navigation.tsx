import { LineArrowRight } from '@/components/icons'
import { linksMenu } from '@/lib/constans'
import Link from 'next/link'

export default function Navigation() {
  return (
    <div>
      <nav className='flex flex-col mg:gap-5 lg:gap-11'>
        {linksMenu.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='flex items-center justify-between text-3xl lg:text-5xl font-semibold group'
            >
              {link.label}
              <LineArrowRight
                width={68}
                height={68}
                className='fill-foreground invisible opacity-0 -translate-x-5 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0'
              />
            </Link>
          ))
        }
      </nav>
    </div>
  )
}
