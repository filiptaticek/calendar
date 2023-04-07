import { useState } from "react"
import Calendar from "react-calendar"
import { Button } from "./Button"
import { MonthCalendarCell } from "./Cells/MonthCalendarCell"
import { months } from "../data"
import { fakeEvents } from "../data"

export default function MonthCalendar({changeView}: {changeView: (arg: boolean) => void}) {

  const today = new Date()
  const [date, setDate] = useState(today)

  const formatShortWeekday = (locale: string | undefined, date: Date | undefined) => {
    return new Intl.DateTimeFormat("en", { weekday: "long" }).format(date)
  }

  function changeMonth (number:number) {
    const newDate = new Date(date)
    newDate.setMonth(newDate.getMonth() + number)
    setDate(newDate)
  }

  const getTileClasses = ({ date }: { date: Date }) => {

    const commonProperties = "border border-black px-2 h-[120px]"

    if (date.getMonth() === today.getMonth()) {
      return `bg-sky-100 ${commonProperties}`
    } else {
      return `pointer-events-none ${commonProperties} `
    }
  }

  return (
    <>
      <div className="mb-10 flex">
        <p className="w-full text-2xl">{months[date.getMonth()]}</p>
        <Button text="Previous month" onClick={() => changeMonth(-1)}/>
        <Button text="Change view" onClick={changeView}/>
        <Button text="Next month" onClick={() => changeMonth(1)}/>
      </div>
      <div onClick={(event) => event.stopPropagation()}>
        <Calendar 
          className="border border-black text-center"
          value={date} 
          formatShortWeekday={formatShortWeekday}
          tileClassName={getTileClasses}
          tileContent={<MonthCalendarCell events={fakeEvents} />}
          showWeekNumbers={false}
          showNavigation={false}
        />
      </div>
    </>
  )
}