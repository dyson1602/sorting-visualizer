import {
  BUCKETS,
  CHANGE_BAR_COLOR,
  CHANGE_BAR_HEIGHT,
  CLEAR_BUCKET,
  FINISHED_SORTING,
  IS_SORTING,
  METHOD,
  OFF_INFO,
  ON_INFO,
  SET_COLOR_ARRAY,
  SET_RANDOM_ARRAY,
  SORTED_ARRAY,
  SPEED,
  STYLE,
} from "./actionTypes"

export function setSpeed(value) {
  return { type: SPEED, payload: value }
}

export function setRandomArray(randomArray) {
  return { type: SET_RANDOM_ARRAY, payload: randomArray }
}

export function setSortedArray(sortedArray) {
  return { type: SORTED_ARRAY, payload: sortedArray }
}

export function setOnInfo() {
  return { type: ON_INFO, payload: true }
}

export function setOffInfo() {
  return { type: OFF_INFO, payload: false }
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

export function buildBuckets(bucket, height) {
  return {
    type: BUCKETS,
    bucket: bucket,
    height: height
  }
}

export function clearBuckets(bucket) {
  return { type: CLEAR_BUCKET, bucket: bucket }
}
