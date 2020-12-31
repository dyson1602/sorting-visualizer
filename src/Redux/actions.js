import {
  CHANGE_BAR_COLOR,
  CHANGE_BAR_HEIGHT,
  FINISHED_SORTING,
  IS_SORTING,
  METHOD,
  SET_COLOR_ARRAY,
  // SET_PIVOT,
  // SET_QUICK_TWO,
  SET_RANDOM_ARRAY,
  // SET_SORTED,
  // SET_SUB_ARRAY,
  // SET_SWAP,
  SORTED_ARRAY,
  STYLE,
} from "./actionTypes"

// export function setPivot(index) {
//   return { type: SET_PIVOT, payload: index }
// }
// export function setSubArray(array) {
//   return { type: SET_SUB_ARRAY, payload: array }
// }

// export function setSwap(array) {
//   return { type: SET_SWAP, payload: array }
// }

// export function setSorted(array) {
//   return { type: SET_SORTED, payload: array }
// }

// export function setQuickTwo(array) {
//   return { type: SET_QUICK_TWO, payload: array }
// }
export function setRandomArray(randomArray) {
  return { type: SET_RANDOM_ARRAY, payload: randomArray }
}

export function setSortedArray(sortedArray) {
  return { type: SORTED_ARRAY, payload: sortedArray }
}

export function setIsSorting() {
  return { type: IS_SORTING, payload: true }
}

export function setFinishedSorting() {
  return { type: FINISHED_SORTING, payload: false }
}

export const changeBarHeight = (newHeight, index) => {
  return {
    type: CHANGE_BAR_HEIGHT,
    newHeight: newHeight,
    index: index,
  }
}
export const changeBarColor = (newColor, index) => {
  return {
    type: CHANGE_BAR_COLOR,
    newColor: newColor,
    index: index,
  }
}

export function swapStyles(styleType) {
  return { type: STYLE, payload: styleType }
}

export function setColorArray(colorArray) {
  return { type: SET_COLOR_ARRAY, payload: colorArray }
}

export function setMethod(methodType) {
  return { type: METHOD, payload: methodType }
}
