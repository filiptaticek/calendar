import { Color } from "@/app/types"

export const getLighterColor = (colorName: Color) => {
  const colors = ["red", "orange", "yellow", "green", "blue", "green", "purple", "pink","brown"]
  const colorCodes = 
  [
    "bg-red-600 hover:bg-red-500",
    "bg-orange-600 hover:bg-orange-500",
    "bg-yellow-500 hover:bg-yellow-400",
    "bg-green-600 hover:bg-green-500",
    "bg-blue-600 hover:bg-blue-500",
    "bg-green-500 hover:bg-green-400",
    "bg-purple-600 hover:bg-purple-500",
    "bg-fuchsia-400 hover:bg-fuchsia-300",
    "bg-yellow-700 hover:bg-yellow-600"
  ]
  const colorIndex = colors.indexOf(colorName)
  return colorIndex !== -1 ? colorCodes[colorIndex] : "bg-red-400"
}