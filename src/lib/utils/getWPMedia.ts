export function getWPMedia(src: string): string | undefined {
  return process.env.NEXT_PUBLIC_WORDPRESS_MEDIA + src
}