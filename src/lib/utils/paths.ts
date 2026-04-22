export const paths = {
  home: () => '/',
  contact: () => '/contact',
  domain: (slug: string) => `/domain/${slug}`,
  privacy: () => '/privacy-policy',
  projects: () => '/projects',
  project: (slug: string) => `/project/${slug}`,
}