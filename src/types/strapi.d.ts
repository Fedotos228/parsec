import "@strapi/client"

declare module "@strapi/client" {
  export type Document<TFields = unknown> = TFields & {
    id: number
    documentId: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
  }

  export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }

  export interface ResponseMeta {
    pagination?: Pagination
  }

  export interface DocumentResponse<T extends Document = Document | Entity> {
    data: T
    meta: ResponseMeta
  }

  export interface DocumentResponseCollection<T extends Document = Document | Entity> {
    data: T[]
    meta: ResponseMeta
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

  export type DocumentResponseSingle<T extends Document = Document | Entity> = DocumentResponse<T>


  export type StrapiResponse<T> =
    | DocumentResponseSingle<T>
    | DocumentResponseCollection<T>

}
