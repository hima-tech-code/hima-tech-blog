import { DocumentTextIcon, MegaphoneIcon } from '@heroicons/react/24/solid'
import * as DashboardComponents from './components'
import * as DashboardTypes from './types/components'

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

const Page = () => {
  return (
    <div className="w-full">
      <DashboardComponents.IconList props={iconList} />
    </div>
  )
}

export default Page