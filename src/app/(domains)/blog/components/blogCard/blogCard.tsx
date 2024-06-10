import Link from "next/link"

export type BlogCardPropsType = {
  id: number
  title: string
  description: string
  date: Date
  url: string
}

export const BlogCard = ({ title, description, date, url }: BlogCardPropsType): JSX.Element => {
  const y = date.getFullYear()
  const m = date.getMonth()
  const d = date.getDate()
  return (
    <Link href={url} className="w-full rounded-md border-2 border-gray-400 dark:border-white z-50">
      <h2 className="text-gray-600 dark:text-white text-lg md:text-xl lg:text-2xl font-bold dark:border-white border-b border-gray-400 px-2 py-2">
        {title}
      </h2>
      <div className="flex flex-col text-base text-gray-400 px-4 py-3">
        <div className="flex-1 line-clamp-4 h-12 overflow-y-hidden">
          {description}
        </div>
        <div className="flex justify-end items-end py-2">
          {`${y}年${m}月${d}日`}
        </div>
      </div>
    </Link>
  )
}

export default BlogCard