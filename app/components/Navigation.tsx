/* eslint-disable @next/next/no-img-element */
import i18n from "@/i18n"
import { arrowSameProperties, monthsNames } from "../data"
import { Button } from "./FormParts/Button"
import { useTranslation } from "react-i18next"

interface INavigation {
  changeMonth: (arg: number) => void
  todayDate: Date
  changeView: (arg: boolean) => void
  backToday: () => void
}


export function Navigation ({changeMonth, todayDate, changeView, backToday}: INavigation) {

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
  
  const { t } = useTranslation()

  return(
    <div className="mb-5 w-full sm:flex">
      <div className="relative top-[4px] flex w-full ">
        <img 
          className={arrowSameProperties}
          alt="Previous month"
          src="/sipka_doleva.png"
          onClick={() => changeMonth(-1)}
        />
        <p className="mx-2 text-2xl font-bold">{t(monthsNames[todayDate.getMonth()])} {todayDate.getFullYear()}</p>
        <img
          className={arrowSameProperties}
          alt="Next month"
          src="/sipka_doprava.png"
          onClick={() => changeMonth(1)}
        />
      </div>
      <Button onClick={changeView}>
        <div className="m-auto flex w-fit">
          {t("switch") as string}
          <img
            className="relative top-[2px] ml-3 h-5"
            alt="Change view"
            src={"switch.png"}
          />
        </div>
      </Button>
      <Button className="mx-2" onClick={backToday}>
        <div className="m-auto flex w-fit">
          {t("today") as string}
          <img
            className="relative top-[2px] ml-3 h-5"
            alt="Change language"
            src="calendar_white.png"
          />
        </div>
      </Button>
      <Button onClick={() => changeLanguage(i18n.language =="cs" ? "en" : "cs")}>
        <div className="m-auto flex w-fit">
          {t(i18n.language =="cs" ? "English" : "Česky") as string}
          <img
            className="ml-3 h-6 w-6"
            alt="Change language"
            src={i18n.language =="en" ? "cs.png" : "en.png"}
          />
        </div>
      </Button>
    </div>
  )
}