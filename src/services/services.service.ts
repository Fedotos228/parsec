import { instance } from './api/strapi'

class ServicesService {
  private readonly url = '/services'

  async getServicesTitle() {
    return await instance.collection(this.url).find({
      fields: ['title']
    })
  }

  async getServices() {
    return await instance.collection(this.url).find({
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
  }

  async getSingleService(documentId: string) {
    return await instance.collection(this.url).findOne(documentId, {
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
  }
}

export const servicesService = new ServicesService()