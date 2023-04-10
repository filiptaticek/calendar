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
    <div className="mb-5 flex w-full">
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
      <Button className="mr-2" onClick={changeView}>{t("change_view") as string}</Button>
      <Button onClick={() => changeLanguage(i18n.language =="cs" ? "en" : "cs")}>
        <div className="m-auto flex w-fit">
          {t(i18n.language =="cs" ? "English" : "Česky") as string}
          <img
            className="ml-2 h-6 w-6"
            alt="Change view"
            src={i18n.language =="en" ? "cs.png" : "en.png"}
          />
        </div>
      </Button>
    </div>
  )
}