import type { Document } from '@strapi/client'
import { StrapiImage } from '@strapi/client'

type DocumentType = Pick<Document, 'documentId' | 'id'> & {
  slug: string
}

interface ITestimonials {
  content: string
  person: string
  logo: StrapiImage
  project: DocumentType
}

interface IClientLogo extends DocumentType {
  alt: string
  id: number
  documentId: string
  image: StrapiImage
}

export type TestimonialsType = Document<ITestimonials>
export type ClientLogoType = Document<IClientLogo>