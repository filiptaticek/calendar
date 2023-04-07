/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react"

export function TextArea ({onClick, onBlur}: {onClick?: () => void, onBlur?: () => void}) {

  const [dayInsert, setDayInsert] = useState<string>("")

  const handleDayInsert = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDayInsert(e.target.value)
  }
  
  const handleSubmit = (e: any) => {
    e.preventDefault()
    onBlur?onBlur():null
    console.log(dayInsert)
  }

  return(
    <textarea 
      onBlur={handleSubmit} 
      value={dayInsert} 
      onChange={handleDayInsert} 
      onClick={event => {
        onClick?onClick():null
        event.stopPropagation()
      }
      }
      placeholder="New event..." 
      className="pointer-events-stop pointer-events-auto h-[80px] w-[100%] resize-none rounded-md border border-black bg-transparent p-2"
    />
  )
}