
interface FooterNav {
  id: number,
  label: string,
  href: string
}

export const footerNav: FooterNav[] = [
  {
    id: 0,
    label: 'Homepage',
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
    href: 'facebook.com'
  },
  {
    id: 1,
    label: 'LinkedIn',
    href: 'linkedin.com'
  },
  {
    id: 2,
    label: 'Instagram',
    href: 'instagram.com'
  },
]