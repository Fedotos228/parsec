import { cn } from '@/lib/utils'

export type TagsProps = {
  label: string,
  id: number
}

export default function Tags({
  tags,
  className
}: {
  tags: TagsProps[],
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-3 flex-wrap mb-2', className)}>
      {tags.map(tag => (
        <span
          key={tag.id}
          className="text-sm md:text-center text-accent-500 px-2 md:px-3 py-2 md:py-2 font-medium/10 bg-neutral-600 rounded-sm"
        >
          {tag.label}
        </span>
      ))}
    </div>
  )
}
