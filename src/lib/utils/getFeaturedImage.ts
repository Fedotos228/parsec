interface FeaturedImageNode {
  sourceUrl?: string | null
  altText?: string | null
}

interface FeaturedImageSource {
  featuredImage?: { node: FeaturedImageNode } | null
  projectFields?: {
    secundaryFeaturedImage?: { node: FeaturedImageNode } | null
  } | null
}

export function getFeaturedImage(project: FeaturedImageSource) {
  const secondary = project.projectFields?.secundaryFeaturedImage?.node
  const primary = project.featuredImage?.node

  return {
    url: secondary?.sourceUrl ?? primary?.sourceUrl,
    altText: secondary?.altText || primary?.altText,
  }
}
