import { BlocksContent } from '@strapi/blocks-react-renderer'
import { BaseEntity, IMedia } from './strapi.types'

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

export interface IHomePage extends BaseEntity {
  hero: HomeHeroTypes
  about: HomeAboutTypes
  projects: IHeadingSection
  partners: IHeadingSection
  contacts: IHeadingSection
}