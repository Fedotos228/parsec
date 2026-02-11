import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils/utils"
 
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm lg:text-base font-regular transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: "w-full max-w-70 bg-background text-foreground primary-border py-4 rounded-3xl hover:bg-foreground hover:text-background focus-visible:ring-foreground/80",
        secondary: "secondary-border py-3 px-6",
        link: "relative text-foreground after:content-[''] after:block after:absolute after:top-6 after:w-full after:h-[1px] after:bg-foreground/50 hover:after:bg-foreground after:duration-150",
        carousel: "border rounded-[20px]"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
