import { cn } from '@/lib/utils'

export const LineArrowLeft = ({ width = 24, height = 24, className }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={cn('transition duration-300', className)} viewBox="0 0 24 24" fill="none">
      <path d="M6.89451 9.22282L7.02021 9.09524L7.14592 9.22282L7.52643 9.60902L7.64847 9.73287L7.52643 9.85673L6.02731 11.3782L19.4118 11.3782H19.5882V11.5547V12.092V12.2685H19.4118L6.02731 12.2685L7.52643 13.79L7.64847 13.9138L7.52643 14.0377L7.14592 14.4239L7.02021 14.5515L6.89451 14.4239L4.64451 12.1403L4.64448 12.1403L4.64179 12.1375L4.4598 11.9444L4.34574 11.8234L4.4598 11.7023L4.64179 11.5092L4.64176 11.5092L4.64451 11.5064L6.89451 9.22282Z" strokeWidth="0.352941" />
    </svg>
  )
}
