import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Parsec',
    short_name: 'Parsec',
    description: 'Parsec - Companie de comunicare si logistica',
    start_url: '/',
    display: 'standalone',
    background_color: '#CBA35C',
    theme_color: '#CBA35C',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}