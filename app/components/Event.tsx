import clsx from "clsx"
import { Color, IEvent } from "../types"

export function Event ({event}:{event:IEvent}) {

  const getLighterColor = (colorName:Color) =>{
    switch (colorName) {
    case "yellow":
      return("bg-[#fff27f]")
    case "orange":
      return("bg-[#ff9966]")
    case "red":
      return("bg-[#ff6666]")
    case "pink":
      return("bg-[#ff99cc]")
    case "purple":
      return("bg-[#cc99ff]")
    case "blue":
      return("bg-[#99ccff]")
    case "green":
      return("bg-[#99ff99]")
    case "brown":
      return("bg-[#cc9966]")
    default:
      return("bg-[#fff27f]")
    }
  }

  return(
    <div key={event.name} className={clsx("my-1 w-full rounded-md border border-black p-1", getLighterColor(event.color))}>
      <p>{event.name}</p>
    </div>
  )
}