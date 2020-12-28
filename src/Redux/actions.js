import {
  CHANGE_BAR_COLOR,
  CHANGE_BAR_HEIGHT,
  FINISHED_SORTING,
  SET_COLOR_ARRAY,
  SET_RANDOM_ARRAY,
  IS_SORTING,
  SORTED_ARRAY,
  STYLE,
} from "./actionTypes"

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
