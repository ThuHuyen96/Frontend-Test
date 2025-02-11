"use client"

type Props = {
  title?: boolean
  paragraph?: boolean
  button?: boolean
  form?: boolean
  className?: string
}

export default function SkeletonLoading({ title = true, paragraph = true, button = false, className, form = false }: Props) {
  return (
    <div className={className}>
      {title && <div className="h-6 bg-gray-200 rounded animate-pulse mb-6 w-2/3"></div>}
      {paragraph && (
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
        </div>
      )}
      {button && <div className="h-6 bg-gray-200 rounded animate-pulse w-24"></div>}
      {form && (
        <>
          <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-2/5"></div>
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
        </>
      )}
    </div>
  )
}
