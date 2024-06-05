import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/header/header";
import * as Layouts from '@/layouts/index'
import * as LayoutsConsts from '@/layoutsConst/index'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "テストサイト",
  description: "新機能を実装するためのサイトになります",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="w-full flex">
          <div className="">
            <Layouts.Sidebar props={LayoutsConsts.sidebarPropsConst} />
          </div>
          <div className="flex flex-col flex-1">
            <div>
              <Layouts.Header />
            </div>
            <div className="px-4 py-3">
              {children}
            </div>
          </div>

        </div>
      </body>
    </html>
  );
}
