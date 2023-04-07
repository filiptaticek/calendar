import { inputSameProperties } from "../data"

export function SelectColor () {

  const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray"]

  return(
    <select className={inputSameProperties}>
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