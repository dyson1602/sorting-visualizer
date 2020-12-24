import { combineReducers } from "redux"
import { SET_RANDOM_ARRAY, SORTED, SORTED_ARRAY, UNSORTED } from "./actionTypes"

const defaultState = {
  randomArray: [],
  sortedArray: [],
  arrayLength: 100,
  sorted: false,
}

function randomArrayReducer(prevState = defaultState.randomArray, action) {
  switch (action.type) {
    case SET_RANDOM_ARRAY:
      console.log("random payload", action.payload)
      return action.payload
    case "CHANGE_BAR_HEIGHT":
      let newArr = [...prevState.randomArray]
      newArr[action.index] = action.newHeight
      console.log("In bar change:", { ...prevState, randomArray: newArr })
      return {
        ...prevState,
        randomArray: newArr,
      }
    default:
      return prevState
  }
}

function sortedArrayReducer(prevState = defaultState.sortedArray, action) {
  switch (action.type) {
    case SORTED_ARRAY:
      console.log("sorted payload: ", action.payload)
      return action.payload
    default:
      return prevState
  }
}

function changeSortedReducer(prevState = defaultState.sorted, action) {
  switch (action.type) {
    case SORTED:
      return action.payload
    case UNSORTED:
      return action.payload
    default:
      return prevState
  }
}

// function changeBarHeightReducer(prevState = defaultState.barHeight, action) {
//   switch (action.type) {
//     case "CHANGE_BAR_HEIGHT":
//       let newArr = [...prevState.array]
//       newArr[action.index] = action.newHeight
//       return {
//         ...prevState,
//         randomArray: newArr,
//       }
//     default:
//       return prevState
//   }
// }

const rootReducer = combineReducers({
  randomArray: randomArrayReducer,
  sortedArray: sortedArrayReducer,
  sorted: changeSortedReducer,
})

export default rootReducer
