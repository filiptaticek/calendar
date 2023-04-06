import { TextArea } from "./TextArea"

export default function WeekCalendarCell ({day}:{day:{name:string, date:string}}) {
  return(
    <div key={day.name} className="h-[150px] w-[14.285714285%] border border-black px-5 py-2">
      <p className="text-center">{(day.date).slice(0,10)}</p>
      <TextArea/>
    </div>
  )
}