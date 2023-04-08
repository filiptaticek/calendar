import { inputSameProperties } from "../../data"

export function SelectTime ({value, onChange, required}:{value:string, onChange:any, required?:boolean}) {
  return(
    <input required={required&&required} value={value} onChange={onChange} type="datetime-local" className={inputSameProperties} />
  )
}