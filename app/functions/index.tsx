import { Color } from "@/app/types"

export const getLighterColor = (colorName: Color) => {
  const colors = ["red", "orange", "yellow", "green", "blue", "green", "purple", "pink","brown"]
  const colorCodes = 
  [
    "bg-red-600",
    "bg-orange-600",
    "bg-yellow-500",
    "bg-green-600",
    "bg-blue-600",
    "bg-green-500",
    "bg-purple-600",
    "bg-fuchsia-400",
    "bg-yellow-700"
  ]
  const colorIndex = colors.indexOf(colorName)
  return colorIndex !== -1 ? colorCodes[colorIndex] : "bg-red-400"
}