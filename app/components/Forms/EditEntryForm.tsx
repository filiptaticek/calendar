import { UniversalForm } from "./UniversalForm"
import { TextArea } from "../FormParts/TextArea"
import { Description } from "../FormParts/Description"
import { SelectTime } from "../FormParts/SelectTime"
import { SelectColor } from "../FormParts/SelectColor"
import { Button } from "../FormParts/Button"
import { Color, IEvent } from "../../types"
import { useDispatch } from "react-redux"
import { getLighterColor } from "../../functions"
import { useState } from "react"
import { updateSingleEvent, removeSingleEvent } from "@/app/store/actions"

export function EditEntryForm ({event, setShowForm}:{event:IEvent, setShowForm: (value:boolean) => void}) {

  const dispatch = useDispatch()
  const [textArea , setTextArea] = useState<string>(event.name)
  const [color, setColor] = useState<Color>(event.color)
  const [from, setFrom] = useState<string>((event.from).slice(0,16))//(new Date).toISOString().slice(0, 16))
  const [to, setTo] = useState<string>((event.to).slice(0,16))

  function handleSubmit (e:any) {
    e.preventDefault()
    dispatch(updateSingleEvent(event.id,{name:textArea, color, from, to, id:event.id})) //Tady dodělat, přidat funkci updateSingleEvent
    setShowForm(false)
  }

  function handleDelete (e:any) {
    e.preventDefault()
    dispatch(removeSingleEvent(event.id))
  }

  return(
    <UniversalForm 
      background={getLighterColor(color)} 
      header="New entry" 
      onSubmit={handleSubmit} 
      closeForm={() =>{setShowForm(false), setTextArea(event.name), setFrom(event.from), setTo(event.to), setColor(event.color)}}
    >
      <Description text="Content" />
      <TextArea maxLength={10} required value={textArea} onChange={e =>setTextArea(e.target.value)} />
      <Description text="From" />
      <SelectTime required value={from} onChange={(e:any) => setFrom(e.target.value)}  />
      <Description text="To" />
      <SelectTime required value={to} onChange={(e:any) => setTo(e.target.value)}  />
      <Description text="Color" />
      <SelectColor required value={color} onChange={(e:any) =>setColor(e.target.value)} />
      <div className="mt-12 flex w-full">
        <Button type="submit" className="mr-2 bg-sky-500" text="Save" />
        <Button onClick={handleDelete} className="bg-red-500" text="Delete" />
      </div>
    </UniversalForm>
  )
}