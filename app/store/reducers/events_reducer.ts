import { fakeEvents } from "@/app/data"
import { IEvent } from "@/app/types"

export const eventsReducer = (state: IEvent[] = fakeEvents, action: any) => {
  switch (action.type) {
  case "ADD_EVENT": {
    return [action.newevent, ...state]
  }
  case "REMOVE_EVENT": {
    return state.filter((event: IEvent) => event.id !== action.deleteduser_id)
  }
  case "UPDATE_EVENT": {
    return state.map((event: IEvent) => (event.id !== action.updated_user_id ? event : action.newrecord))
  }
  default:
    return state
  }
}
