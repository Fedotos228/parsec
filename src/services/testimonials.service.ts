import { ITestimonials } from '@/types/pages.types'
import type { CollectionResponse, Document } from '@strapi/client'
import { findCollection, instance } from './api/strapi'

class TestimonialsService {
  private readonly testimonials = '/testimonials'
  private readonly clientsLogos = '/clients-logos'

  async getTestimonials(): Promise<Document<ITestimonials>> {
    return await findCollection<Document<ITestimonials>>(this.testimonials, {
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