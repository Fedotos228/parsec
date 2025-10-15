import { BlocksContent } from '@strapi/blocks-react-renderer'
import { IMedia } from './strapi.types'

export type HomeHeroTypes = {
  id: number
  heading: BlocksContent
  video: IMedia
}

export type HomeAboutTypes = {
  id: number
  title: string
  subtitle: string
  description: string
  image: IMedia
}

export interface IHeadingSection {
  id: number
  subtitle: string
  heading: BlocksContent
}

export interface IHomePage {
  hero: HomeHeroTypes
  about: HomeAboutTypes
  projects: IHeadingSection
  partners: IHeadingSection
  contacts: IHeadingSection
}

export interface IContactForm {
  fullname: string,
  phone: string,
  company: string,
  email: string,
  message: string,
}

export interface ITestimonials {
  content: string,
  person: string,
  logo: IMedia,
  project: {
    id: number,
    documentId: string,
    slug: string
  }
}