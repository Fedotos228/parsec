import { cn } from '@/lib/utils/utils'
import * as React from "react"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "text-foreground placeholder:text-foreground/80 selection:text-background selection:bg-foreground h-9 w-full min-w-0 pb-4 border-b border-input transition-colors outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-base md:text-2xl",
        "focus-visible:border-b-pastel ",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
