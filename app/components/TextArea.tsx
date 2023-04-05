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
      placeholder="Write in your note" 
      className="w-[100%] resize-none text-center">
    </textarea>
  )
}