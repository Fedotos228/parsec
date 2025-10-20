'use client'

import { pagesService } from '@/services/pages.service'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { LongArrow } from '../../icons'
import { Button } from '../../ui/button'
import Input from '../../ui/input'
import Textarea from '../../ui/textarea'
import { IContactForm } from '@/types/contact.type'

export default function ContactForm() {
  const { mutate, isPending } = useMutation({
    mutationKey: ['contact'],
    mutationFn: (data: IContactForm) => pagesService.sendContactForm(data),
    onSuccess: () => {
      toast.success('Mesajul a fost trimis cu succes!')
    },
    onError: () => {
      toast.error('A apărut o eroare. Te rugăm să încerci din nou.')
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IContactForm>()

  const onSubmit: SubmitHandler<IContactForm> = data => {
    mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-[500px] w-full space-y-6'>
      <Input
        type='text'
        label='Numele tau'
        placeholder='Nume'
        {...register('fullname', { required: 'Numele este necesar' })}
        field='fullname'
        errors={errors}
        isSubmitting={isSubmitting}
        autoComplete='name'
        pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
      />
      <Input
        type='text'
        label='Nr. meu de telefon este'
        placeholder='Telefon'
        {...register('phone', { required: 'Numărul de telefon este necesar' })}
        field='phone'
        errors={errors}
        isSubmitting={isSubmitting}
        autoComplete='tel'
        pattern='[0-9+() -]{3,}'
      />
      <Input
        type='text'
        label='Lucrez la'
        placeholder='Compania'
        {...register('company', { required: 'Compania este necesară' })}
        field='company'
        errors={errors}
        isSubmitting={isSubmitting}
        pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
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
        field='email'
        errors={errors}
        isSubmitting={isSubmitting}
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
      <Button variant='mainBlack' className='w-[190px]' disabled={isPending}>
        {
          isPending
            ? <div className='animate-spin h-5 w-5 border-2 border-t-transparent rounded-full border-white' />
            : <>
              Trimite
              <LongArrow className='fill-neutral-900 group-hover:fill-foreground transition-colors duratio-500' />
            </>
        }
      </Button>
    </form>
  )
}
