import { IEvent } from "../../types"
import { Event } from "../Event"
import { useState } from "react"
import { AddEntryForm } from "../Forms/AddEntryForm"

export function MonthCalendarCell ({date, events, actualMonth}:{date: Date, events:IEvent[], actualMonth:number }) {

  const dateRightFormat = date.toISOString()
  const [showForm, setShowForm] = useState(false)

  return(
    <div className="h-full">
      {
        showForm &&<AddEntryForm day={{name:"Whatever", date:dateRightFormat}} setShowForm={setShowForm} />
      }
      {
        date.getMonth()===actualMonth&& //month elements are displayed only if the day is inside of it
          <>
            <p onClick={() =>setShowForm(true)} className="w-full cursor-pointer border-y border-gray-400 p-1 text-gray-400">
              Add a new event
            </p>
            {
              events.map((event:IEvent) => {
                const eventFromDate = new Date(event.from)
                const eventToDate = new Date(event.to)
                const [year, month, den] = dateRightFormat.split("-")
                const dayDate = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(den), 0, 0, 0))
                if 
                ( 
                  dayDate >= eventFromDate && dayDate <= eventToDate ||
                  dayDate.toDateString() === eventFromDate.toDateString() || 
                  dayDate.toDateString() === eventToDate.toDateString() 
                ) 
                  return <Event key={event.name} event={event} />
                else return null
              })
            }
          </>
      }
    </div>
  )
}