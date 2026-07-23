import sanitizeHtmlLib from 'sanitize-html'

const ALLOWED_TAGS = [
  ...sanitizeHtmlLib.defaults.allowedTags,
  'img',
  'iframe',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
]

const ALLOWED_ATTRIBUTES = {
  ...sanitizeHtmlLib.defaults.allowedAttributes,
  a: ['href', 'name', 'target', 'rel'],
  img: ['src', 'alt', 'width', 'height'],
  iframe: ['src', 'allow', 'allowfullscreen', 'frameborder', 'title', 'width', 'height'],
  '*': ['class'],
}

export function sanitizeHtml(html: string | null | undefined): string {
  if (!html) return ''

  return sanitizeHtmlLib(html, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: ALLOWED_ATTRIBUTES,
    allowedIframeHostnames: ['www.youtube.com', 'youtube.com', 'player.vimeo.com'],
  })
}
