import { daysNames } from "../data"

export function WeekDays () {
  return(
    <div className="flex flex-wrap">
      {daysNames.map((day) => {
        return(
          <p key={day} className="my-2 h-6 w-[14.285714285%] text-center text-xl font-bold">
            {day}
          </p>
        )
      })}
    </div>
  )
}