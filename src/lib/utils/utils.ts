import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toHttps(url: string | null | undefined): string | undefined {
  if (!url) return undefined
  return url.replace(/^http:\/\//i, 'https://')
}
