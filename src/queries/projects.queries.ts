import { graphql } from '@/gql'

export const CardDetails = graphql(`
  fragment CardFragment on Project {
    title
    slug
    projectFields {
      secundaryFeaturedImage {
        node {
          sourceUrl
          altText
        }
      }
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
  query Projects($after: String) {
    projects(first: 6, after: $after, where: { orderby: [{ field: MENU_ORDER, order: ASC }] }) {
      pageInfo {
        hasNextPage
        endCursor
      }
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
        secundaryFeaturedImage {
          node {
            sourceUrl
            altText
          }
        }
        client
        year
        description
        gallery{
          ...GalleryFragment
        }
        youtubeVideo {
          fieldGroupName
          video
        }
      }
    }
  }
`)