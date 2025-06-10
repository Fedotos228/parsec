
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
  projectsSingle(documentId: string) {
    return `/projects/${documentId}`
  },
  projects() {
    return `/projects`
  },
}

export default paths