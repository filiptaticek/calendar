import { combineReducers } from "redux"

import { darkModeReducer } from "./dark_mode_reducer"
import { eventsReducer } from "./events_reducer"

export default combineReducers({
  events: eventsReducer,
  mode: darkModeReducer
})
