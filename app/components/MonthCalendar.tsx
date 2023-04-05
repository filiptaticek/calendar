/*import { useState } from "react"

export default function MonthCalendar({ monthsBack }: { monthsBack: number }) {
  const today = new Date()
  const firstDayOfMonth = new Date(
    Date.UTC(today.getFullYear(), today.getUTCMonth() - monthsBack, 1)
  )

  const [selectedDate, setSelectedDate] = useState("")

  const daysInMonth = new Date(
    firstDayOfMonth.getUTCFullYear(),
    firstDayOfMonth.getUTCMonth() + 1,
    0
  ).getUTCDate()

  const daysObjects: {name:string, date:string}[] = []
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(
      Date.UTC(firstDayOfMonth.getUTCFullYear(), firstDayOfMonth.getUTCMonth(), i)
    ).toISOString()

    const dayName = new Date(date).toLocaleString("default", { weekday: "long" })

    daysObjects.push({ name: dayName, date })
  }

  const weeksInMonth = Math.ceil(daysInMonth / 7)
  const daysInLastWeek = daysInMonth % 7 || 7

  const dayOfWeekLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  return (
    <div className="my-10 border border-black">
      <div className="flex">
        {dayOfWeekLabels.map((label, index) => (
          <div
            key={label}
            className={`${
              index === dayOfWeekLabels.length - 1 ? "w-[14%]" : "w-[14%] border-r border-black"
            } text-center font-bold`}
          >
            {label}
          </div>
        ))}
      </div>
      {[...Array(weeksInMonth)].map((_, weekIndex) => {
        const daysInWeek = weekIndex === weeksInMonth - 1 ? daysInLastWeek : 7
        return (
          <div key={weekIndex} className="flex">
            {[...Array(daysInWeek)].map((_, dayIndex) => {
              const dayObjectIndex = weekIndex * 7 + dayIndex
              const dayObject = daysObjects[dayObjectIndex]
              return (
                <div
                  key={dayObject.date}
                  className={`${
                    dayIndex === daysInWeek - 1 ? "w-[14%]" : "w-[14%] border-r border-black"
                  } h-[150px] px-5 py-2`}
                >
                  <p className="mb-2 border-b border-black text-center font-bold">{dayObject.name}</p>
                  <p className="text-center">{dayObject.date.slice(0, 10)}</p>
                  <textarea
                    value={selectedDate === dayObject.date ? "selected" : ""}
                    onClick={() => setSelectedDate(dayObject.date)}
                  />
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}*/


// App.js 

import { useState } from "react"
import Calendar from "react-calendar"

function CalendarCell ({date}:{date:Date}) {
  return(
    <div className="h-[143px]">
      <p>Some event on this day</p>
    </div>
  )
}

export default function App() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <h1 className='text-center'>React Calendar</h1>
      <div className='border border-black'>
        <Calendar 
          className="border border-black text-center"
          onChange={()=>setDate} value={date} 
          tileClassName={"border border-black h-[143px]"}
          tileContent={<CalendarCell date={date} />}
        />
      </div>
      <p className='text-center'>
        <span className='font-bold'>Selected Date:</span>{" "}
        {date.toDateString()}
      </p>
    </div>
  )
}