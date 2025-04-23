import { cn } from '@/lib/utils'
import React from 'react'

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, React.ComponentProps<'input'> {
  label: string
  labelClassName?: string
}

export default function Input({ type, className, label, labelClassName, ...props }: InputProps) {
  return (
    <div className='w-full group font-hidi'>
      <label className={cn('block text-neutral-600 group-hover:text-neutral-900', labelClassName)}>
        {label}
      </label>
      <input
        type={type}
        className={cn('block w-full bg-transparent text-neutral-900 border-b border-b-neutral-600 focus:border-b-neutral-900 placeholder:text-accent-600 py-3 outline-0 transition-all duration-150 disabled:border-b-accent-600', className)}
        {...props}
      />
    </div>
  )
}
