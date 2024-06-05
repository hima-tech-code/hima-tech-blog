import * as DashboardTypes from '@/dashboard/types/components'
import Link from 'next/link'

export const IconWithLabel = ({ props }: { props: DashboardTypes.IconWithLabelTypeProps }): JSX.Element => {
  return (
    <Link href={props.url} className="w-full h-full px-4 py-3 flex flex-col justify-center items-center hover:opacity-60 hover:dark:bg-white/60 z-10">
      <props.icon className='w-24 h-24 fill-black dark:fill-white' />
      <span className='text-base text-center mt-2 w-full pt-2'>
        {props.label}
      </span>
    </Link>
  )
}

export default IconWithLabel