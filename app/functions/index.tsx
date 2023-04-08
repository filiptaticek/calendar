import { Color } from "@/app/types"

/*export const getLighterColor = (colorName:Color) =>{
switch (colorName) {
  case "yellow":
    return("bg-[#fff27f]")
  case "orange":
    return("bg-[#ff9966]")
  case "red":
    return("bg-[#ff6666]")
  case "pink":
    return("bg-[#ff99cc]")
  case "purple":
    return("bg-[#cc99ff]")
  case "blue":
    return("bg-[#99ccff]")
  case "green":
    return("bg-[#99ff99]")
  case "brown":
    return("bg-[#cc9966]")
  default:
    return("bg-[#fff27f]")
  }
}*/

export const getLighterColor = (colorName:Color) =>{
  switch (colorName) {
  case "yellow":
    return("bg-[#fff9c4]")
  case "orange":
    return("bg-[#ffe0b2]")
  case "red":
    return("bg-[#ffcdd2]")
  case "pink":
    return("bg-[#ffcdd3]")
  case "purple":
    return("bg-[#e1bee7]")
  case "blue":
    return("bg-[#bbdefb]")
  case "green":
    return("bg-[#c8e6c9]")
  case "brown":
    return("bg-[#d7ccc8]")
  default:
    return("bg-[#fff9c4]")
  }
}