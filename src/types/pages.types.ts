import { BlocksContent } from '@strapi/blocks-react-renderer'
import type { Document, StrapiImage } from '@strapi/client'

export type HomeHeroTypes = {
  id: number
  heading: BlocksContent
  video: StrapiImage
}

export type HomeAboutTypes = {
  id: number
  title: string
  subtitle: string
  description: string
  image: StrapiImage
}

export interface IHeadingSection {
  id: number
  subtitle: string
  heading: BlocksContent
}

export type HomeFields = {
  hero: HomeHeroTypes
  about: HomeAboutTypes
  projects: IHeadingSection
  partners: IHeadingSection
  contacts: IHeadingSection
}

export type ContactPage = Document<IHeadingSection>
export type HomePage = Document<HomeFields>