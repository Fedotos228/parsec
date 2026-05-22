'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { Button } from '../ui/button'
import { Field, FieldError, FieldGroup } from '../ui/field'
import { Input } from '../ui/input'
import { contactFormSchema } from './form-schema'

export type ContactFormType = z.infer<typeof contactFormSchema>

export default function Form() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullname: '',
      phone: '',
      email: '',
      message: ''
    }
  })

  async function onSubmit(data: ContactFormType) {
    setServerError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        setServerError(json.error ?? 'Ceva a mers greșit. Încearcă din nou.')
        return
      }

      router.push('/contact?succes=true')
    } catch {
      setServerError('Nu s-a putut trimite mesajul. Verifică conexiunea și încearcă din nou.')
    }
  }

  const isSubmitting = form.formState.isSubmitting

  return (
    <form className='mt-18 ' id='contact-form' onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className='space-y-18'>
        <Controller
          name='fullname'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                id="fullname"
                aria-invalid={fieldState.invalid}
                placeholder="Nume"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
        <Controller
          name='phone'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                id="phone"
                aria-invalid={fieldState.invalid}
                placeholder="Telefon"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
        <Controller
          name='email'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="E-mail"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
        <Controller
          name='message'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                id="message"
                aria-invalid={fieldState.invalid}
                placeholder="Mesaj"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
        {serverError && (
          <p className='text-red-500 text-sm'>{serverError}</p>
        )}
        <Button className='max-w-full' disabled={isSubmitting}>
          {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}
        </Button>
      </FieldGroup>
    </form>
  )
}
