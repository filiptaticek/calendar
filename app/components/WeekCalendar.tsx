import WeekCalendarCell from "./WeekCalendarCell"
import { Button } from "./Button"
import { useState } from "react"

export default function WeekCalendar ({changeView}: {changeView: (arg: boolean) => void}) {

  const [weeksBack, setWeeksBack] = useState<number>(0)
  const today = new Date()
  const monday = new Date(today.setDate(today.getDate() - today.getDay() + 1))
  function getDate (number:number) {return(new Date(monday.getFullYear(), monday.getMonth(), monday.getDate()+number+weeksBack*7).toISOString())}

  const daysObjects = [
    {
      name: "Monday",
      date: getDate(1)
    },
    {
      name: "Tuesday",
      date: getDate(2)
    },
    {
      name: "Wednesday",
      date: getDate(3)
    },
    {
      name: "Thursday",
      date: getDate(4)
    },
    {
      name: "Friday",
      date: getDate(5)
    },
    {
      name: "Saturday",
      date: getDate(6)
    },
    {
      name: "Sunday",
      date: getDate(7)
    },
  ]

  return(
    <>
      <div className="mb-10 flex w-full">
        <p className="w-full text-2xl">Week calendar</p>
        <Button text={"Previous week"} onClick={() => setWeeksBack(weeksBack-1)}/>
        <Button text="Change view" onClick={changeView}/>
        <Button text={"Next week"} onClick={() => setWeeksBack(weeksBack+1)}/>
      </div>
      <div className="flex flex-wrap">

      </div>
      <div className="flex flex-wrap border border-black">
        {daysObjects.map((day) => {
          return(
            <WeekCalendarCell key={day.name} day={day}/>
          )
        })}
      </div>
    </>
  )
}