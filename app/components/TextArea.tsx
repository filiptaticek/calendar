/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react"

export function TextArea () {

  const [dayInsert, setDayInsert] = useState<string>("")

  const handleDayInsert = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDayInsert(e.target.value)
  }
  
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(dayInsert)
  }

  return(
    <textarea 
      onBlur={handleSubmit} 
      value={dayInsert} 
      onChange={handleDayInsert} 
      onClick={event => event.stopPropagation()}
      placeholder="Write in your note" 
      className="pointer-events-stop pointer-events-auto w-[100%] resize-none bg-transparent text-center"
    />
  )
}