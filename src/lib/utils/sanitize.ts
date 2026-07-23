import DOMPurify from 'isomorphic-dompurify'

export function sanitizeHtml(html: string | null | undefined): string {
  if (!html) return ''

  return DOMPurify.sanitize(html, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'target'],
  })
}
