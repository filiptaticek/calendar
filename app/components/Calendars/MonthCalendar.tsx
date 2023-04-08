/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import Calendar from "react-calendar"
import { Button } from "../FormParts/Button"
import { MonthCalendarCell } from "../Cells/MonthCalendarCell"
import { arrowSameProperties, months } from "../../data"
import { useSelector } from "react-redux"
import { State } from "../../types"

export default function MonthCalendar ({changeView}: {changeView: (arg: boolean) => void}) {

  const today = new Date()
  const { events } = useSelector((state: State) => state)
  const [todayDate, setTodayDate] = useState(today)

  const formatShortWeekday = (locale: string | undefined, date: Date | undefined) => {
    return new Intl.DateTimeFormat("en", { weekday: "long" }).format(date)
  }

  function changeMonth (number:number) {
    const newDate = new Date(todayDate)
    newDate.setMonth(newDate.getMonth() + number)
    setTodayDate(newDate)
  }

  const getTileClasses = ({ date }: { date: Date }) => {

    const commonProperties = "border border-black h-[150px]"
    if (date.getMonth() === today.getMonth()) {
      return `${commonProperties}`
    } else {
      return `pointer-events-none ${commonProperties} `
    }
  }

  return (
    <>
      <div className="mb-10 flex w-full">
        <div className="flex w-full">
          <img 
            className={arrowSameProperties}
            alt="Previous month"
            src="/sipka_doleva.png"
            onClick={() => changeMonth(-1)}
          />
          <p className="mx-2 text-2xl">{months[todayDate.getMonth()]} {todayDate.getFullYear()}</p>
          <img
            className={arrowSameProperties}
            alt="Next month"
            src="/sipka_doprava.png"
            onClick={() => changeMonth(1)}
          />
        </div>
        <Button className="" text="Change view" onClick={changeView}/>
      </div>
      <div onClick={(event) => event.stopPropagation()}>
        <Calendar 
          key={todayDate.getMonth()} // add key prop
          className="border border-black text-center"
          formatDay={(locale, date) => date.getDate().toString()}
          value={todayDate} 
          formatShortWeekday={formatShortWeekday}
          tileClassName={getTileClasses}
          tileContent={({ date }) => <MonthCalendarCell actualMonth={todayDate.getMonth()} date={date} events={events}/>}
          showWeekNumbers={false}
          showNavigation={false}
        />
      </div>
    </>
  )
}