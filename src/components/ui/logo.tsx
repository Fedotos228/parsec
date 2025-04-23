import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  type?: 'white' | 'black'
  className?: string,
  width?: number,
  height?: number,
}

export function Logo(
  {
    type = 'white',
    className,
    width = 140,
    height = 40,
  }: LogoProps
) {
  return (
    <Link href='/'>
      <Image
        src={`/assets/image/logos/logo-${type}.svg`}
        alt='Logo'
        className={cn('', className)}
        width={width}
        height={height}
      />
    </Link>
  )
}