import { graphql } from '@/gql'
export const CardDetails = graphql(`
  fragment CardFragment on Project {
    title
    slug
    projectFields {
      year
      client
      description
      shortDescription
    }
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
  }
`)

export const ProjectDetails = graphql(`
  fragment ProjectDetails on Project {
    id
    ...CardFragment
    services {
      nodes {
        slug
      }
    }
  }
`)

export const Projects = graphql(`
  query Projects {
    projects(first: 10) {
      nodes {
        ...ProjectDetails
      }
    }
  }
`)

export const SingleProject = graphql(`
  query SingleProject($slug: String!) {
    projectBy(slug: $slug) {
      id
      slug
      title
      featuredImage {
        node {
          id
          altText
          sourceUrl
        }
      }
      services{
        nodes{
          ...ServicesTaxonomiesFragment
        }
      }
      projectFields {
        client
        year
        description
        gallery{
          nodes{
            id
            altText
            sourceUrl
          }
        }
      }
    }
  }
`)