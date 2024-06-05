import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import Link from "next/link";
import { PopoverPropsType } from "@/types/components";

export const PopoverComponents = ({ props }: { props: PopoverPropsType[] }): JSX.Element => {
  return (
    <div className="flex h-screen w-full justify-center pt-20">
      <div className="flex gap-8">
        {props.map((item) => {
          return (
            item.popoverMenuItems ? (
              <Popover>
                <PopoverButton className={'text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white'}>
                  {item.title}
                </PopoverButton>
                <Transition
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel>
                    <div className="p-3">
                      {item.popoverMenuItems.map((menu, index) => {
                        return (
                          <Link className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href={menu.url} key={index}>
                            <p className="font-semibold">{menu.popoverMenuItem}</p>
                            <p className="white-white/50">{menu.popoverMenuItem}</p>
                          </Link>
                        )
                      })}
                    </div>
                  </PopoverPanel>
                </Transition>
              </Popover>
            ) : (
              <div className="text-sm/6 font-semibold text-white/50">
                {item.title}
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}

export default PopoverComponents