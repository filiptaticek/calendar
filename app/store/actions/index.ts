import { IEvent } from "@/app/types"
import { AnyAction } from "redux"

export const addSingleEvent = (newevent: IEvent): AnyAction => {
  return {
    type: "ADD_EVENT",
    newevent: newevent
  }
}

export const removeSingleEvent = (deleteduser_id: number): AnyAction => {
  return {
    type: "REMOVE_EVENT",
    deleteduser_id: deleteduser_id
  }
}

export const updateSingleEvent = (updated_user_id: number, newrecord: IEvent): AnyAction => {
  return {
    type: "UPDATE_EVENT",
    updated_user_id: updated_user_id,
    newrecord: newrecord
  }
}

export const toggleMode = (): AnyAction => {
  return {
    type: "TOGGLE_DARK_MODE"
  }
}
