import { instance } from './api/strapi'

class PagesService {
  async getHomePage() {
    return await instance.single(`/home`).find({
      populate: {
        hero: {
          populate: {
            video: {
              fields: ['url']
            },
          }
        },
        about: {
          populate: {
            image: {
              fields: ['url']
            }
          }
        },
        projects: {
          populate: '*'
        },
        partners: {
          populate: '*'
        },
        contacts: {
          populate: '*'
        }
      }
    })
  }
}

export const pagesService = new PagesService()