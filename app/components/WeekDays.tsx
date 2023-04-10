import { daysNames } from "../data"
import { useTranslation } from "react-i18next"

export function WeekDays () {
  const { t } = useTranslation()

  return(

    <div className="flex flex-wrap">
      {daysNames.map((day:string) => {
        return(
          <p key={day} className="my-2 hidden h-6 w-[14.285714285%] text-center text-xl font-bold sm:block">
            {t(day)}
          </p>
        )
      })}
    </div>
  )
}