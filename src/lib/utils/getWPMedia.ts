export function getWPMedia(src: string): string | undefined {
  if (typeof window !== undefined) {
    return process.env.NEXT_PUBLIC_WORDPRESS_MEDIA + src
  }

  return
}