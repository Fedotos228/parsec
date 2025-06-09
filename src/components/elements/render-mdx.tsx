
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import { Heading } from '../ui/typography/heading'
import { Paragraph } from '../ui/typography/paragraph'

export default function RenderMdx({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkBreaks]}
      components={{
        p: ({ children }) => <Paragraph>{children}</Paragraph>,
        h1: ({ children }) => (
          <Heading level={1}>{children}</Heading>
        ),
        h2: ({ children }) => (
          <Heading level={2}>{children}</Heading>
        ),
        h3: ({ children }) => (
          <Heading level={3}>{children}</Heading>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}