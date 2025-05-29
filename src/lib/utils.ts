import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}

export const strapiMedia = (url: string) => {
  return process.env.STRAPI_BASE + url || ''
}

export const formattingDate = (date: string) => {
  const dateObj = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return dateObj.toLocaleDateString('ro-RO', options)
}