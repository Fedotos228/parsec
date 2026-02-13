
export default function ProjectsGridSkeleton() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-3.5 my-20'>
      {[...Array(6)].map((_, i) => (
        <div key={i} className='flex flex-col gap-4 w-full'>
          <div className='aspect-4/3 w-full bg-lable-dark animate-pulse rounded-xl ' />

          <div>
            <div className='h-6 w-3/4 bg-lable-dark animate-pulse rounded mb-3' />
            <div className='h-4 w-1/2 bg-lable-dark animate-pulse rounded' />
          </div>
        </div>
      ))}
    </div>
  )
}
