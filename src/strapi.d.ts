import '@strapi/client'

declare module '@strapi/client' {
  interface Document<T = any> {
    id: number
    documentId: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    data?: T
    [key: string]: any
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