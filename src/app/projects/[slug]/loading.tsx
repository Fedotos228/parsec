export default function Loading() {
  return (
    <div className="mt-20 md:mt-32 animate-pulse">
      <div className="py-28.5 px-4">
        <div className="h-10 md:h-14 w-2/3 md:w-1/2 mx-auto bg-lable-dark rounded mb-6" />
        <div className="lg:max-w-2/3 mx-auto mt-4 flex flex-wrap gap-3 justify-center">
          <div className="h-9 w-24 bg-lable-dark rounded-full" />
          <div className="h-9 w-28 bg-lable-dark rounded-full" />
          <div className="h-9 w-20 bg-lable-dark rounded-full" />
        </div>
      </div>

      <div className="px-3 md:p-6">
        <div className="w-full aspect-video bg-lable-dark rounded" />
      </div>

      <div className="container px-4 mx-auto my-20">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="w-full md:max-w-112.5 space-y-3">
            <div className="h-5 w-1/3 bg-lable-dark rounded" />
            <div className="h-5 w-1/4 bg-lable-dark rounded" />
            <div className="space-y-2 pt-3">
              <div className="h-4 w-full bg-lable-dark rounded" />
              <div className="h-4 w-full bg-lable-dark rounded" />
              <div className="h-4 w-5/6 bg-lable-dark rounded" />
              <div className="h-4 w-full bg-lable-dark rounded" />
              <div className="h-4 w-2/3 bg-lable-dark rounded" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 aspect-4/3 bg-lable-dark rounded" />
            <div className="aspect-4/3 bg-lable-dark rounded" />
            <div className="aspect-4/3 bg-lable-dark rounded" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <div className="md:col-span-2 aspect-video bg-lable-dark rounded" />
          <div className="aspect-video bg-lable-dark rounded" />
          <div className="aspect-video bg-lable-dark rounded" />
        </div>

        <div className="w-full mt-10 flex justify-center">
          <div className="h-12 w-full max-w-xs bg-lable-dark rounded" />
        </div>
      </div>
    </div>
  )
}
