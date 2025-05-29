import { IContactForm } from '@/components/blocks/contact/contact-form'
import { instance } from './api/strapi'

class ContactService {
  async sendContactForm(data: IContactForm) {
    return await instance.collection('messages').create(data)
  }

  async getContactPage() {
    return await instance.single('contact-page').find({
      populate: {
        contact: {
          fields: ['heading', 'subtitle']
        }
      }
    })
  }
}

export const contactService = new ContactService()