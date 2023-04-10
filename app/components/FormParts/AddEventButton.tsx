import { Button } from "./Button"

export const AddEventButton = ({onClick}:{onClick: any }) => {
  return (
    <Button
      onClick={onClick}
      className="w-[90%] rounded-md text-white"
    >+
    </Button>
  )
}