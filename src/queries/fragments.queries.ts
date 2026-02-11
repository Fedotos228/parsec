import { graphql } from '@/gql'

export const VideoFragment = graphql(`
  fragment Video on AcfMediaItemConnectionEdge {
    node {
      id
      mimeType
      altText
      filePath(size: LARGE)
    }
  }
`)

export const ServicesTaxonomiesFragment = graphql(`
  fragment ServicesTaxonomiesFragment on Service {
    id
    slug
    name
  }
`)