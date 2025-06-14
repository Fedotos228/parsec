import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/services', '/services/*', '/projects', '/projects/*', '/contacts'],
      disallow: [
        '/admin',
        '/admin/*',
        '/api',
        '/api/*',
      ],
      
    },
    
    sitemap: `${process.env.SITE_URL}/sitemap.xml`,
  }
}