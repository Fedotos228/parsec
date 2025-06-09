const paths = {
  home() {
    return '/'
  },
  services() {
    return '/services'
  },
  servicesSingle(documentId: string) {
    return `/services/${documentId}`
  },
  contact() {
    return '/contact'
  }, 
  projectSingle(documentId: string) {
    return `/project/${documentId}`
  },
}

export default paths