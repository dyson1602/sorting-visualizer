import { dispatchHandler } from '../HelperFunctions/dispatchHandler'

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
    // animationArray.push(["color", "blue", start])
    return
  }
  let pivot = start,
    left = start + 1,
    right = end

  animationArray.push(["color", "purple", pivot])
  // animationArray.push(["color", "orange", left])
  // animationArray.push(["color", "orange", right])

  while (right >= left) {
    if (array[right] < array[pivot] && array[left] > array[pivot]) {
      animationArray.push(["color", "yellow", left])
      animationArray.push(["color", "yellow", right])
      let temp = array[right]
      animationArray.push(["height", array[left], right])
      animationArray.push(["height", temp, left])
      array[right] = array[left]
      array[left] = temp
      animationArray.push(["color", "red", left])
      animationArray.push(["color", "red", right])
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

    animationArray.push(["color", "red", pivot])
    animationArray.push(["color", "red", right])
  }
  // animationArray.push(["color", "red", left])
  // animationArray.push(["color", "red", right])
  quickSortHelper(array, start, right - 1, animationArray)
  quickSortHelper(array, right + 1, end, animationArray)
}

function markSorted(array, animationArray) {
  for (let i = 0; i < array.length; i++) {
    animationArray.push(["color", "blue", i])
  }
}
