/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment ContactDetailsFragment on Contact_Fields {\n    details{\n      link {\n        target\n        title\n        url\n      }\n      title\n    }\n  }\n": typeof types.ContactDetailsFragmentFragmentDoc,
    "\n  query ContactDetails {\n    pageBy(uri: \"contact\") {\n      contact {\n        ...ContactDetailsFragment\n      }\n    }\n  }\n": typeof types.ContactDetailsDocument,
    "\n  fragment ProjectFragment on Project {\n    slug\n    title\n    featuredImage {\n      node {\n        sourceUrl(size: LARGE)\n        altText\n      }\n    }\n    projectFields {\n      description\n      shortDescription\n    }\n  }\n": typeof types.ProjectFragmentFragmentDoc,
    "\n  fragment ServicesFragment on Service {\n    id\n    slug\n    name\n    description\n    projects(first: 2) {\n      nodes {\n        ...ProjectFragment\n      }\n    }\n  }\n": typeof types.ServicesFragmentFragmentDoc,
    "\n  query DomainQuery($slug: String!) {\n    domainBy(slug: $slug) {\n      id\n      slug\n      title\n      featuredImage {\n        node {\n          altText\n          sourceUrl(size: LARGE)\n        }\n      }\n      serviceFields {\n        hero {\n          description\n          shortDescription\n          video {\n            ...Video\n          }\n        }\n      }\n      services {\n        nodes {\n          ...ServicesFragment\n        }\n      }\n    }\n  }\n": typeof types.DomainQueryDocument,
    "\n  fragment Video on AcfMediaItemConnectionEdge {\n    node {\n      id\n      mimeType\n      altText\n      filePath(size: LARGE)\n    }\n  }\n": typeof types.VideoFragmentDoc,
    "\n  fragment ServicesTaxonomiesFragment on Service {\n    id\n    slug\n    name\n  }\n": typeof types.ServicesTaxonomiesFragmentFragmentDoc,
    "\n  fragment SocialsFields on GeneralSettingsOptionsSocials {\n    links {\n      link {\n        target\n        title\n        url\n      }\n    }\n  }\n": typeof types.SocialsFieldsFragmentDoc,
    "\n  query SocialsQuery {\n    generalSettings {\n      generalSettingsOptions {\n        socials {\n          ...SocialsFields\n        }\n      }\n    }\n  }\n": typeof types.SocialsQueryDocument,
    "\n  fragment RepresentativeVideo on HomeRepresentativeVideos_Fields {\n    title\n    video {\n      ...Video\n    }\n  }\n": typeof types.RepresentativeVideoFragmentDoc,
    "\n  query HomepageQuery {\n    pageBy(uri: \"home\") {\n      id\n      home {\n        representativeVideos {\n          ...RepresentativeVideo\n        }\n      }\n    }  \n  }\n": typeof types.HomepageQueryDocument,
    "\n  fragment CardFragment on Project {\n    title\n    slug\n    projectFields {\n      year\n      client\n      description\n      shortDescription\n    }\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n  }\n": typeof types.CardFragmentFragmentDoc,
    "\n  fragment ProjectDetails on Project {\n    id\n    ...CardFragment\n    services {\n      nodes {\n        slug\n      }\n    }\n  }\n": typeof types.ProjectDetailsFragmentDoc,
    "\n  query Projects {\n    projects(first: 10) {\n      nodes {\n        ...ProjectDetails\n      }\n    }\n  }\n": typeof types.ProjectsDocument,
    "\n  query SingleProject($slug: String!) {\n    projectBy(slug: $slug) {\n      id\n      slug\n      title\n      featuredImage {\n        node {\n          id\n          altText\n          sourceUrl\n        }\n      }\n      services{\n        nodes{\n          ...ServicesTaxonomiesFragment\n        }\n      }\n      projectFields {\n        client\n        year\n        description\n        gallery{\n          nodes{\n            id\n            altText\n            sourceUrl\n          }\n        }\n      }\n    }\n  }\n": typeof types.SingleProjectDocument,
    "\n  query ServicesTaxonomies {\n    services {\n      nodes {\n        ...ServicesTaxonomiesFragment\n      }\n    }\n  }\n": typeof types.ServicesTaxonomiesDocument,
};
const documents: Documents = {
    "\n  fragment ContactDetailsFragment on Contact_Fields {\n    details{\n      link {\n        target\n        title\n        url\n      }\n      title\n    }\n  }\n": types.ContactDetailsFragmentFragmentDoc,
    "\n  query ContactDetails {\n    pageBy(uri: \"contact\") {\n      contact {\n        ...ContactDetailsFragment\n      }\n    }\n  }\n": types.ContactDetailsDocument,
    "\n  fragment ProjectFragment on Project {\n    slug\n    title\n    featuredImage {\n      node {\n        sourceUrl(size: LARGE)\n        altText\n      }\n    }\n    projectFields {\n      description\n      shortDescription\n    }\n  }\n": types.ProjectFragmentFragmentDoc,
    "\n  fragment ServicesFragment on Service {\n    id\n    slug\n    name\n    description\n    projects(first: 2) {\n      nodes {\n        ...ProjectFragment\n      }\n    }\n  }\n": types.ServicesFragmentFragmentDoc,
    "\n  query DomainQuery($slug: String!) {\n    domainBy(slug: $slug) {\n      id\n      slug\n      title\n      featuredImage {\n        node {\n          altText\n          sourceUrl(size: LARGE)\n        }\n      }\n      serviceFields {\n        hero {\n          description\n          shortDescription\n          video {\n            ...Video\n          }\n        }\n      }\n      services {\n        nodes {\n          ...ServicesFragment\n        }\n      }\n    }\n  }\n": types.DomainQueryDocument,
    "\n  fragment Video on AcfMediaItemConnectionEdge {\n    node {\n      id\n      mimeType\n      altText\n      filePath(size: LARGE)\n    }\n  }\n": types.VideoFragmentDoc,
    "\n  fragment ServicesTaxonomiesFragment on Service {\n    id\n    slug\n    name\n  }\n": types.ServicesTaxonomiesFragmentFragmentDoc,
    "\n  fragment SocialsFields on GeneralSettingsOptionsSocials {\n    links {\n      link {\n        target\n        title\n        url\n      }\n    }\n  }\n": types.SocialsFieldsFragmentDoc,
    "\n  query SocialsQuery {\n    generalSettings {\n      generalSettingsOptions {\n        socials {\n          ...SocialsFields\n        }\n      }\n    }\n  }\n": types.SocialsQueryDocument,
    "\n  fragment RepresentativeVideo on HomeRepresentativeVideos_Fields {\n    title\n    video {\n      ...Video\n    }\n  }\n": types.RepresentativeVideoFragmentDoc,
    "\n  query HomepageQuery {\n    pageBy(uri: \"home\") {\n      id\n      home {\n        representativeVideos {\n          ...RepresentativeVideo\n        }\n      }\n    }  \n  }\n": types.HomepageQueryDocument,
    "\n  fragment CardFragment on Project {\n    title\n    slug\n    projectFields {\n      year\n      client\n      description\n      shortDescription\n    }\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n  }\n": types.CardFragmentFragmentDoc,
    "\n  fragment ProjectDetails on Project {\n    id\n    ...CardFragment\n    services {\n      nodes {\n        slug\n      }\n    }\n  }\n": types.ProjectDetailsFragmentDoc,
    "\n  query Projects {\n    projects(first: 10) {\n      nodes {\n        ...ProjectDetails\n      }\n    }\n  }\n": types.ProjectsDocument,
    "\n  query SingleProject($slug: String!) {\n    projectBy(slug: $slug) {\n      id\n      slug\n      title\n      featuredImage {\n        node {\n          id\n          altText\n          sourceUrl\n        }\n      }\n      services{\n        nodes{\n          ...ServicesTaxonomiesFragment\n        }\n      }\n      projectFields {\n        client\n        year\n        description\n        gallery{\n          nodes{\n            id\n            altText\n            sourceUrl\n          }\n        }\n      }\n    }\n  }\n": types.SingleProjectDocument,
    "\n  query ServicesTaxonomies {\n    services {\n      nodes {\n        ...ServicesTaxonomiesFragment\n      }\n    }\n  }\n": types.ServicesTaxonomiesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ContactDetailsFragment on Contact_Fields {\n    details{\n      link {\n        target\n        title\n        url\n      }\n      title\n    }\n  }\n"): (typeof documents)["\n  fragment ContactDetailsFragment on Contact_Fields {\n    details{\n      link {\n        target\n        title\n        url\n      }\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ContactDetails {\n    pageBy(uri: \"contact\") {\n      contact {\n        ...ContactDetailsFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query ContactDetails {\n    pageBy(uri: \"contact\") {\n      contact {\n        ...ContactDetailsFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProjectFragment on Project {\n    slug\n    title\n    featuredImage {\n      node {\n        sourceUrl(size: LARGE)\n        altText\n      }\n    }\n    projectFields {\n      description\n      shortDescription\n    }\n  }\n"): (typeof documents)["\n  fragment ProjectFragment on Project {\n    slug\n    title\n    featuredImage {\n      node {\n        sourceUrl(size: LARGE)\n        altText\n      }\n    }\n    projectFields {\n      description\n      shortDescription\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ServicesFragment on Service {\n    id\n    slug\n    name\n    description\n    projects(first: 2) {\n      nodes {\n        ...ProjectFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment ServicesFragment on Service {\n    id\n    slug\n    name\n    description\n    projects(first: 2) {\n      nodes {\n        ...ProjectFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query DomainQuery($slug: String!) {\n    domainBy(slug: $slug) {\n      id\n      slug\n      title\n      featuredImage {\n        node {\n          altText\n          sourceUrl(size: LARGE)\n        }\n      }\n      serviceFields {\n        hero {\n          description\n          shortDescription\n          video {\n            ...Video\n          }\n        }\n      }\n      services {\n        nodes {\n          ...ServicesFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DomainQuery($slug: String!) {\n    domainBy(slug: $slug) {\n      id\n      slug\n      title\n      featuredImage {\n        node {\n          altText\n          sourceUrl(size: LARGE)\n        }\n      }\n      serviceFields {\n        hero {\n          description\n          shortDescription\n          video {\n            ...Video\n          }\n        }\n      }\n      services {\n        nodes {\n          ...ServicesFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Video on AcfMediaItemConnectionEdge {\n    node {\n      id\n      mimeType\n      altText\n      filePath(size: LARGE)\n    }\n  }\n"): (typeof documents)["\n  fragment Video on AcfMediaItemConnectionEdge {\n    node {\n      id\n      mimeType\n      altText\n      filePath(size: LARGE)\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ServicesTaxonomiesFragment on Service {\n    id\n    slug\n    name\n  }\n"): (typeof documents)["\n  fragment ServicesTaxonomiesFragment on Service {\n    id\n    slug\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SocialsFields on GeneralSettingsOptionsSocials {\n    links {\n      link {\n        target\n        title\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment SocialsFields on GeneralSettingsOptionsSocials {\n    links {\n      link {\n        target\n        title\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SocialsQuery {\n    generalSettings {\n      generalSettingsOptions {\n        socials {\n          ...SocialsFields\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query SocialsQuery {\n    generalSettings {\n      generalSettingsOptions {\n        socials {\n          ...SocialsFields\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RepresentativeVideo on HomeRepresentativeVideos_Fields {\n    title\n    video {\n      ...Video\n    }\n  }\n"): (typeof documents)["\n  fragment RepresentativeVideo on HomeRepresentativeVideos_Fields {\n    title\n    video {\n      ...Video\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomepageQuery {\n    pageBy(uri: \"home\") {\n      id\n      home {\n        representativeVideos {\n          ...RepresentativeVideo\n        }\n      }\n    }  \n  }\n"): (typeof documents)["\n  query HomepageQuery {\n    pageBy(uri: \"home\") {\n      id\n      home {\n        representativeVideos {\n          ...RepresentativeVideo\n        }\n      }\n    }  \n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CardFragment on Project {\n    title\n    slug\n    projectFields {\n      year\n      client\n      description\n      shortDescription\n    }\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment CardFragment on Project {\n    title\n    slug\n    projectFields {\n      year\n      client\n      description\n      shortDescription\n    }\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProjectDetails on Project {\n    id\n    ...CardFragment\n    services {\n      nodes {\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment ProjectDetails on Project {\n    id\n    ...CardFragment\n    services {\n      nodes {\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Projects {\n    projects(first: 10) {\n      nodes {\n        ...ProjectDetails\n      }\n    }\n  }\n"): (typeof documents)["\n  query Projects {\n    projects(first: 10) {\n      nodes {\n        ...ProjectDetails\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SingleProject($slug: String!) {\n    projectBy(slug: $slug) {\n      id\n      slug\n      title\n      featuredImage {\n        node {\n          id\n          altText\n          sourceUrl\n        }\n      }\n      services{\n        nodes{\n          ...ServicesTaxonomiesFragment\n        }\n      }\n      projectFields {\n        client\n        year\n        description\n        gallery{\n          nodes{\n            id\n            altText\n            sourceUrl\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query SingleProject($slug: String!) {\n    projectBy(slug: $slug) {\n      id\n      slug\n      title\n      featuredImage {\n        node {\n          id\n          altText\n          sourceUrl\n        }\n      }\n      services{\n        nodes{\n          ...ServicesTaxonomiesFragment\n        }\n      }\n      projectFields {\n        client\n        year\n        description\n        gallery{\n          nodes{\n            id\n            altText\n            sourceUrl\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ServicesTaxonomies {\n    services {\n      nodes {\n        ...ServicesTaxonomiesFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query ServicesTaxonomies {\n    services {\n      nodes {\n        ...ServicesTaxonomiesFragment\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;