export type PortfolioType = {
  slug: string,
  title: string,
  company: string,
  imageUrl: string,
  description: string,
  services: string[],
}[]

export interface IServiceItem {
  id: number,
  slug: string,
  title: string,
  href: string,
  description: string,
  tags: string[],
  imageUrl: string,
  clientsLogos: {
    id: number,
    alt: string,
    src: string,
  }[]
  portfolio?: PortfolioType
}