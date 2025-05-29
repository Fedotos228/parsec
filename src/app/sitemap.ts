import { projectService } from '@/services/projects.service'
import { servicesService } from '@/services/services.service'
import type { MetadataRoute } from 'next'

const services = await servicesService.getAllIds()
const projects = await projectService.getAllIds()

export default function sitemap(): MetadataRoute.Sitemap {
  const servicesUrls = services.map((item: { documentId: string }) => {
    return {
      url: `${process.env.SITE_URL}/services/${item.documentId}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  })

  const projectsUrls = projects.map((item: { documentId: string }) => {
    return {
      url: `${process.env.SITE_URL}/projects/${item.documentId}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  })

  const baseUrls = [
    {
      url: process.env.SITE_URL || 'https://parsec.md',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.SITE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.SITE_URL}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  return [
    ...baseUrls,
    ...servicesUrls,
    ...projectsUrls
  ]
}