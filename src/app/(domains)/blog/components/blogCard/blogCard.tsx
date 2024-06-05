
export type BlogCardPropsType = {
  id: number
  title: string
  description: string
  date: Date
}

export const BlogCard = ({ title, description, date }: BlogCardPropsType): JSX.Element => {
  const y = date.getFullYear()
  const m = date.getMonth()
  const d = date.getDate()
  return (
    <div className="w-full rounded-md border-2 border-gray-400 dark:border-white">
      <h2 className="text-gray-600 dark:text-white text-2xl font-bold dark:border-white border-b border-gray-400 px-2 py-2">
        {title}
      </h2>
      <div className="flex flex-col text-base text-gray-400 px-4 py-3 h-48">
        <div className="flex-1 line-clamp-5 h-36 overflow-y-hidden">
          {description}
        </div>
        <div className="flex justify-end items-end py-2">
          {`${y}年${m}月${d}日`}
        </div>
      </div>
    </div>
  )
}

export default BlogCard