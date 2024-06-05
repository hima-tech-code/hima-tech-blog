import * as DashboardTypes from '@/dashboard/types/components'
import * as DashboardComponents from '@/dashboard/components'

export const IconList = ({ props }: { props: DashboardTypes.IconWithLabelTypeProps[] }): JSX.Element => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {props.map((item, index) => {
        return (
          <DashboardComponents.IconWithLabel key={index} props={item} />
        )
      })}
    </div>
  )
}

export default IconList