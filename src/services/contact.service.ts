import { IContactForm } from '@/components/blocks/contact-form'
import { instance } from './api/strapi'

class ContactService {
  async sendContactForm(data: IContactForm) {
    return await instance.collection('contacts').create(data)
  }
}

export const contactService = new ContactService()