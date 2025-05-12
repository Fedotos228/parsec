
export default function Tags({
  tags
}: {
  tags: string[]
}) {
  return (
    <div className='flex items-center gap-3 flex-wrap mb-2'>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="text-center text-accent-500 px-3 py-2 font-medium/10 bg-neutral-600 rounded-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
