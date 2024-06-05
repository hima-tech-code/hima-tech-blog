import { PopoverPropsType } from "@/types/components";


export const popoverConst: PopoverPropsType[] = [
  {
    title: '製品紹介',
  },
  {
    title: 'メニュー',
    popoverMenuItems: [
      {
        popoverMenuItem: 'マイページ',
        url: '/mypage',
      },
      {
        popoverMenuItem: 'お問い合わせ',
        url: '/contact'
      }
    ]
  }
]

export default popoverConst
