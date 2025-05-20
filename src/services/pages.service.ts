import { instance } from './api/strapi'

class PagesService {
  private readonly home = '/home'

  async getHomePage() {
    return await instance.single(this.home).find({
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