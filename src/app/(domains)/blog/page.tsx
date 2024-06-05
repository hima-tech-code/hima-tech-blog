import { BlogCard } from "./components"

const Page = (): JSX.Element => {
  const currentDate = new Date()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full justify-center items-center">
      <BlogCard id={1} title="テストタイトル" description="テスト投稿ですテスト投稿ですテスト投稿ですテストテスト投稿ですテスト投稿ですテスト投稿ですテストテスト投稿ですテスト投稿ですテスト投稿ですテストテスト投稿ですテスト投稿ですテスト投稿ですテストテスト投稿ですテスト投稿ですテスト投稿ですテストテスト投稿ですテスト投稿ですテスト投稿ですテスト" date={currentDate} />
    </div>
  )
}

export default Page