import { combineReducers } from "redux"
import { SET_ARRAY_LENGTH } from "./actionTypes"

const defaultState = {
  array: [],
  sortedArray: [],
  arrayLength: 100,
}

function arrayLengthReducer(prevState = defaultState.arrayLength, action) {
  switch (action.type) {
    case SET_ARRAY_LENGTH:
      console.log(action.payload)
      return action.payload
    default:
      return prevState
  }
}

const rootReducer = combineReducers({
  arrayLength: arrayLengthReducer,
})

export default rootReducer
