import { graphql } from '@/gql'

export const SocialsLinkFragment = graphql(`
  fragment SocialsFields on GeneralSettingsOptionsSocials {
    links {
      link {
        target
        title
        url
      }
    }
  }
`)

export const SocialQuery = graphql(`
  query SocialsQuery {
    generalSettings {
      generalSettingsOptions {
        socials {
          ...SocialsFields
        }
      }
    }
  }
`)