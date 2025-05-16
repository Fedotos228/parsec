import { BlocksContent } from '@strapi/blocks-react-renderer'

interface IStrapiMedia {
  url: string
  id: number
  documentId: string
}

export type HomeHeroTypes = {
  id: number
  heading: BlocksContent
  video: IStrapiMedia
}

export type HomeAboutTypes = {
  id: number
  title: string
  subtitle: string
  description: string
  image: IStrapiMedia
}

export interface IHeadingSection {
  id: number
  heading: BlocksContent
  subtitle: string
}