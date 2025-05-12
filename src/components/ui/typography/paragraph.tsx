import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

interface ParagraphProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
  VariantProps<typeof paragraphVariants> {
}

const paragraphVariants = cva('', {
  variants: {
    type: {
      lg: 'text-base md:text-lg/7',
      md: 'text-base/7',
      sm: 'text-sm/7',
    },
    color: {
      black: 'text-neutral-900',
      foreground: 'text-foregeround',
      accent: 'text-accent-500',
      gray: 'text-neutral-200'
    },
  },
  defaultVariants: {
    type: 'sm',
    color: 'foreground',
  },
})

export function Paragraph({ type, color, children, className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn('', paragraphVariants({ type, color }), className)}
      {...props}
    >
      {children}
    </p>
  )
}