import { combineReducers } from "redux"
import {
  CHANGE_BAR_COLOR,
  CHANGE_BAR_HEIGHT,
  SET_COLOR_ARRAY,
  SET_RANDOM_ARRAY,
  SORTED,
  SORTED_ARRAY,
  STYLE,
  UNSORTED,
} from "./actionTypes"

const defaultState = {
  randomArray: [],
  sortedArray: [],
  colorArray: [],
  arrayLength: 100,
  sorted: false,
  style: "bars",
  arrayColor: "red",
}

function randomArrayReducer(prevState = defaultState.randomArray, action) {
  switch (action.type) {
    case SET_RANDOM_ARRAY:
      return action.payload
    case CHANGE_BAR_HEIGHT:
      let newArr = [...prevState]
      newArr[action.index] = action.newHeight
      return newArr
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

function changeStyleReducer(prevState = defaultState.style, action) {
  switch (action.type) {
    case STYLE:
      return action.payload
    default:
      return prevState
  }
}

const rootReducer = combineReducers({
  randomArray: randomArrayReducer,
  sortedArray: sortedArrayReducer,
  sorted: changeSortedReducer,
  style: changeStyleReducer,
  colorArray: colorArrayReducer,
})

export default rootReducer
