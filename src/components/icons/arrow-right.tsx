import { cn } from '@/lib/utils'

export const ArrowRight = ({ className }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={cn('transition-all duration-300', className)}>
      <path d="M14.0391 5.08594L12.9609 6.16406L18.0469 11.25H3V12.75H18.0469L12.9609 17.8359L14.0391 18.9141L20.4141 12.5391L20.9297 12L20.4141 11.4609L14.0391 5.08594Z" />
    </svg>
  )
}