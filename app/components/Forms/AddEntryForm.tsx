import { getLighterColor } from "../../functions"
import { UniversalForm } from "./UniversalForm"
import { TextArea } from "../FormParts/TextArea"
import { Description } from "../FormParts/Description"
import { SelectTime } from "../FormParts/SelectTime"
import { SelectColor } from "../FormParts/SelectColor"
import { Button } from "../FormParts/Button"
import { Color } from "../../types"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addSingleEvent } from "@/app/store/actions"

export function AddEntryForm ({day, setShowForm}:{day: string, setShowForm: (value:boolean) => void}) {

  const dispatch = useDispatch()
  const [textArea , setTextArea] = useState<string>("")
  const [color, setColor] = useState<Color>("blue" as Color)
  const todayShort = (day).toString().slice(0, 11)
  const [from, setFrom] = useState<string>(`${todayShort}08:00`)
  const [to, setTo] = useState<string>(`${todayShort}09:00`)

  function handleSubmit (event:any) {
    event.preventDefault()
    const newEvent = {name:textArea, color, from, to, id:Math.round(Math.random() * 1000)}
    dispatch(addSingleEvent(newEvent))
    setShowForm(false)
  }

  return(
    <UniversalForm background={getLighterColor(color)} header="New entry" onSubmit={handleSubmit} closeForm={() =>{setShowForm(false),setTextArea(""),setFrom(""),setTo(""),setColor("blue")}}>
      <Description text="Content" />
      <TextArea maxLength={10} required value={textArea} onChange={e =>setTextArea(e.target.value)} />
      <Description text="From" />
      <SelectTime required value={from} onChange={(e:any) => setFrom(e.target.value)}  />
      <Description text="To" />
      <SelectTime required value={to} onChange={(e:any) => setTo(e.target.value)}  />
      <Description text="Color" />
      <SelectColor required value={color} onChange={(e:any) =>setColor(e.target.value)} />
      <div className="mt-12 flex w-full">
        <Button type="submit" className="m-auto bg-sky-500" text="Save" />
      </div>
    </UniversalForm>
  )
}