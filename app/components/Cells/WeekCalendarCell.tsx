/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { IEvent } from "../../types"
import { Event } from "../Event"
import { useState } from "react"
import { AddEntryForm } from "../Forms/AddEntryForm"

export default function WeekCalendarCell ({day, events}:{events:IEvent[], day:{name:string, date:string}}) {

  const [showForm, setShowForm] = useState(false)

  return(
    <div className="h-[300px] w-[14.2857142857%] border border-black pb-4 pt-2">
      {
        showForm &&
        <AddEntryForm day={day} setShowForm={setShowForm} />
      }
      <p className="text-center">
        {(new Date(day.date)).getUTCDate()}
      </p>
      <p 
        onClick={() =>setShowForm(true)} 
        className="w-full cursor-pointer border-y border-gray-400 p-1 text-gray-400">
          Add a new event
      </p>
      {events.map((event:IEvent) => {
        const eventFromDate = new Date(event.from)
        const eventToDate = new Date(event.to)
        const [year, month, den] = day.date.split("-")
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