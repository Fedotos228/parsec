import '@strapi/client'

declare module '@strapi/client' {
  interface Document<T = any> {
    id: number
    documentId: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    [key: string]: T
  }

  interface DocumentResponse<T = Document> {
    data: T
    meta?: {
      pagination?: {
        page: number
        pageSize: number
        pageCount: number
        total: number
      }
    }
  }

  interface CollectionResponse<T = Document> {
    data: T[]
    meta?: {
      pagination?: {
        page: number
        pageSize: number
        pageCount: number
        total: number
      }
    }
  }
}