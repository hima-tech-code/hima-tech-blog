import { Icon } from "next/dist/lib/metadata/types/metadata-types"

export type SidebarProps = Readonly<{
  id: number
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>>
  title: string
  url: string
}>

export default SidebarProps