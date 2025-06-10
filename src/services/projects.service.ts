import { instance } from './api/strapi'

class ProjectService {
  private readonly url = '/projects'

  async getSliderProjects() {
    return await instance.collection(this.url).find({
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

  async getSingleProject(slug: string) {
    return await instance.collection(this.url).find({
      filters: {
        slug: {
          $eq: slug
        }
      },
      populate: {
        fields: ['title', 'slug', 'company', 'date'],
        services: {
          fields: ['title']
        },
        thumbnail: {
          fields: ['url']
        }
      }
    })
  }

  async getAllIds() {
    const res = await fetch(`${process.env.STRAPI_URL}/projects?fields[0]=slug`)

    if (!res.ok) {
      throw new Error('Failed to fetch projects data')
    }

    const { data } = await res.json()

    return data.map((item: { id: number, slug: string }) => ({
      slug: item.slug,
    }))
  }

  async getFilteredProjects(filter: string) {
    return await instance.collection(this.url).find({
      filters: {
        services: {
          slug: {
            $eq: filter 
          }
        }
      },
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