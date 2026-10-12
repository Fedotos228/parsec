import Footer from '@/components/layout/footer'
import Menu from '@/components/layout/menu'
import { PolicyBlock, PolicyLang, privacyPolicy } from '@/lib/constans/privacy-policy.constans'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate',
  description: 'Politica de confidențialitate și prelucrare a datelor cu caracter personal a SCP PARSEC S.R.L., conformă cu Legea nr. 195/2024 a Republicii Moldova.',
  openGraph: {
    title: 'Politica de Confidențialitate | Parsec',
    description: 'Politica de confidențialitate Parsec — protecția datelor conform Legii nr. 195/2024.',
    url: 'https://parsec.md/privacy-policy',
  },
  alternates: {
    canonical: 'https://parsec.md/privacy-policy',
  },
  robots: {
    index: false,
    follow: false,
  },
}

const languages: { lang: PolicyLang; label: string; href: string }[] = [
  { lang: 'ro', label: 'RO', href: '/privacy-policy' },
  { lang: 'en', label: 'EN', href: '/privacy-policy?lang=en' },
]

export default async function PrivacyPolicyPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const { lang: langParam } = await searchParams
  const lang: PolicyLang = langParam === 'en' ? 'en' : 'ro'
  const policy = privacyPolicy[lang]

  return (
    <div className="relative">
      <header className="absolute top-0 w-full p-8 z-40">
        <Menu />
      </header>

      <main lang={lang} className="pt-40 pb-24 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        <nav className="flex gap-2 mb-8 text-sm" aria-label="Language">
          {languages.map((item) => (
            <Link
              key={item.lang}
              href={item.href}
              aria-current={item.lang === lang ? 'page' : undefined}
              className={
                item.lang === lang
                  ? 'px-3 py-1 rounded-lg border border-white text-white'
                  : 'px-3 py-1 rounded-lg border border-white/20 text-white/60 hover:text-white transition-colors'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <h1 className="text-4xl md:text-5xl font-semibold mb-2">{policy.title}</h1>
        <p className="text-lg text-white/60 mb-10">{policy.subtitle}</p>

        <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-2 mb-10 text-sm">
          {policy.details.map((detail) => (
            <div key={detail.label} className="contents">
              <dt className="text-white/60">{detail.label}</dt>
              <dd className="text-white mb-2 sm:mb-0">
                {detail.value.includes('@') ? (
                  <a href={`mailto:${detail.value}`} className="underline underline-offset-2">
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <aside className="mb-12 border border-white/20 rounded-xl p-5">
          <p className="font-semibold mb-2">{policy.noticeTitle}</p>
          <p className="text-white/80 leading-relaxed">{policy.notice}</p>
        </aside>

        {policy.sections.map((section) => (
          <Section key={section.title} title={section.title}>
            {section.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </Section>
        ))}
      </main>

      <Footer />
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">
        {title}
      </h2>
      <div className="text-white leading-relaxed text-base space-y-3">{children}</div>
    </section>
  )
}

function Block({ block }: { block: PolicyBlock }) {
  switch (block.type) {
    case 'p':
      return <p>{block.text}</p>
    case 'h3':
      return <h3 className="font-semibold pt-3">{block.text}</h3>
    case 'ul':
      return (
        <ul className="space-y-2 list-disc pl-5">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'table':
      return (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {block.head.map((cell) => (
                  <th key={cell} className="text-left font-semibold border border-white/20 px-4 py-2">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map(([category, period]) => (
                <tr key={category}>
                  <td className="border border-white/20 px-4 py-2 align-top">{category}</td>
                  <td className="border border-white/20 px-4 py-2 align-top text-white/80">{period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
}
