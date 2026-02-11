export interface IService {
  id: number
  title: string
  description: string
  background: IBackground
  categories: ServiceCategories[]
}

export interface ServiceCategories {
  id: number,
  title: string,
  description: string
  projects: IProjectCard[]
}

export interface IBackground {
  id: number
  video: {
    url: string
    type: 'video/webm' | 'video/mp4' | 'video/mov'
  }[]
  poster: string
}

export interface IProjectCard {
  id: number
  slug: string
  title: string,
  description: string,
  image: {
    url: string
    alt: string
  }
}