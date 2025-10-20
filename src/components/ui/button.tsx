import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof buttonVariants> {
	asChild?: boolean
	ref?: React.Ref<HTMLButtonElement>
}

const buttonVariants = cva(
	'relative group flex items-center justify-center gap-3 transition-colors duration-300 ease-in clipped',
	{
		variants: {
			variant: {
				mainWhite: 'bg-transparent text-foreground border-foreground border-[1.5px] after:bg-foreground hover:text-neutral-900 focus:border-accent-500 focus:ring focus:ring-foreground disable:borderneutral-200 disable:text-neutral-300 active::after:bg-neutral-200',
				mainBlack: 'bg-transparent text-neutral-900 border-neutral-900 border-[1.5px] after:bg-neutral-900 hover:text-foreground active:after:bg-neutral-600 focus:border-accent-500 focus:ring focus:ring-neutral-900 disable:border-neutral-200 disable:text-neutral-300',
				secundary: 'border border-accent-500 text-accent-500 hover:text-foreground active:after:bg-accent-600 disable:border-neutral-500 disable:text-neutral-300 after:bg-accent-500',
				ghost: 'bg-transparent text-foreground border-neutral-300 border-[1.5px] after:bg-foreground hover:text-neutral-900 hover:border-foreground active:after:bg-neutral-200 focus:border-accent-500 focus:ring focus:ring-neutral-300 disable:border-neutral-300 disable:text-neutral-300 ',
				longBlack: 'bg-neutral-800 text-foreground hover:bg-neutral-900 has-[.swiper-button-disabled]:text-neutral-300 has-[svg]:fill-foreground',
				longAccent: 'bg-accent-500 text-neutral-900 hover:bg-accent-600 has-[.swiper-button-disabled]:text-neutral-300 has-[.swiper-button-disabled]:bg-neutral-900 has-[svg]:fill-neutral-900',
			},
		},
		compoundVariants: [
			{
				variant: ['mainWhite', 'mainBlack'],
				className: 'w-fit font-medium text-base md:text-lg/5 rounded-sm py-3 md:py-5 px-4 md:px-8'
			},
			{
				variant: ['secundary', 'ghost'],
				className: 'w-fit text-sm/4 md:text-base/5 rounded-sm py-2 px-5 '
			},
			{
				variant: ['longBlack', 'longAccent'],
				className: 'w-full text-xl flex items-center justify-center py-6 px-4 font-semibold'
			}
		],
		defaultVariants: {
			variant: 'mainWhite',
		},
	}
)

export function Button({ variant, asChild, className, children, ref, ...props }: ButtonProps) {
	const Comp = asChild ? Slot : 'button' as React.ElementType
	return (
		<Comp
			className={cn('', buttonVariants({ variant }), className)}
			ref={ref}
			{...props}
		>
			{children}
		</Comp>
	)
}