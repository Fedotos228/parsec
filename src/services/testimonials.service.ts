import { ClientLogoType, TestimonialsType } from '@/types/testimonials.types'
import type { DocumentResponseCollection } from '@strapi/client'
import { findCollection } from './api/strapi'

class TestimonialsService {
  private readonly testimonials = '/testimonials'
  private readonly clientsLogo = '/clients-logos'

  async getTestimonials() {
    return await findCollection<DocumentResponseCollection<TestimonialsType>>(this.testimonials, {
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
    return await findCollection<DocumentResponseCollection<ClientLogoType>>(this.clientsLogo, {
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