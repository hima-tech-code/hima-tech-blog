import BlogCard, { BlogCardPropsType } from "../blogCard/blogCard"

export const BlogCardList = ({ blogData }: { blogData: BlogCardPropsType[] }): JSX.Element => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full justify-center items-center">
      {blogData.map((item) => {
        return (
          <BlogCard key={item.id} {...item} />
        )
      })}
    </div>
  )
}

export default BlogCardList