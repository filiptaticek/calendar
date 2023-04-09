/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import Calendar from "react-calendar"
import { MonthCalendarCell } from "../Cells/MonthCalendarCell"
import { useSelector } from "react-redux"
import { State } from "../../types"
import { WeekDays } from "../WeekDays"
import { Navigation } from "../Navigation"

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

    const commonProperties = "border-gray-800 border-t-2 border-x font-normal h-[150px]"
    if (date.getMonth() === todayDate.getMonth()) {
      return `${commonProperties}`
    } else {
      return `pointer-events-none ${commonProperties}`
    }
  }

  return (
    <>
      <Navigation changeMonth={changeMonth} todayDate={todayDate} changeView={changeView}/>
      <WeekDays />
      <div onClick={(event) => event.stopPropagation()}>
        <Calendar 
          key={todayDate.getMonth()} // add key prop
          className="border-x border-b-2 border-black text-center font-bold"
          formatDay={(local, date) => date.getDate().toString() }
          value={todayDate} 
          formatShortWeekday={() =>""}
          tileClassName={( date ) => getTileClasses(date)}
          tileContent={({ date }) => <MonthCalendarCell actualMonth={todayDate.getMonth()} date={date} events={events}/>}
          showWeekNumbers={false}
          showNavigation={false}
        />
      </div>
    </>
  )
}