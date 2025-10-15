import { IServiceItem, IServicesSlugs } from '@/types/services.types'
import { instance } from './api/strapi'

class ServicesService {
  private readonly url = '/services'

  async getServicesTitle(): Promise<{data: IServicesSlugs[]}> {
    const response =  await instance.collection(this.url).find({
      fields: ['title', 'slug']
    })

    return response as unknown as {data: IServicesSlugs[]}
  }

  async getServices(): Promise<{ data: IServiceItem[] }> {
    const response = await instance.collection(this.url).find({
      populate: {
        fields: ['title', 'slug', 'description'],
        image: {
          fields: ['url']
        },
        clients_logos: {
          populate: {
            fields: ['alt'],
            image: {
              fields: ['url']
            }
          }
        },
        tags: {
          fields: ['id', 'label']
        }
      }
    })

    return response as unknown as { data: IServiceItem[] }
  }

  async getSingleService(slug: string): Promise<{ data: IServiceItem[] }> {
    const response = await instance.collection(this.url).find({
      filters: {
        slug: {
          $eq: slug
        }
      },
      populate: {
        fields: ['title', 'description'],
        tags: {
          fields: ['id', 'label']
        },
        projects: {
          populate: {
            fields: ['title', 'slug'],
            thumbnail: {
              fields: ['url']
            },
            services: {
              fields: ['title'],
            }
          }
        }
      }
    })

    return response as unknown as { data: IServiceItem[] }
  }

  async getAllIds() {
    const res = await fetch(`${process.env.STRAPI_URL}/services?fields[0]=slug`)

    if (!res.ok) {
      throw new Error('Failed to fetch services data')
    }

    const { data } = await res.json()

    return data.map((item: { id: number, slug: string }) => ({
      slug: item.slug,
    }))
  }
}

export const servicesService = new ServicesService()