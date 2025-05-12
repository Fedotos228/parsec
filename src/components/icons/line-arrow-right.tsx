import { cn } from '@/lib/utils'

export const LineArrowRight = ({ width = 24, height = 24, viewBox, className }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={cn('transition-colors duration-300', className)} viewBox={viewBox} fill="none">
      <path d="M17.1055 9.22282L16.9798 9.09524L16.8541 9.22282L16.4736 9.60902L16.3515 9.73287L16.4736 9.85673L17.9727 11.3782L4.58823 11.3782H4.41176V11.5547V12.092V12.2685H4.58823L17.9727 12.2685L16.4736 13.79L16.3515 13.9138L16.4736 14.0377L16.8541 14.4239L16.9798 14.5515L17.1055 14.4239L19.3555 12.1403L19.3555 12.1403L19.3582 12.1375L19.5402 11.9444L19.6543 11.8234L19.5402 11.7023L19.3582 11.5092L19.3582 11.5092L19.3555 11.5064L17.1055 9.22282Z" strokeWidth="0.352941" />
    </svg>
  )
}
