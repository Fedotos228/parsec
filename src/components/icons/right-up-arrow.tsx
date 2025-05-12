import { cn } from '@/lib/utils'

export const RightUpArrow = ({ className }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={cn('transition-all duration-300', className)} viewBox="0 0 24 24" fill="none">
      <path d="M18.3392 5.69611L17.5934 5.67954H8.57779V7.20424H15.7704L5.13064 17.844L6.1913 18.9046L16.831 8.2649V15.4575H18.3557V6.44189L18.3392 5.69611Z" />
    </svg>
  )
}
