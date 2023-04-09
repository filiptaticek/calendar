/* eslint-disable tailwindcss/no-custom-classname */

import { inputSameProperties } from "@/app/data"
import clsx from "clsx"

export function TextArea ({value, onChange, required, maxLength}:{value:string, onChange:(event:React.ChangeEvent<HTMLTextAreaElement>)=>void, required?:boolean, maxLength?:number}) {

  return(
    <textarea 
      maxLength={maxLength}
      autoFocus
      value={value} 
      required={required&&required}
      onChange={onChange} 
      onClick={(event) => event.stopPropagation()}
      placeholder="New event..." 
      className={clsx("pointer-events-stop pointer-events-auto h-[80px] w-[100%] resize-none rounded-md bg-transparent placeholder:text-gray-300",inputSameProperties)}
    />
  )
}