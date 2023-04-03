"use client"

import { useState } from "react"
import "../styles/globals.css"
import MonthCalendar from "./MonthCalendar"
import WeekCalendar from "./WeekCalendar"

export default function Home() {

  const [monthView, setMonthView] = useState<boolean>(false)

  return (
    <div>
      <div className="flex">
        <p className="w-full text-2xl">Calendar</p>
        <button 
          className="float-right w-[180px] rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => setMonthView(!monthView)}>Change View
        </button>
      </div>
      {monthView?
        <MonthCalendar/>
        :
        <WeekCalendar/>
      }
    </div>
  )
}
