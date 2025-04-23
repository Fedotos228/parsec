import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> { }

const headingVariants = cva('tracking-normal', {
  variants: {
    level: {
      1: 'text-[28px]/9 sm:text-4xl/9 lg:text-5xl/12',
      2: 'text-[32px]/9',
      3: 'text-2xl/6',
      4: 'text-xl/5',
      5: 'text-lg/4',
      6: 'text-base/4',
    },
    italic: {
      true: 'italic',
      false: 'not-italic',
    },
  },
  defaultVariants: {
    level: 2,
    italic: false,
  },
})

export function Heading(
  { level, italic, children, className, ...props }: HeadingProps
) {
  const Tag: React.ElementType = `h${level ?? 2}`

  return (
    <Tag
      className={cn('font-semibold' ,headingVariants({ level, italic }), className)}
      {...props}
    >
      {children}
    </Tag>
  )
}