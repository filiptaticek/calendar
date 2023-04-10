import { IEvent } from "../../types"
import { Event } from "../Event"
import { useState } from "react"
import { AddEntryForm } from "../Forms/AddEntryForm"
import { useTranslation } from "react-i18next"
import { monthsNames } from "@/app/data"

interface IMonthCalendarCell {
  date: Date, 
  events:IEvent[], 
  actualMonth:number, 
}

export function MonthCalendarCell ({date, events, actualMonth}:IMonthCalendarCell) {

  const dateRightFormat = date.toISOString()
  const [showForm, setShowForm] = useState(false)
  let numberOfEvents = 0
  const {t} = useTranslation()

  return(
    <div className="h-full">
      {
        showForm &&<AddEntryForm day={dateRightFormat} setShowForm={setShowForm} />
      }
      {
        date.getMonth()===actualMonth? /*cells are displayed only if the day is inside of current month*/
          <div>
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
                ) {
                  numberOfEvents++
                  return <Event key={event.name} event={event} />
                }
                else return null
              })
            }
            </div>
            {numberOfEvents>2&&<p className="text-sm text-gray-400">{t("too_many_events")}</p>}
          </div>
          :<p className="mt-8 text-xl text-gray-500">{t(monthsNames[date.getMonth()])}</p>
      }
    </div>
  )
}