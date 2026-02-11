import { graphql } from '../gql'

export const RepresentativeVideosFragment = graphql(`
  fragment RepresentativeVideo on HomeRepresentativeVideos_Fields {
    title
    video {
      ...Video
    }
  }
`)

export const HomeQuery = graphql(`
  query HomepageQuery {
    pageBy(uri: "home") {
      id
      home {
        representativeVideos {
          ...RepresentativeVideo
        }
      }
    }  
  }
`)