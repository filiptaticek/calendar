import { useState } from "react"
import Calendar from "react-calendar"
import { Button } from "./Button"
import { MonthCalendarCell } from "./MonthCalendarCell"

export default function MonthCalendar({changeView}: {changeView: (arg: boolean) => void}) {

  const today = new Date()
  const [date, setDate] = useState(today)
  const formatShortWeekday = (locale: string | undefined, date: Date | undefined) => {
    return new Intl.DateTimeFormat("en", { weekday: "long" }).format(date)
  }

  return (
    <>
      <div className="mb-10 flex">
        <p className="w-full text-2xl">Month calendar</p>
        <Button 
          text="Previous month" 
          onClick={() =>{ 
            const newDate = new Date(date)
            newDate.setMonth(newDate.getMonth() - 1)
            setDate(newDate)
          }}
        />
        <Button text="Change view" onClick={changeView}/>
        <Button 
          text="Next month"
          onClick={() =>{ 
            const newDate = new Date(date)
            newDate.setMonth(newDate.getMonth() + 1)
            setDate(newDate)
          }}
        />
      </div>
      <div onClick={(event) => event.stopPropagation()}>
        <Calendar 
          className="border border-black text-center"
          onChange={()=>setDate} value={date} 
          formatShortWeekday={formatShortWeekday}
          tileClassName={({ date, view }) => view === "month" && date.getMonth() === 3 
            ? "bg-sky-200 border border-black" : 
            "border border-black pointer-events-none"
          }
          tileContent={<MonthCalendarCell />}
          showWeekNumbers={false}
          showNavigation={false}
        />
      </div>
    </>
  )
}
/*
  return (
    <>
      <div className="flex w-full">
        <p>{date.toDateString()}</p>
        <Button 
          text={"Previous month"} 
          onClick={() =>{ 
            const newDate = new Date(date)
            newDate.setMonth(newDate.getMonth() - 1)
            setDate(newDate)
          }}
        />
      </div>
      <Calendar 
        className="border border-black text-center"
        onChange={()=>setDate} value={date} 
        tileClassName={"border border-black h-[143px]"}
        tileContent={<CalendarCell />}
        showWeekNumbers={false}
        showNavigation={false}
      />
    </>
  )
}*/