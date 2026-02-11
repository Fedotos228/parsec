import { cn } from '@/lib/utils/utils'

export default function Hr({
  position,
  mobileTop = '2.5',
  mobileBottom = '2.5',
  className
}: {
  position: 'top' | 'bottom',
  mobileTop?: string
  mobileBottom?: string,
  className?: string
}) {
  return (
    <div className={cn(
      `absolute left-0 right-0 ${position === 'top' ? `top-${mobileTop} md:top-10` : `bottom-${mobileBottom} md:bottom-10`}`,
      'w-full h-px',
      'bg-hr border-0',
      'after:absolute after:left-0 after:top-1/2 after:-translate-1/2 after:bg-hr after:w-px after:h-1.5',
      'before:absolute before:right-0 before:top-1/2 before:-translate-1/2 before:bg-hr before:w-px before:h-1.5',
      className
    )} />
  )
}