import { strapi } from '@strapi/client'

export const instance = strapi({
  baseURL: process.env.STRAPI_URL || '',
  auth: process.env.STRAPI_API
})