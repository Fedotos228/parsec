import { IContactForm } from '@/types/contact.type'
import type { ContactPage, HomePage } from '@/types/pages.types'
import { DocumentResponse } from '@strapi/client'
import { createEntity, findSingle } from './api/strapi'

class PagesService {
  private readonly home = '/home'
  private readonly contact = '/contact-page'
  private readonly message = '/messages'

  async getHomePage(): Promise<DocumentResponse<HomePage>> {
    return await findSingle<DocumentResponse<HomePage>>(
      this.home,
      {
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
      }
    )
  }

  async getContactPage() {
    return await findSingle<DocumentResponse<ContactPage>>(
      this.contact,
      {
        populate: {
          fields: ['heading', 'subtitle']
        }
      }
    )
  }

  async sendContactForm(data: IContactForm) {
    return await createEntity<IContactForm>(this.message, data)
  }
}

export const pagesService = new PagesService()