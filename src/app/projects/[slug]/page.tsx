import Description from '@/components/pages/projects-single/description'
import Gallery from '@/components/pages/projects-single/gallery'
import Hero from '@/components/pages/projects-single/hero'
import YoutubeVideos from '@/components/pages/projects-single/youtube-videos'
import CTA from '@/components/shared/cta'
import { getNodes } from '@/lib/utils/getNodes'
import { SingleProject } from '@/queries/projects.queries'
import { wpFetch } from '@/queries/wordpress'
import Image from 'next/image'
import Script from 'next/script'

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const data = await wpFetch(SingleProject, { slug: slug })

  const title = data.projectBy?.title || 'Serviciu PR'
  const description = data.projectBy?.projectFields?.description || 'Project dezvoltat și realizat de echipa Parsec'

  const ogDescription = description.substring(0, 160)
  const ogImage = data.projectBy?.featuredImage?.node.sourceUrl || 'https://parsec.md/opengraph-image'

  return {
    title: `${title}`,
    description: ogDescription,
    alternates: {
      canonical: `https://parsec.md/projects/${slug}`,
    },
    openGraph: {
      title: `${title} | Parsec`,
      description: ogDescription,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Parsec`,
      description: ogDescription,
      images: [ogImage],
    },
  }
}

export default async function SingleProjectPage({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = (await params)
  const data = await wpFetch(SingleProject, { slug: slug })

  const singleProject = data.projectBy
  const servicesNode = getNodes(singleProject?.services)

  const youtubeVideo = singleProject?.projectFields?.youtubeVideo

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: singleProject?.title,
    description: singleProject?.projectFields?.description?.replace(/<[^>]*>/g, '') || undefined,
    image: singleProject?.featuredImage?.node.sourceUrl || undefined,
    creator: {
      '@type': 'Organization',
      name: 'Parsec',
      url: 'https://parsec.md',
    },
    url: `https://parsec.md/projects/${slug}`,
    ...(singleProject?.projectFields?.year && { datePublished: singleProject.projectFields.year }),
  }

  return (
    <div className="mt-20 md:mt-32">
      <Script
        id="project-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
        title={singleProject?.title}
        services={servicesNode}
      />
      {singleProject?.featuredImage?.node.sourceUrl && (
        <Image
          src={singleProject?.featuredImage?.node.sourceUrl}
          alt={singleProject?.featuredImage?.node.altText || 'Single project image'}
          width={1872}
          height={1000}
          className='px-3 md:p-6 h-auto aspect-video object-cover'
        />
      )}
      <div className='container px-4 mx-auto my-20'>
        <div className='grid md:grid-cols-2 gap-5'>
          <Description
            content={singleProject?.projectFields?.description}
            year={singleProject?.projectFields?.year}
            client={singleProject?.projectFields?.client}
          />
          {singleProject?.projectFields?.gallery && (
            <Gallery images={singleProject?.projectFields?.gallery} />
          )}
        </div>
        {youtubeVideo && (
          <YoutubeVideos youtubeVideo={youtubeVideo} />
        )}
        <div className='w-full mt-10 flex justify-center'>

          <CTA />
          {/* <Button asChild>
            <Link href='/contact' className='w-full h-full'>
              Angajează-ne!
            </Link>
          </Button> */}
        </div>
      </div>
    </div>
  )
}
