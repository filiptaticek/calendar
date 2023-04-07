import { inputSameProperties } from "../data"

export function SelectTime () {
  return(
    <input type="datetime-local" className={inputSameProperties} />
  )
}