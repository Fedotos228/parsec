'use client'

import Loader from '@/components/elements/loader'
import { useStrapiQuery } from '@/hooks/use-strapi'
import { projectsService } from '@/services/projects.service'
import ProjectSingleHero from '../blocks/project-single/project-single-hero'

export default function ProjectSingle({ slug }: { slug: string }) {
  const { data, isLoading } = useStrapiQuery(
    ['singleProject', slug],
    () => projectsService.getSingleProject(slug),
  )

  const project = data?.[0]


  if (isLoading) return <Loader />
  if (!project) return <div>
    <h1 className='text-8xl font-bold text-center text-accent-500'>404</h1>
    <h2 className='text-3xl font-bold text-center text-neutral-300'>Pagina nu există</h2>
  </div>

  const { title, thumbnail, company, date, services } = project

  return (
    <div>
      <ProjectSingleHero
        title={title}
        company={company}
        thumbnail={thumbnail}
        date={date}
        services={services}
      />
      {/* {project?.content.map((content, index) => (
        <ProjectContent
          key={index}
          content={content}
        />
      ))} */}
    </div>
  )
}
