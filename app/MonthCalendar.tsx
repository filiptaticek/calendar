export default function MonthCalendar () {

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


  return(
    <div className="my-10 flex flex-wrap border border-black">
      {daysOfWeek.map((day) => {
        return(
          <div key={day} className="w-[14.285714285%] border border-black">
            <p className="text-center">{day}</p>
          </div>
        )
      })}
    </div>
  )
}