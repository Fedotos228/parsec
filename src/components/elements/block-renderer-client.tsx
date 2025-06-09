"use client"

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer"

import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '../ui/typography/heading'
import { Paragraph } from '../ui/typography/paragraph'

export default function BlockRendererClient({
  content,
  headingClassName
}: {
  readonly content: BlocksContent,
  readonly headingClassName?: string
}) {
  if (!content) return null
  return <BlocksRenderer
    content={content}
    blocks={{
      paragraph: ({ children }) => <Paragraph className="mb-3">{children}</Paragraph>,
      heading: ({ children, level }) => {
        switch (level) {
          case 1:
            return <Heading level={1} className={headingClassName}>{children}</Heading>
          case 2:
            return <Heading level={2} className={headingClassName}>{children}</Heading>
          case 3:
            return <Heading level={3} className={headingClassName}>{children}</Heading>
          case 4:
            return <Heading level={4} className={headingClassName}>{children}</Heading>
          case 5:
            return <Heading level={5} className={headingClassName}>{children}</Heading>
          case 6:
            return <Heading level={6} className={headingClassName}>{children}</Heading>
          default:
            return <Heading level={2} className={headingClassName}>{children}</Heading>
        }
      },
      link: ({ children, url }) => <Link href={url}>{children}</Link>,
      image: ({ image }) => {
        return (
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.alternativeText || ""}
            className='mx-auto mb-5'
          />
        )
      },
    }}
    modifiers={{
      bold: ({ children }) => <strong>{children}</strong>,
      italic: ({ children }) => <em>{children}</em>,
    }}
  />
}