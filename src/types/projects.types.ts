import { BlocksContent } from '@strapi/blocks-react-renderer'
import type { Document } from '@strapi/client'
import { StrapiImage } from '@strapi/client'

interface IProject {
  slug: string,
  title: string,
  company: string,
  thumbnail: StrapiImage,
  description: string,
  date: string
  services: {
    title: string
    id: number
    documentId: string
  }[]
  content?: BlocksContent
}

export type ProjectsType = Document<IProject>