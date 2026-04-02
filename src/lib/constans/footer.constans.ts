
interface FooterNav {
  id: number,
  label: string,
  href: string
}

export const footerNav: FooterNav[] = [
  {
    id: 0,
    label: 'Acasă',
    href: '/'
  },
  {
    id: 1,
    label: 'Proiecte',
    href: '/projects'
  },
  {
    id: 2,
    label: 'Contacte',
    href: '/contact'
  },
  {
    id: 3,
    label: 'Privacy Policy',
    href: '/privacy-policy'
  },
]

export const footerContacts: FooterNav[] = [
  {
    id: 0,
    label: 'Facebook',
    href: 'https://www.facebook.com/parsec.md'
  },
  {
    id: 1,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/parsec'
  },
  {
    id: 2,
    label: 'Instagram',
    href: 'https://www.instagram.com/parsecosmos/'
  },
]