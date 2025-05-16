import { instance } from './api/strapi'

class ServicesService {
  async getServicesTitle() {
    return await instance.collection('/services').find({
      fields: ['title']
    })
  }

  async getServices() {
    return await instance.collection('/services').find({
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
    return await instance.collection('/services').findOne(documentId, {
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