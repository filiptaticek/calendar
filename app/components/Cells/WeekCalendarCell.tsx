/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { IEvent } from "../../types"
import { Event } from "../Event"
import { useState } from "react"
import { UniversalForm } from "../UniversalForm"
import { TextArea } from "../TextArea"
import { Description } from "../Description"
import { SelectColor } from "../SelectColor"
import { SelectTime } from "../SelectTime"
import { Button } from "../Button"

export default function WeekCalendarCell ({day, events}:{events:IEvent[], day:{name:string, date:string}}) {

  const [showForm, setShowForm] = useState(false)

  return(
    <div className="w-[14.2857142857%] border border-black px-2 pb-4 pt-2">
      {
        showForm &&
        <UniversalForm header="New entry" onSubmit={()=>console.log("")} closeForm={() =>setShowForm(false)}>
          <Description text="Content" />
          <TextArea />
          <Description text="From" />
          <SelectTime />
          <Description text="To" />
          <SelectTime />
          <Description text="Color" />
          <SelectColor />
          <div className="mt-4 flex w-full">
            <Button onClick={console.log("Saved")} className="mr-2 bg-sky-500" text="Save" />
            <Button onClick={console.log("Deleted")} className="bg-red-500" text="Delete" />
          </div>
        </UniversalForm>
      }
      <p className="text-center">{(day.date).slice(0,10)}</p>
      <p onClick={() =>setShowForm(true)} className="my-1 w-full cursor-pointer rounded-md border border-gray-400 p-1 text-gray-400">Add a new event</p>
      {events.map((event:IEvent) => {
        if (event.from.slice(0,10) !== day.date.slice(0,10)) {
          return null
        }
        return(
          <Event key={event.name} event={event} />
        )
      })
      }
    </div>
  )
}