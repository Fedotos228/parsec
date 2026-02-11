import { graphql } from '@/gql'

export const ServcesTaxonomieQuery = graphql(`
  query ServicesTaxonomies {
    services {
      nodes {
        ...ServicesTaxonomiesFragment
      }
    }
  }
`)