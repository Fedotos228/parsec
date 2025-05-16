import { instance } from './api/strapi'

class ProjectService {
  async getSliderProjects() {
    return await instance.collection('/projects').find({
      fields: ['title', 'slug', 'company'],
      populate: {
        thumbnail: {
          fields: ['url']
        },
        services: {
          fields: ['title']
        }
      },
      pagination: {
        page: 1,
        pageSize: 4
      }
    })
  }

  async getSingleProject(documentId: string) {
    return await instance.collection('/projects').findOne(documentId, {
      fields: ['title', 'slug', 'company', 'date'],
      populate: {
        services: {
          fields: ['title']
        },
        thumbnail: {
          fields: ['url']
        }
      }
    })
  }
}

export const projectService = new ProjectService()