import { cn } from '@/lib/utils'

export const LongArrow = ({ width = 48, height = 24, className }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 24" fill="none" className={cn('transition-colors duration-500', className)}>
      <path d="M38.1094 5.08594L37.0312 6.16406L42.1172 11.25L3 11.25V12.75L42.1172 12.75L37.0312 17.8359L38.1094 18.9141L44.4844 12.5391L45 12L44.4844 11.4609L38.1094 5.08594Z"  strokeWidth={3} />
    </svg>
  )
}
