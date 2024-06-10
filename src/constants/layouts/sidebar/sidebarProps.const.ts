import { SidebarProps } from "@/types/layouts";
import { ChatBubbleLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { MegaphoneIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";

export const sidebarPropsConst: SidebarProps[] = [
  {
    id: 1,
    title: 'ダッシュボード',
    icon: ChatBubbleLeftIcon,
    url: '/dashboard',
  },
  // {
  //   id: 2,
  //   title: 'タスク',
  //   icon: ClipboardDocumentCheckIcon,
  //   url: '/task'
  // },
  // {
  //   id: 3,
  //   title: 'カレンダー',
  //   icon: CalendarDaysIcon,
  //   url: '/calendar',
  // },
  // {
  //   id: 4,
  //   title: 'ブログ記事投稿',
  //   icon: MegaphoneIcon,
  //   url: '/post'
  // },
  {
    id: 5,
    title: 'ブログ記事閲覧',
    icon: DocumentTextIcon,
    url: '/blog',
  }
]

export default sidebarPropsConst