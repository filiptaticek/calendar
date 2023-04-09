/* eslint-disable @next/next/no-img-element */
import i18n from "@/i18n"
import { arrowSameProperties, monthsNames } from "../data"
import { Button } from "./FormParts/Button"
import { useTranslation } from "react-i18next"

export function Navigation ({changeMonth, todayDate, changeView}: {changeMonth: (arg: number) => void, todayDate: Date, changeView: (arg: boolean) => void}) {

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
  const { t } = useTranslation()

  return(
    <div className="mb-10 flex w-full">
      <div className="flex w-full">
        <img 
          className={arrowSameProperties}
          alt="Previous month"
          src="/sipka_doleva.png"
          onClick={() => changeMonth(-1)}
        />
        <p className="mx-2 text-2xl">{monthsNames[todayDate.getMonth()]} {todayDate.getFullYear()}</p>
        <img
          className={arrowSameProperties}
          alt="Next month"
          src="/sipka_doprava.png"
          onClick={() => changeMonth(1)}
        />
      </div>
      <img  
        className="ml-auto h-10 w-10"
        alt="Change view"
        src={i18n.language =="en" ? "cs.png" : "en.png"}
        onClick={() => changeLanguage(i18n.language =="cs" ? "en" : "cs")}
      />
      <Button text={t("change_view")} onClick={changeView}/>
    </div>
  )
}