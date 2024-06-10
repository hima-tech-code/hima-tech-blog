import { BlogCard, BlogCardList } from "./components"
import * as blogCardListConst from '@/blog/const/blogList'

const Page = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <BlogCardList
        blogData={blogCardListConst.blogListConst}
      />
    </div>
  )
}

export default Page