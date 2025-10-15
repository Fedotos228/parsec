interface PaginationMeta {
  page: number
  pageSize: number
  pageCount: number
}

interface Meta {
  pagination: PaginationMeta
}
 
export interface BaseEntity {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface IMedia {
  id: number
  documentId: string
  url: string
}

export interface StrapiImage {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    thumbnail?: StrapiImageFormat
    small?: StrapiImageFormat
    medium?: StrapiImageFormat
    large?: StrapiImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface StrapiImageFormat {
  name: string
  hash: string
  ext: string
  mime: string
  path: string | null
  width: number
  height: number
  size: number
  url: string
}

export interface StrapiButton {
  id: number
  title: string
  variant: 'primary' | 'secondary' | 'outline'
  url: string
  isExternal: boolean
}

export interface SingleType<T extends BaseEntity> {
  data: T
  meta: Meta
}

export interface CollectionType<T extends BaseEntity> {
  data: T[]
  meta: Meta
}