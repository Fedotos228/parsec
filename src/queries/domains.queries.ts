import { graphql } from '@/gql'

export const ProjectFragment = graphql(`
  fragment ProjectFragment on Project {
    slug
    title
    featuredImage {
      node {
        sourceUrl(size: LARGE)
        altText
      }
    }
    projectFields {
      description
      shortDescription
    }
  }
`)

export const ServiceFragment = graphql(`
  fragment ServicesFragment on Service {
    id
    slug
    name
    description
    projects(first: 2) {
      nodes {
        ...ProjectFragment
      }
    }
  }
`)

export const DomainQuery = graphql(`
  query DomainQuery($slug: String!) {
    domainBy(slug: $slug) {
      id
      slug
      title
      featuredImage {
        node {
          altText
          sourceUrl(size: LARGE)
        }
      }
      serviceFields {
        hero {
          description
          shortDescription
          video {
            ...Video
          }
        }
      }
      services {
        nodes {
          ...ServicesFragment
        }
      }
    }
  }
`)