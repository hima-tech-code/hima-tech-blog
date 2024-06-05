'use client'

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import { useState } from "react"
import CalendarEventModal from "../calendarEventModal/calendarEventModal"


interface Event {
  title: string
  start: Date | string
  allday: boolean;
  id: number;
}


const calendarEvents = [
  {
    id: '1',
    title: 'Qiita書く',
    description: 'リンクアンドモチベーションのアドベントカレンダーを書く',
    start: '2024-06-03',
    end: '2024-06-10',
    backgroundColor: 'green',
    borderColor: 'red',
    editable: true
  },
  {
    id: '2',
    title: 'Qiita投稿',
    description: 'リンクアンドモチベーションのアドベントカレンダーを投稿する',
    start: '2024-06-05',
    end: '2024-06-05',
    backgroundColor: 'green',
    borderColor: 'red',
    editable: true
  }
]

export const Calendar = () => {
  const [isModalEditShow, setIsModalEditShow] = useState<boolean>(false)
  const [event, setEvent] = useState<any>()
  const handleClick = (e: any) => {
    console.log(event)
  }

  const handleEventClick = (e: any) => {
    // console.log(e.event._def.startStr)
    setEvent(e)
    setIsModalEditShow(true)
  }
  return (
    <>

      <FullCalendar
        nowIndicator={true}
        selectable={true}
        allDaySlot={true}
        locale="ja"
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
          listPlugin
        ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev, next',
          center: 'title',
          right: 'dayGridMonth,listMonth,listDay'
        }}
        buttonText={{
          prev: '<',
          next: '>',
          prevYear: '<<',
          nextYear: '>>',
          today: '今日',
          month: 'カレンダー',
          week: '週',
          day: '日',
          listMonth: '今月の日程',
          listDay: '今日の日程',
        }}

        events={calendarEvents}
        // eventContent={renderEventContent}
        // dateClick={handleClick}
        eventClick={handleEventClick}
      // weekends={true}
      />
      <CalendarEventModal props={event} isShow={isModalEditShow} setIsOpen={setIsModalEditShow} />
    </>
  )
}

function renderEventContent(eventInfo: any) {
  return (
    <>
      <i>{eventInfo.event.extendedProps.description}</i>
    </>
  )
}

export default Calendar