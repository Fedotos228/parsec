import { strapi } from '@strapi/client'

export const instance = strapi({
  baseURL: process.env.STRAPI_URL || '',
  auth: process.env.STRAPI_API
})

export async function findSingle<T>(url: string, params?: object): Promise<T> {
  const response = await instance.single(url).find(params)
  return response as T
}

export async function findCollection<T>(url: string, params?: object): Promise<T> {
  const response = await instance.collection(url).find(params)
  return response as T
}

export async function createEntity<T>(url: string, data: object): Promise<T> {
  const response = await instance.collection(url).create(data)
  return response as T
}