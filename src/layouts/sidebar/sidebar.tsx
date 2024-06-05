import * as LayoutType from '@/layoutsType/index'
import { XMarkIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

export const Sidebar = ({ props }: { props: LayoutType.SidebarProps[] }) => {
  return (
    <div className="flex flex-col bg-gray-500 h-screen px-4 py-3 sticky top-0 bottom-0">
      <div className="flex flex-col items-center">
        <h1 className="text-xl text-white font-bold">
          ブログタイトル
        </h1>
      </div>
      <ul className='flex flex-col justify-center items-start mt-4'>
        {props.map((item, index) => {
          return (
            <Link href={item.url} className='w-full px-4 flex justify-start items-center hover:bg-white/30 duration-300 rounded-md mt-2' key={item.id}>
              <item.icon className='w-6 h-6 fill-white mr-4 my-3' />
              <span className='text-base font-bold'>
                {item.title}
              </span>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar