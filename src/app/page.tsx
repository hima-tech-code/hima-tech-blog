import Link from "next/link";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-2xl">ようこそ、Hima-Tech-Blogへ!!</h1>
      <p className="text-sm">
        このWebサイトは塾講師がWebアプリケーションの機能を作成して機能をリリースしたり、その機能を実装するにあたってどのような技術を用いたかをつらつらと書き並べるだけの暇つぶしサイトとなります。
      </p>
      <p>
        現在はブログ記事閲覧しかできませんが、後々色々な機能を実装していく予定です。(筆者の趣味全開で機能は実装するので、あまり一般うけは考えてないです)
      </p>
      <p>
        Xの方にこんな機能実装して欲しいです等の要望はお伺いします(作るかは気分次第ですが)。
        <Link className="text-2xl" href={'https://x.com/hima_tech_code'}>
          こちら
        </Link>
        からXに飛べますので、フォローやコメントをつけていただけると、励みになります。
      </p>
    </main>
  );
}

export default Home
