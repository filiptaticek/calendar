"use client"
import { useState } from "react"
import "../styles/globals.css"
import WeekCalendar from "./components/WeekCalendar"
import MonthCalendar from "./components/MonthCalendar"

export default function Home() {

  const [monthView, setMonthView] = useState<boolean>(false)

  return (
    <>
      {monthView?
        <MonthCalendar changeView={()=>setMonthView(false)}/>
        :
        <WeekCalendar changeView={()=>setMonthView(true)}/>
      }
    </>
  )
}
