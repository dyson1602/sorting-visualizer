import { combineReducers } from "redux"
import {
  CHANGE_BAR_COLOR,
  CHANGE_BAR_HEIGHT,
  FINISHED_SORTING,
  IS_SORTING,
  METHOD,
  SET_COLOR_ARRAY,
  SET_PIVOT,
  SET_QUICK_TWO,
  SET_RANDOM_ARRAY,
  SET_SORTED,
  SET_SUB_ARRAY,
  SET_SWAP,
  SORTED_ARRAY,
  STYLE,
} from "./actionTypes"

const defaultState = {
  randomArray: [],
  sortedArray: [],
  colorArray: [],
  arrayLength: 100,
  isSorting: false,
  style: "bars",
  arrayColor: "red",
  method: null,
  pivot: null,
  subArray: [],
  swap: [],
  sorted: [],
  quickTwo: [],
}

function randomArrayReducer(prevState = defaultState.randomArray, action) {
  switch (action.type) {
    case SET_RANDOM_ARRAY:
      return action.payload
    case CHANGE_BAR_HEIGHT:
      let newArr = [...prevState]
      newArr[action.index] = action.newHeight
      return newArr
    case SET_SUB_ARRAY:
      return action.payload
    default:
      return prevState
  }
}

function colorArrayReducer(prevState = defaultState.colorArray, action) {
  switch (action.type) {
    case SET_COLOR_ARRAY:
      return action.payload
    case CHANGE_BAR_COLOR:
      let newArray = [...prevState]
      newArray[action.index] = action.newColor
      return newArray
    default:
      return prevState
  }
}

function sortedArrayReducer(prevState = defaultState.sortedArray, action) {
  switch (action.type) {
    case SORTED_ARRAY:
      return action.payload
    default:
      return prevState
  }
}

function changeSortedReducer(prevState = defaultState.isSorting, action) {
  switch (action.type) {
    case IS_SORTING:
      return action.payload
    case FINISHED_SORTING:
      return action.payload
    default:
      return prevState
  }
}

function changeStyleReducer(prevState = defaultState.style, action) {
  switch (action.type) {
    case STYLE:
      return action.payload
    default:
      return prevState
  }
}

function changeMethodReducer(prevState = defaultState.method, action) {
  switch (action.type) {
    case METHOD:
      return action.payload
    default:
      return prevState
  }
}
function changePivotReducer(prevState = defaultState.pivot, action) {
  switch (action.type) {
    case SET_PIVOT:
      return action.payload
    default:
      return prevState
  }
}
// function changeSubArrayReducer(prevState = defaultState.subArray, action) {
//   switch (action.type) {
//     case SET_SUB_ARRAY:
//       return action.payload
//     default:
//       return prevState
//   }
// }
function changeSwapReducer(prevState = defaultState.swap, action) {
  switch (action.type) {
    case SET_SWAP:
      if (action.payload.length) {
        return [...prevState].concat(action.payload)
      } else {
        return []
      }
    default:
      return prevState
  }
}
function changeSortedArrayReducer(prevState = defaultState.sorted, action) {
  switch (action.type) {
    case SET_SORTED:
      if (action.payload.length) {
        return [...prevState].concat(action.payload)
      } else {
        return []
      }
    default:
      return prevState
  }
}
function changeQuickTwoReducer(prevState = defaultState.quickTwo, action) {
  switch (action.type) {
    case SET_QUICK_TWO:
      return action.payload
    default:
      return prevState
  }
}

const rootReducer = combineReducers({
  randomArray: randomArrayReducer,
  sortedArray: sortedArrayReducer,
  isSorting: changeSortedReducer,
  style: changeStyleReducer,
  colorArray: colorArrayReducer,
  method: changeMethodReducer,
  pivot: changePivotReducer,
  // subArray: changeSubArrayReducer,
  swap: changeSwapReducer,
  sorted: changeSortedArrayReducer,
  quickTwo: changeQuickTwoReducer,
})

export default rootReducer
