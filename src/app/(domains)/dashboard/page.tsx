import * as DashboardComponents from './components'
import * as DashboardConsts from './consts'



const Page = () => {
  return (
    <div className="w-full">
      <DashboardComponents.IconList props={DashboardConsts.iconList} />
    </div>
  )
}

export default Page