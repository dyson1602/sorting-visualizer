import { SET_ARRAY_LENGTH } from "./actionTypes"

export function setArrayLength(length) {
  return { type: SET_ARRAY_LENGTH, payload: length }
}
