"use client"

import { useState } from "react"
import "../styles/globals.css"
import WeekCalendar from "./components/WeekCalendar"
import MonthCalendar from "./components/MonthCalendar"

export default function Home() {

  const [monthView, setMonthView] = useState<boolean>(false)
  const [weeksBack, setWeeksBack] = useState<number>(0)
  const [monthsBack, setMonthsBack] = useState<number>(0)

  const Button = ({onClick, text}:{onClick:any, text:string})=>{
    return(
      <button 
        className="float-right mx-2 w-[250px] rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={onClick}>{text}
      </button>
    )
  }

  const rightWord=  monthView?"month":"week"
  return (


    <div>
      <div className="flex">
        <p className="w-full text-2xl">Calendar</p>
        <Button text={"Previous "+rightWord} onClick={() => monthView? setMonthsBack(monthsBack+1) : setWeeksBack(weeksBack-1)}/>
        <Button text="Change view" onClick={() => setMonthView(!monthView)}/>
        <Button text={"Next "+rightWord} onClick={() => monthView? setMonthsBack(monthsBack-1) : setWeeksBack(weeksBack+1)}/>
      </div>
      {monthView?
        <MonthCalendar monthsBack={monthsBack}/>
        :
        <WeekCalendar weeksBack={weeksBack}/>
      }
    </div>
  )
}
