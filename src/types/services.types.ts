import type { Document, StrapiImage } from '@strapi/client'
import { ProjectsType } from './projects.types'

export interface IServiceSlugs {
  title: string
  slug: string
}

interface ITags {
  id: number
  label: string
}

interface IClientsLogo {
  alt: string
  slug: string
  image: StrapiImage
}

type ClientsLogosType = Document<IClientsLogo>

export interface IService {
  title: string,
  slug: string,
  description: string,
  image: StrapiImage
  tags: ITags[]
  clients_logos?: ClientsLogosType[]
  projects?: ProjectsType[]
}

export type ServiceSlugsType = Document<IServiceSlugs>
export type ServiceType = Document<IService>
