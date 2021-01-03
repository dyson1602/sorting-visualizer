import { dispatchHandler } from '../HelperFunctions/dispatchHandler'
import { SORTED_COLOR, INITIAL_COLOR, PIVOT_COLOR, COMPARE_COLOR } from '../HelperFunctions/colors'

export function QuickSort(props) {
  let array = [...props.randomArray]
  let animationArray = []

  quickSortHelper(array, 0, array.length - 1, animationArray)
  markSorted(array, animationArray)
  dispatchHandler(animationArray, props)

  return array
}

function quickSortHelper(array, start, end, animationArray) {
  if (start >= end) {
    animationArray.push(["color", SORTED_COLOR, start])
    return
  }
  let pivot = start,
    left = start + 1,
    right = end

  animationArray.push(["color", PIVOT_COLOR, pivot])
  // animationArray.push(["color", "orange", left])
  // animationArray.push(["color", "orange", right])

  while (right >= left) {
    if (array[right] < array[pivot] && array[left] > array[pivot]) {
      animationArray.push(["color", COMPARE_COLOR, left])
      animationArray.push(["color", COMPARE_COLOR, right])
      let temp = array[right]
      animationArray.push(["height", array[left], right])
      animationArray.push(["height", temp, left])
      array[right] = array[left]
      array[left] = temp
      animationArray.push(["color", INITIAL_COLOR, left])
      animationArray.push(["color", INITIAL_COLOR, right])
    }
    if (array[right] >= array[pivot]) {
      right--
    }
    if (array[left] <= array[pivot]) {
      left++
    }
  }

  if (pivot !== right) {
    let temp = array[right]
    animationArray.push(["height", array[pivot], right])
    animationArray.push(["height", temp, pivot])

    array[right] = array[pivot]
    array[pivot] = temp

    animationArray.push(["color", INITIAL_COLOR, pivot])
    animationArray.push(["color", INITIAL_COLOR, right])
  }
  // animationArray.push(["color", INITIAL_COLOR, left])
  // animationArray.push(["color", INITIAL_COLOR, right])
  quickSortHelper(array, start, right - 1, animationArray)
  quickSortHelper(array, right + 1, end, animationArray)
}

function markSorted(array, animationArray) {
  for (let i = 0; i < array.length; i++) {
    animationArray.push(["color", SORTED_COLOR, i])
  }
}
