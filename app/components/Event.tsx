import clsx from "clsx"
import { IEvent } from "../types"
import { useState } from "react"
import { getLighterColor } from "../functions"
import { EditEntryForm } from "./Forms/EditEntryForm"

export function Event ({event}:{event:IEvent}) {

  const [showForm, setShowForm] = useState(false)

  return(
    <>
      {
        showForm &&<EditEntryForm event={event} setShowForm={setShowForm} />
      }
      <div onClick={()=>setShowForm(true)} key={event.name} className={clsx("w-full cursor-pointer border-y border-black p-1", getLighterColor(event.color))}>
        <p>{event.name}</p>
      </div>
    </>
  )
}