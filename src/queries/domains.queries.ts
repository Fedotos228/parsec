import { graphql } from '@/gql'

export const ProjectFragment = graphql(`
  fragment ProjectFragment on Project {
    __typename
    slug
    title
    featuredImage {
      node {
        sourceUrl(size: LARGE)
        altText
      }
    }
    projectFields {
      secundaryFeaturedImage {
        node {
          sourceUrl
          altText
        }
      }
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
    serviceCategories {
      projects {
        nodes {
          ...ProjectFragment
        }
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