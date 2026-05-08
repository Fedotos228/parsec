import Description from '@/components/pages/projects-single/description'
import Gallery from '@/components/pages/projects-single/gallery'
import Hero from '@/components/pages/projects-single/hero'
import { Button } from '@/components/ui/button'
import { getNodes } from '@/lib/utils/getNodes'
import { cn } from '@/lib/utils/utils'
import { SingleProject } from '@/queries/projects.queries'
import { wpFetch } from '@/queries/wordpress'
import Image from 'next/image'

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const data = await wpFetch(SingleProject, { slug: slug })

  const title = data.projectBy?.title || 'Serviciu PR'
  const description = data.projectBy?.projectFields?.description || 'Project dezvoltat și realizat de echipa Parsec'

  return {
    title: `${title}`,
    description: description.substring(0, 160),
    alternates: {
      canonical: `https://parsec.md/projects/${slug}`,
    },
    openGraph: {
      title: `${title} | Parsec`,
      images: [{
        url: 'https://parsec.md/opengraph-image',
        width: 1200,
        height: 630,
      }],
    },
  }
}

export default async function SingleProjectPage({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = (await params)
  const data = await wpFetch(SingleProject, { slug: slug })

  const singleProject = data.projectBy
  const servicesNode = getNodes(singleProject?.services)

  const youtubeVideo = singleProject?.projectFields?.youtubeVideo
  const singleVideo = youtubeVideo && youtubeVideo.length === 1
  const twoVideos = youtubeVideo && youtubeVideo.length === 2
  const multipleVideos = youtubeVideo && youtubeVideo.length > 2

  return (
    <div>
      <Hero
        title={singleProject?.title}
        services={servicesNode}
      />
      {singleProject?.featuredImage?.node.sourceUrl && (
        <Image
          src={singleProject?.featuredImage?.node.sourceUrl!}
          alt={singleProject?.featuredImage?.node.altText || 'Single project imaghe'}
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
        <div className='mt-10'>
          {/* Single Youtube video */}
          {youtubeVideo && singleVideo && (
            <div
              dangerouslySetInnerHTML={{ __html: singleProject?.projectFields?.youtubeVideo?.[0]?.video || '' }}
              className='[&_iframe]:w-full! [&_iframe]:h-full! [&_iframe]:aspect-video [&_iframe]:object-cover my-10'
            />
          )}

          {/* Two Youtube videos */}
          {youtubeVideo && twoVideos && (
            <div className='grid grid-cols-2 gap-3.5'>
              {youtubeVideo.map((video, i) => (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{ __html: video?.video || '' }}
                  className={cn(
                    '[&_iframe]:w-full! [&_iframe]:h-full! [&_iframe]:aspect-video [&_iframe]:object-cover',
                  )}
                />
              ))}
            </div>
          )}

          {/* Multiple Youtube videos */}
          {youtubeVideo && multipleVideos && (
            <div className='grid grid-cols-2 gap-3.5'>
              {youtubeVideo.map((video, i) => (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{ __html: video?.video || '' }}
                  className={cn(
                    '[&_iframe]:w-full! [&_iframe]:h-full! [&_iframe]:aspect-video [&_iframe]:object-cover',
                    i === 0 ? 'col-span-2' : ''
                  )}
                />
              ))}
            </div>
          )}
        </div>
        <div className='max-md:w-full mt-14'>
          <Button className='max-md:block max-md:mx-auto'>
            Angajează-ne
          </Button>
        </div>
      </div>
    </div>
  )
}
