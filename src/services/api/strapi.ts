import type { CollectionResponse, DocumentResponse } from '@strapi/client'
import { strapi } from '@strapi/client'

export const instance = strapi({
  baseURL: process.env.STRAPI_URL || '',
  auth: process.env.STRAPI_API
})

export async function findSingle<T = any>(uid: string, params?: Object): Promise<DocumentResponse<T>> {
  const res = await instance.single(uid).find(params)
  return res as unknown as DocumentResponse<T>
}

export async function findCollection<T = any>(uid: string, params?: Object): Promise<CollectionResponse<T>> {
  const res = await instance.collection(uid).find(params)
  return res as unknown as CollectionResponse<T>
}

export async function createCollectionEntry<T = any>(uid: string, data?: any): Promise<DocumentResponse<T>> {
  const res = await instance.collection(uid).create(data)
  return res as unknown as DocumentResponse<T>
}