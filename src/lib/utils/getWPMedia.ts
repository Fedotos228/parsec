import { toHttps } from './utils'

export function getWPMedia(src: string): string | undefined {
  return toHttps(process.env.NEXT_PUBLIC_WORDPRESS_MEDIA + src)
}