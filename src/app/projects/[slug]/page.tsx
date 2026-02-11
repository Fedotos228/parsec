import Description from '@/components/pages/projects-singele/description'
import Gallery from '@/components/pages/projects-singele/gallery'
import Hero from '@/components/pages/projects-singele/hero'
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
          className='p-6 h-auto aspect-video object-cover'
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
        <Button className='mt-14'>
          Angajează-ne
        </Button>
      </div>
    </div>
  )
}
