/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import Calendar from "react-calendar"
import { MonthCalendarCell } from "../Cells/MonthCalendarCell"
import { useSelector } from "react-redux"
import { State } from "../../types"
import { WeekDays } from "../WeekDays"
import { Navigation } from "../Navigation"
import clsx from "clsx"

export default function MonthCalendar ({changeView}: {changeView: (arg: boolean) => void}) {

  const today = new Date()
  const { events } = useSelector((state: State) => state)
  const [todayDate, setTodayDate] = useState(today)

  function changeMonth (number:number) {
    const newDate = new Date(todayDate)
    newDate.setMonth(newDate.getMonth() + number)
    setTodayDate(newDate)
  }

  const getTileClasses = ({ date }: { date: Date }) => {

    const commonProperties = "cursor-auto border-gray-800 border-t-2 border-x font-normal h-[155px]"
    if (date.getMonth() === todayDate.getMonth()) {
      return clsx(commonProperties, date.toISOString().substring(0,10) === ((new Date().toISOString()).substring(0,10)) && "bg-sky-100")
    } else{
      return `pointer-events-none ${commonProperties}`
    }
  }

  return (
    <>
      <Navigation backToday={() =>setTodayDate(today)} changeMonth={changeMonth} todayDate={todayDate} changeView={changeView}/> {/* buttons */}
      <WeekDays /> {/* names of the days of the week */}
      <div onClick={(event) => event.stopPropagation()}>
        <Calendar /* calendar component from react-calendar library */
          key={todayDate.getMonth()}
          className="border-x border-b-2 border-black text-center font-bold"
          formatDay={(local, date) => date.getDate().toString() }
          value={todayDate} 
          formatShortWeekday={() =>""}
          tileClassName={( date ) => getTileClasses(date)}
          tileContent={({ date }) => 
            <MonthCalendarCell 
              actualMonth={todayDate.getMonth()} 
              date={date} 
              events={events}
            />
          }
          showWeekNumbers={false}
          showNavigation={false}
        />
      </div>
    </>
  )
}