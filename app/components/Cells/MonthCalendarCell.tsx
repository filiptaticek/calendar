import { IEvent } from "../../types"
import { Event } from "../Event"
import { useState } from "react"
import { AddEntryForm } from "../Forms/AddEntryForm"
import { useTranslation } from "react-i18next"

export function MonthCalendarCell ({date, events, actualMonth}:{date: Date, events:IEvent[], actualMonth:number }) {

  const dateRightFormat = date.toISOString()
  const [showForm, setShowForm] = useState(false)
  const {t} = useTranslation()

  return(
    <div className="h-full">
      {
        showForm &&<AddEntryForm day={dateRightFormat} setShowForm={setShowForm} />
      }
      {
        date.getMonth()===actualMonth&& /*cells are displayed only if the day is inside of current month*/
          <>
            <p onClick={() =>setShowForm(true)} className="w-full cursor-pointer border-y border-gray-400 p-1 font-normal text-gray-400">
              {t("new_event")}
            </p>
            <div className="h-[65px] overflow-scroll"> { /* component gets all the events */
              events.map((event:IEvent) => {
                const eventFromDate = new Date(event.from)
                const eventToDate = new Date(event.to)
                const [year, month, den] = dateRightFormat.split("-")
                const dayDate = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(den), 0, 0, 0))
                if 
                ( 
                  dayDate >= eventFromDate && dayDate <= eventToDate || /*event is displayed if it is on this day (if one of these three conditions are met*/
                  dayDate.toDateString() === eventFromDate.toDateString() || 
                  dayDate.toDateString() === eventToDate.toDateString() 
                ) 
                  return <Event key={event.name} event={event} />
                else return null
              })
            }
            </div>
          </>
      }
    </div>
  )
}