import { cn } from '@/lib/utils'

interface SectionGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
}

export default function SectionGrid({ children, className, id }: SectionGridProps) {
  return (
    <section className={cn('h-lvh grid md:grid-cols-2', className)} id={id}>
      {children}
    </section>
  )
}