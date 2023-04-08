/* eslint-disable @next/next/no-img-element */
import WeekCalendarCell from "../Cells/WeekCalendarCell"
import { Button } from "../FormParts/Button"
import { useState } from "react"
import { useSelector } from "react-redux"
import { State } from "../../types"
import { arrowSameProperties, months } from "../../data"

export default function WeekCalendar ({changeView}: {changeView: (arg: boolean) => void}) {

  const [weeksBack, setWeeksBack] = useState<number>(0)
  const { events } = useSelector((state: State) => state)
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
  
  const firstDayOfWeek = new Date(daysObjects[0].date)
  
  return(
    <>
      <div className="mb-10 flex w-full">
        <div className="flex w-full">
          <img 
            className={arrowSameProperties}
            alt="Previous month"
            src="/sipka_doleva.png"
            onClick={() => setWeeksBack(weeksBack-1)}
          />
          <p className="mx-2 text-2xl">{months[firstDayOfWeek.getMonth()]} {firstDayOfWeek.getFullYear()}</p>
          <img
            className={arrowSameProperties}
            alt="Next month"
            src="/sipka_doprava.png"
            onClick={() => setWeeksBack(weeksBack+1)}
          />
        </div>
        <Button className="mx-2" text="Change view" onClick={changeView}/>
      </div>
      <div className="flex flex-wrap border-x border-t border-black">
        {daysObjects.map((day) => {
          return(
            <div key={day.name} className="h-5 w-[14.285714285%] text-center">
              <p>{day.name}</p>
            </div>
          )
        })}
      </div>
      <div className="flex flex-wrap border border-black">
        {daysObjects.map((day) => {
          return(
            <WeekCalendarCell events={events} key={day.name} day={day}/>
          )
        })}
      </div>
    </>
  )
}