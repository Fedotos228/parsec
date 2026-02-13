import Description from '@/components/pages/projects-single/description'
import Gallery from '@/components/pages/projects-single/gallery'
import Hero from '@/components/pages/projects-single/hero'
import { Button } from '@/components/ui/button'
import { getNodes } from '@/lib/utils/notNullable'
import { SingleProject } from '@/queries/projects.queries'
import { wpFetch } from '@/queries/wordpress'
import Image from 'next/image'

// Descrie Metadata pentru proiecte

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
    title: `${title} | Parsec`,
    description: description.substring(0, 160),
    openGraph: {
      title: `${title} | Consultanță Strategică`,
      images: [data.projectBy?.featuredImage?.node.sourceUrl || '/og-image.jpg'],
    },
  }
}

export default async function SingleProjectPage({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = (await params)
  const data = await wpFetch(SingleProject, { slug: slug })

  const singleProject = data.projectBy
  const servicesNode = getNodes(singleProject?.services)

  return (
    <div>
      <Hero
        title={singleProject?.title}
        services={servicesNode}
      />
      {singleProject?.featuredImage?.node.sourceUrl && (
        <Image
          src={singleProject?.featuredImage?.node.sourceUrl}
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
          <Gallery />
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
