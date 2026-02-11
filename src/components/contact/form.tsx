'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { Button } from '../ui/button'
import { Field, FieldError, FieldGroup } from '../ui/field'
import { Input } from '../ui/input'
import { contactFormSchema } from './form-schema'

export type ContactFormType = z.infer<typeof contactFormSchema>

export default function Form() {
  const router = useRouter()
  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullname: '',
      phone: '',
      email: '',
      message: ''
    }
  })

  function onSubmit(data: ContactFormType) {
    console.log(data)
    router.push('/contact?succes=true')
  }

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
                placeholder="Cum vă numiți?"
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
                placeholder="Număr de telefon"
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
                placeholder="Adresa de email"
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
                placeholder="Comentariu"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
        <Button className='max-w-full'>
          Angajează-ne
        </Button>
      </FieldGroup>
    </form>
  )
}
