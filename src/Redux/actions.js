import { SET_RANDOM_ARRAY, SORTED_ARRAY, SORTED, UNSORTED } from "./actionTypes"

export function setRandomArray(randomArray) {
  return { type: SET_RANDOM_ARRAY, payload: randomArray }
}

export function setSortedArray(sortedArray) {
  return { type: SORTED_ARRAY, payload: sortedArray }
}

export function setSorted () {
  return { type: SORTED, payload: true}
}

export function setUnsorted () {
  return { type: UNSORTED, payload: false}
}