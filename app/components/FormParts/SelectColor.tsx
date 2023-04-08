import { inputSameProperties } from "../../data"
import { Color } from "../../types"

export function SelectColor ({value, onChange, required}:{value:Color, onChange:any, required?:boolean}) {

  const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown"]

  return(
    <select required={required&&required} value={value} onChange={onChange} className={inputSameProperties}>
      {colors.map(
        (color) => {
          return(
            <option className="rounded-md border border-black" key={color} value={color}>{color}</option>
          )
        }
      )}
    </select>
  )
}