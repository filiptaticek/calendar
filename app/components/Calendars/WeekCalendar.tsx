/* eslint-disable @next/next/no-img-element */
import WeekCalendarCell from "../Cells/WeekCalendarCell"
import { useState } from "react"
import { useSelector } from "react-redux"
import { State } from "../../types"
import { WeekDays } from "../WeekDays"
import { Navigation } from "../Navigation"

export default function WeekCalendar ({changeView}: {changeView: (arg: boolean) => void}) {

  const [weeksBack, setWeeksBack] = useState<number>(0)
  const { events } = useSelector((state: State) => state)

  const today = new Date() /* date logic generated mostly by AI */
  const monday = new Date(today.setDate(today.getDate() - today.getDay() + 1))
  function getDate (number:number) {return(new Date(monday.getFullYear(), monday.getMonth(), monday.getDate()+number+weeksBack*7).toISOString())}
  const firstDayOfWeek = new Date(getDate(1))
  
  return(
    <>
      <Navigation changeMonth={(n:number) =>setWeeksBack(prevState => prevState + n)} todayDate={firstDayOfWeek} changeView={changeView}/>
      <WeekDays /> {/* names of the days navigation */}
      <div className="flex flex-wrap border border-black"> {/* calendar cells itself */}
        {[1,2,3,4,5,6,7].map((dayNumber) => { {/* each day has different position in a week, therefore we use this [1,2,3,4,5,6,7] array */}
          return(
            <WeekCalendarCell events={events} key={dayNumber} day={getDate(dayNumber)}/>
          )
        })}
      </div>
    </>
  )
}