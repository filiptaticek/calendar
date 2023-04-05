
import { TextArea } from "./TextArea"

export default function WeekCalendar ({weeksBack}:{weeksBack:number}) {

  const today = new Date()
  const monday = new Date(today.setDate(today.getDate() - today.getDay() + 1))
  function getDate (number:number) {return(new Date(monday.getFullYear(), monday.getMonth(), monday.getDate()+number+weeksBack*7).toISOString())}

  const daysObjects = [
    {
      name: "Monday",
      date: getDate(1)
    },
    {
      name: "Tuesday",
      date: getDate(2)
    },
    {
      name: "Wednesday",
      date: getDate(3)
    },
    {
      name: "Thursday",
      date: getDate(4)
    },
    {
      name: "Friday",
      date: getDate(5)
    },
    {
      name: "Saturday",
      date: getDate(6)
    },
    {
      name: "Sunday",
      date: getDate(7)
    },
  ]

  return(
    <div className="my-10 flex flex-wrap border border-black">
      {daysObjects.map((day) => {
        return(
          <div key={day.name} className="h-[150px] w-[14.285714285%] border border-black px-5 py-2">
            <p className="mb-2 border-b border-black text-center font-bold">{day.name}</p>
            <p className="text-center">{(day.date).slice(0,10)}</p>
            <TextArea/>
          </div>
        )
      })}
    </div>
  )
}