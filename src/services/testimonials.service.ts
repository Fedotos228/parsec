import { instance } from './api/strapi'

class TestimonialsService {
  async getTestimonials() {
    return await instance.collection('testimonials').find({
      populate: {
        logo: {
          fields: ['url']
        },
        project: {
          fields: ['slug']
        }
      }
    })
  }
  async getClientsLogos() {
    return await instance.collection('clients-logos').find({
      fields: ['alt'],
      populate: {
        image: {
          fields: ['url']
        }
      }
    })
  }
}

export const testimonialsService = new TestimonialsService()