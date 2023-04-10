/* eslint-disable tailwindcss/no-custom-classname */

import { inputSameProperties } from "@/app/data"
import clsx from "clsx"
import { useTranslation } from "react-i18next"

export function TextArea ({value, onChange, required, maxLength}:{value:string, onChange:(event:React.ChangeEvent<HTMLTextAreaElement>)=>void, required?:boolean, maxLength?:number}) {

  const { t } = useTranslation()

  return(
    <textarea 
      maxLength={maxLength}
      autoFocus
      value={value} 
      required={required&&required}
      onChange={onChange} 
      onClick={(event) => event.stopPropagation()}
      placeholder={t("new_event...") as string} 
      className={clsx("pointer-events-stop pointer-events-auto h-[80px] w-[100%] resize-none rounded-md bg-transparent placeholder:text-gray-300",inputSameProperties)}
    />
  )
}