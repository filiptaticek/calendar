"use client"
import { useState } from "react"
import "../styles/globals.css"
import WeekCalendar from "./components/Calendars/WeekCalendar"
import MonthCalendar from "./components/Calendars/MonthCalendar"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { I18nextProvider } from "react-i18next"
import i18n from "../i18n"

export default function Home() {

  const [monthView, setMonthView] = useState<boolean>(false)

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        {monthView?
          <MonthCalendar changeView={()=>setMonthView(false)}/>
          :
          <WeekCalendar changeView={()=>setMonthView(true)}/>
        }
      </Provider>
    </I18nextProvider>
  )
}
