export type IconWithLabelTypeProps = Readonly<{
  label: string
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>>
  url: string
}>

export default IconWithLabelTypeProps