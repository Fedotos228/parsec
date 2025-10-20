import { IContactForm } from '@/types/contact.type'
import React from 'react'
import { FieldErrors } from 'react-hook-form'

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, React.ComponentProps<'input'> {
  label: string
  field: keyof IContactForm
  errors: FieldErrors<IContactForm>
  isSubmitting?: boolean
}

export default function Input({ type, label, field, errors, isSubmitting, ...props }: InputProps) {
  return (
    <div className='w-full group font-hidi'>
      <label className={`block text-neutral-600 group-hover:text-neutral-900 ${errors[field] ? ' !text-error-100' : ''}`}>
        {label}
      </label>
      <input
        type={type}
        className={`block w-full bg-transparent text-neutral-900 border-b border-b-neutral-600 focus:border-b-neutral-900 placeholder:text-accent-600 py-3 outline-0 transition-all duration-150 disabled:border-b-accent-600 ${errors[field] ? 'border-error-100' : ''} `}
        disabled={isSubmitting}
        aria-invalid={errors[field] ? 'true' : 'false'}
        aria-errormessage={errors[field] ? `${field}-error` : undefined}
        {...props}
      />
    </div>
  )
}
