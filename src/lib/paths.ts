const paths = {
  home() {
    return '/'
  },
  services() {
    return '/services'
  },
  servicesSingle(slug: string) {
    return `/services/${slug}`
  },
  contact() {
    return '/contact'
  }, 
  projectSingle(slug: string) {
    return `/project/${slug}`
  },
}

export default paths