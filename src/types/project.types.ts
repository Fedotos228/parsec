export interface IProjectContent {
  image: string,
  alt: string
  body: {
    type: 'text' | 'list'
    text?: string
    list?: string[]
  }[]
}

export interface IProject {
  title: string
  slug: string
  description: string
  serviceProvided: string[]
  company: string,
  image: string,
  date: string,
  content: IProjectContent[]
}