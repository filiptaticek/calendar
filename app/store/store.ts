import { createWrapper } from "next-redux-wrapper"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import combineReducer from "./reducers"
import { fakeEvents } from "../data"

const initalState = {
  events: fakeEvents
}

const middleware = [thunk]

export const store = createStore(combineReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

const makeStore = () => store

export const wrapper = createWrapper(makeStore)
