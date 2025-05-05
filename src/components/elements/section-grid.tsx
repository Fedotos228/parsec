import { cn } from '@/lib/utils'

type SectionGridProps = {
  children?: React.ReactNode
  className?: string
}

export default function SectionGrid({ children, className }: SectionGridProps) {
  return (
    <section className={cn('h-lvh grid grid-cols-2', className)}>
      {children}
    </section>
  )
}