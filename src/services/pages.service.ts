import { IContactForm, IHeadingSection, IHomePage } from '@/types/pages.types'
import { DocumentResponse } from '@strapi/client'
import { instance } from './api/strapi'

class PagesService {
  private readonly home = '/home'

  async getHomePage(): Promise<{ data: IHomePage }> {
    const response = await instance.single(this.home).find({
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

    return response as unknown as { data: IHomePage }
  }

  async sendContactForm(data: IContactForm): Promise<DocumentResponse<IContactForm>> {
    return (await instance.collection('messages').create(data)) as unknown as DocumentResponse<IContactForm>
  }

  async getContactPage(): Promise<DocumentResponse<IHeadingSection>> {
    const response = await instance.single('contact-page').find({
      populate: {
        fields: ['heading', 'subtitle']
      }
    })

    return response
  }
}

export const pagesService = new PagesService()