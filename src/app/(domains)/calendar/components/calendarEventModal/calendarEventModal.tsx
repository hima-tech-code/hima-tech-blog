import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react"


export const CalendarEventModal = ({ props, isShow, setIsOpen }: { props: any, isShow: boolean, setIsOpen: (isShow: boolean) => void }) => {
  console.log(props)
  console.log(props && props.event.startStr)
  return (
    <div className="w-screen h-screen fixed flex justify-center items-center z-10 bg-black/10">
      {props ? (
        <Transition appear show={isShow}>
          <Dialog as="div" open={isShow} onClose={() => { setIsOpen(false) }} className={'relative z-20 focus:outline-none'}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <TransitionChild
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 transform-[scale(95%)]"
                  enterTo="opecity-100 transform-[scale(100%)]"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 transform-[scale(100%)]"
                  leaveTo="opecity-0 transform-[scale(95%)]"
                >
                  <DialogPanel className="w-full max-w-[320px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] rounded-xl bg-white p-6 backdrop-blur-2xl flex flex-col">
                    <DialogTitle as="h3" className="text-base/7 font-medium text-gray-400">
                      予定の編集
                    </DialogTitle>

                    <div className="mt-4 flex flex-col text-gray-400">
                      <div className="flex flex-col">
                        <label htmlFor="title" className="text-2xl">タイトル</label>
                        <input type="text" className="border-b-2" placeholder="タイトル*" defaultValue={props.event.title} name="title" id="title" />
                      </div>
                      <div className="w-full flex flex-col mt-4">
                        <label htmlFor="start" className="text-2xl">開始日</label>
                        <input type="date" className="border-b-2" defaultValue={props.event.startStr} name="start" id="start" />
                      </div>
                      <div className="w-full flex flex-col mt-4">
                        <label htmlFor="end" className="text-2xl">終了日</label>
                        <input type="date" className="border-b-2" defaultValue={props.event.endStr} name="end" id="end" />
                      </div>
                      <div className="w-full flex flex-col mt-4">
                        <label htmlFor="description" className="text-2xl">概要</label>
                        <textarea
                          placeholder="概要"
                          name="description"
                          id="description"
                          className="border-b-2"
                        >
                        </textarea>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>

      ) : (
        <div>

        </div>
      )}
      {/* <div className="min-w-[320px] sm:min-w-[640px] md:min-w-[768px] lg:max-w-[1024px] bg-white">
        <input type="text" />
      </div> */}


    </div>
  )
}

export default CalendarEventModal

