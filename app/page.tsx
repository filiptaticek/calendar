"use client"
import { useState } from "react"
import "../styles/globals.css"
import WeekCalendar from "./components/Calendars/WeekCalendar"
import MonthCalendar from "./components/Calendars/MonthCalendar"
import { Provider } from "react-redux"
import { store } from "./store/store"

export default function Home() {

  const [monthView, setMonthView] = useState<boolean>(false)

  return (
    <Provider store={store}>
      {monthView?
        <MonthCalendar changeView={()=>setMonthView(false)}/>
        :
        <WeekCalendar changeView={()=>setMonthView(true)}/>
      }
    </Provider>
  )
}
