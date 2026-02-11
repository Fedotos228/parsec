export interface IProject {
  id: number
  name: string
  client: string
  year: number
  image: {
    src: string
    alt: string
  }
  description: {
    type: 'paragraph'
    content: string
  }[]
}