import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

interface ParagraphProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
  VariantProps<typeof paragraphVariants> {
  asChild?: boolean
}

const paragraphVariants = cva('', {
  variants: {
    type: {
      lg: 'text-lg/5',
      md: 'text-base/5',
      sm: 'text-sm/5',
    },
    color: {
      black: 'text-neutral-900',
      foreground: 'text-foregeround',
      accent: 'text-accent-500',
      gray: 'text-neutral-200'
    },
    fontFamily: {
      montserrat: 'font-montserrat',
      hidi: 'font-hidi',
    }
  },
  defaultVariants: {
    type: 'sm',
    color: 'foreground',
  },
})

export function Paragraph({ type, color, asChild, children, className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn('', paragraphVariants({ type, color }), className)}
      {...props}
    >
      {children}
    </p>
  )
}