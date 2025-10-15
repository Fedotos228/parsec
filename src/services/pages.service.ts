import { IContactForm, IHeadingSection, IHomePage } from '@/types/pages.types'
import { DocumentResponse } from '@strapi/client'
import { createCollectionEntry, findSingle } from './api/strapi'

class PagesService {
  private readonly home = '/home'

  async getHomePage(): Promise<{ data: IHomePage }> {
    const response = await findSingle<IHomePage>(this.home, {
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
    return response
  }

  async sendContactForm(data: IContactForm): Promise<DocumentResponse<IContactForm>> {
    return await createCollectionEntry<IContactForm>('messages', data)
  }

  async getContactPage(): Promise<DocumentResponse<IHeadingSection>> {
    const response = await findSingle<IHeadingSection>('contact-page', {
      populate: {
        fields: ['heading', 'subtitle']
      }
    })

    return response
  }
}

export const pagesService = new PagesService()