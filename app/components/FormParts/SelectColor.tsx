import { inputSameProperties } from "../../data"
import { Color } from "../../types"
import { useTranslation } from "react-i18next"
import { colors } from "../../data"

export function SelectColor ({value, onChange, required}:{value:Color, onChange:any, required?:boolean}) {

  const {t} = useTranslation()

  return(
    <select required={required&&required} value={value} onChange={onChange} className={inputSameProperties}>
      {colors.map(
        (color) => {
          return(
            <option className="rounded-md border border-black" 
              key={color} 
              value={color}>{t(color)}
            </option>
          )
        }
      )}
    </select>
  )
}