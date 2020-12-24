import { SET_RANDOM_ARRAY, SORTED, SORTED_ARRAY, UNSORTED } from "./actionTypes"

export function setRandomArray(randomArray) {
  return { type: SET_RANDOM_ARRAY, payload: randomArray }
}

export function setSortedArray(sortedArray) {
  return { type: SORTED_ARRAY, payload: sortedArray }
}

export function setSorted() {
  return { type: SORTED, payload: true }
}

export function setUnsorted() {
  return { type: UNSORTED, payload: false }
}

export const changeBarHeight = (newHeight, index) => {
  return {
    type: "CHANGE_BAR_HEIGHT",
    newHeight: newHeight,
    index: index,
  }
}

// export const changeBarColor = (newColor, index) => {
//   return {
//     type: "CHANGE_BAR_COLOR",
//     newColor: newColor,
//     index: index,
//   }
// }
