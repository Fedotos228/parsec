import { IHeroVideos } from '@/types/hero.types'

export const heroVideos: IHeroVideos[] = [
  {
    id: 1,
    video: [
      {
        type: 'video/mov',
        url: '/video/strategic.mov'
      },
      {
        type: 'video/webm',
        url: '/video/strategic.webm'
      }
    ],
    poster: '/',
    title: 'Strategic'
  },
  {
    id: 2,
    video: [
      {
        type: 'video/mov',
        url: '/video/creative.mov'
      },
      {
        type: 'video/webm',
        url: '/video/creative.webm'
      }
    ],
    poster: '/',
    title: 'PR & Marketing'
  }
]

