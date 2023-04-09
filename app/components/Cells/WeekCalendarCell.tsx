/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { IEvent } from "../../types"
import { Event } from "../Event"
import { useState } from "react"
import { AddEntryForm } from "../Forms/AddEntryForm"
import { useTranslation } from "react-i18next"

export default function WeekCalendarCell ({day, events}:{events:IEvent[], day:string}) {

  const [showForm, setShowForm] = useState(false)
  const {t} = useTranslation()

  return(
    <div className="h-[300px] w-[14.2857142857%] border border-black pb-4 pt-2">
      {
        showForm &&
        <AddEntryForm day={day} setShowForm={setShowForm} />
      }
      <div className="mt-[-9px] h-[25px] text-center">
        {(new Date(day)).getUTCDate()}
      </div>
      <p 
        onClick={() =>setShowForm(true)} 
        className="w-full cursor-pointer border-y border-gray-400 p-1 text-center text-gray-400">
        {t("new_event")}
      </p>
      {events.map((event:IEvent) => {
        const eventFromDate = new Date(event.from)
        const eventToDate = new Date(event.to)
        const [year, month, den] = day.split("-")
        const dayDate = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(den), 0, 0, 0))
        if (dayDate >= eventFromDate && dayDate <= eventToDate) {
          return <Event key={event.name} event={event} />
        }
        else if (dayDate.toDateString() === eventFromDate.toDateString() || dayDate.toDateString() === eventToDate.toDateString()) {
          return <Event key={event.name} event={event} />
        }
        return null
      })
      }
    </div>
  )
}