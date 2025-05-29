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

export interface SingleType<T extends BaseEntity> {
  data: T
  meta: Meta
}

export interface CollectionType<T extends BaseEntity> {
  data: T[]
  meta: Meta
}