import { IProject } from './project.types'
import { BaseEntity, IMedia } from './strapi.types'

export interface IServicesSlugs {
  id: number
  title: string
  slug: string,
  documentId: string
}

interface ITags {
  id: number
  label: string
}

interface IClientsLogo extends BaseEntity {
  alt: string
  slug: string
  image: IMedia
}

export interface IServiceItem extends BaseEntity {
  title: string,
  slug: string,
  description: string,
  image: IMedia
  tags: ITags[]
  clients_logos?: IClientsLogo[]
  projects?: IProject
}