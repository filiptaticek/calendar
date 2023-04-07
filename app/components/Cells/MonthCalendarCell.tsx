import { TextArea } from "../TextArea"
import { IEvent } from "../../types"
import { Event } from "../Event"

export function MonthCalendarCell ({events}:{events:IEvent[]}) {
  return(
    <div className="h-full">
      <div className="my-4 rounded-md border border-gray-400">
        <TextArea />
        <div className="flex">
          <div className="m-auto mb-5 flex">
            <p className="mx-2 text-gray-400">to</p>
          </div>
        </div>
      </div>
      {events.map((event:IEvent) => {
        return(
          <Event key={event.name} event={event} />
        )
      })
      }
    </div>
  )
}