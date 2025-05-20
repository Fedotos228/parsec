import { BlocksContent } from '@strapi/blocks-react-renderer'
import { BaseEntity, IMedia } from './strapi.types'

export interface IProject extends BaseEntity {
  slug: string,
  title: string,
  company: string,
  thumbnail: IMedia,
  description: string,
  date: string
  services: {
    title: string
    id: number
    documentId: string
  }[]
  content?: BlocksContent
}