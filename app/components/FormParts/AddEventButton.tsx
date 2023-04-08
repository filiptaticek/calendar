import { Button } from "./Button"

export const AddEventButton = ({onClick}:{onClick: any }) => {
  return (
    <Button
      onClick={onClick}
      text="+"
      className="w-[90%] rounded-md bg-sky-500 text-white"
    />
  )
}