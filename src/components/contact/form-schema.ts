import z from 'zod'

export const contactFormSchema = z.object({
  fullname: z.string(),
  phone: z.string(),
  email: z.string(),
  message: z.string().max(200)
}) 