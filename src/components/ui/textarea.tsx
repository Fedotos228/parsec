import { cn } from '@/lib/utils'
import React from 'react'

interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  labelClassName?: string
}

export default function Textarea({ className, label, labelClassName, ...props }: ITextArea) {
  return (
    <div className='w-full group font-hidi'>
      <label className={cn('block text-neutral-600 group-hover:text-neutral-900', labelClassName)}>
        {label}
      </label>
      <textarea
        className={cn('block w-full text-neutral-900 border-b border-b-neutral-600 group-focus:border-b-neutral-900 placeholder:text-accent-600 py-3 ring-neutral-900 outline-0 transition-all duration-150 disabled:border-b-accent-600', className)}
        {...props}
      />
    </div>
  )
}
