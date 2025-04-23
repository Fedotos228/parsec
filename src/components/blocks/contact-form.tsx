'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { LongArrow } from '../icons'
import { Button } from '../ui/button'
import Input from '../ui/input'
import Textarea from '../ui/textarea'

interface IContactForm {
  name: string,
  phone: string,
  company: string,
  email: string,
  message: string,
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IContactForm>()

  const onSubmit: SubmitHandler<IContactForm> = async data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-[500px] w-full space-y-6'>
      <Input
        type='text'
        label='Numele tau'
        placeholder='Nume'
        {...register('name', { required: 'Numele este necesar' })}
        className={errors.name ? 'border-error-100' : ''}
        labelClassName={errors.name ? '!text-error-100' : ''}
        aria-invalid={errors.name ? 'true' : 'false'}
        aria-errormessage={errors.name ? 'name-error' : undefined}
        disabled={isSubmitting}
        autoComplete='name'
        pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
      />
      <Input
        type='text'
        label='Nr. meu de telefon este'
        placeholder='Telefon'
        {...register('phone', { required: 'Numărul de telefon este necesar' })}
        className={errors.phone ? '!border-error-100' : ''}
        labelClassName={errors.phone ? '!text-error-100' : ''}
        aria-invalid={errors.phone ? 'true' : 'false'}
        aria-errormessage={errors.phone ? 'phone-error' : undefined}
        disabled={isSubmitting}
        autoComplete='tel'
      />
      <Input
        type='text'
        label='Lucrez la'
        placeholder='Compania'
        {...register('company', { required: 'Compania este necesară' })}
        className={errors.company ? 'border-error-100' : ''}
        labelClassName={errors.company ? '!text-error-100' : ''}
        aria-invalid={errors.company ? 'true' : 'false'}
        aria-errormessage={errors.company ? 'company-error' : undefined}
        disabled={isSubmitting}
        autoComplete='organization'
      />
      <Input
        type='text'
        label='Contactați-mă la'
        placeholder='E-mail'
        {...register('email', {
          required: 'E-mailul este necesar',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'E-mail invalid',
          },
        })}
        className={errors.email ? 'border-error-100' : ''}
        labelClassName={errors.email ? '!text-error-100' : ''}
        aria-invalid={errors.email ? 'true' : 'false'}
        aria-errormessage={errors.email ? 'email-error' : undefined}
        disabled={isSubmitting}
        autoComplete='email'
      />
      <Textarea
        label='Mesaj'
        placeholder='Începeți să scrii aici...'
        {...register('message', { required: 'Mesajul este necesar' })}
        className={errors.message ? 'border-error-100' : ''}
        labelClassName={errors.message ? '!text-error-100' : ''}
        aria-invalid={errors.message ? 'true' : 'false'}
        aria-errormessage={errors.message ? 'message-error' : undefined}
        disabled={isSubmitting}
      />
      <Button variant='mainBlack'>
        Trimite
        <LongArrow className='fill-neutral-900 group-hover:fill-foreground transition-colors duratio-500' />
      </Button>
    </form>
  )
}
