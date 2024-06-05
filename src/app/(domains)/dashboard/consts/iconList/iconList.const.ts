import * as DashboardTypes from '@/dashboard/types/components'
import { DocumentTextIcon, MegaphoneIcon } from '@heroicons/react/24/solid'

export const iconList: DashboardTypes.IconWithLabelTypeProps[] = [
  {
    label: 'ブログ投稿',
    icon: MegaphoneIcon,
    url: '/post',
  },
  {
    label: 'ブログ',
    icon: DocumentTextIcon,
    url: '/blog'
  }
]