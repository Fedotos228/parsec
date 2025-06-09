import { instance } from './api/strapi'

class TestimonialsService {
  private readonly testimonials = '/testimonials'
  private readonly clientsLogos = '/clients-logos'

  async getTestimonials() {
    return await instance.collection(this.testimonials).find({
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
    return await instance.collection(this.clientsLogos).find({
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