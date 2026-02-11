import { graphql } from '@/gql'

export const ContactDetailsFragment = graphql(`
  fragment ContactDetailsFragment on Contact_Fields {
    details{
      link {
        target
        title
        url
      }
      title
    }
  }
`)

export const ContactDetails = graphql(`
  query ContactDetails {
    pageBy(uri: "contact") {
      contact {
        ...ContactDetailsFragment
      }
    }
  }
`)