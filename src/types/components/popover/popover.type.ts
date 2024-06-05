export type PopoverPropsType = Readonly<{
  title: string,
  popoverMenuItems?: {
    popoverMenuItem: String,
    url: string,
    description?: string | undefined
  }[]
}>

export default PopoverPropsType