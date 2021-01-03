import { dispatchHandler } from '../HelperFunctions/dispatchHandler'

function HeapSort(props) {
  let tempArray = [...props.randomArray]
  let animationArray = []

  buildMaxHeap(tempArray, animationArray)

  let lastNode = tempArray.length - 1
  while (lastNode > 0) {
    sortMaxHeap(tempArray, lastNode, animationArray)
    lastNode--
  }
  animationArray.push(["color", "blue", 0])

  dispatchHandler(animationArray, props, tempArray)
} //HeapSort

function sortMaxHeap(tempArray, lastNode, animationArray) {
  let temp = tempArray[lastNode]
  let temp2 = tempArray[0]
  tempArray[lastNode] = tempArray[0]
  tempArray[0] = temp

  animationArray.push(["color", "yellow", 0])
  animationArray.push(["color", "yellow", lastNode])
  animationArray.push(["height", temp, 0])
  animationArray.push(["height", temp2, lastNode])
  animationArray.push(["color", "blue", lastNode])

  heapify(tempArray, 0, lastNode, animationArray)
}

function buildMaxHeap(tempArray, animationArray) {
  let currentIndex = Math.floor(tempArray.length / 2)
  while (currentIndex >= 0) {
    heapify(tempArray, currentIndex, tempArray.length, animationArray)
    currentIndex--
  }
}

function heapify(array, start, end, animationArray) {
  let left = start * 2 + 1
  let right = start * 2 + 2 < end ? start * 2 + 2 : null
  let swap

  if (start >= Math.floor(end / 2)) {
    return
  }

  if (right) {
    swap = array[left] > array[right] ? left : right
  } else {
    swap = left
  }

  if (array[swap] > array[start]) {
    let temp = array[swap]
    let temp2 = array[start]
    array[swap] = array[start]
    array[start] = temp

    animationArray.push(["color", "yellow", swap])
    animationArray.push(["color", "yellow", start])
    animationArray.push(["height", temp, start])
    animationArray.push(["height", temp2, swap])
    animationArray.push(["color", "red", swap])
    animationArray.push(["color", "red", start])

    heapify(array, swap, end, animationArray)
  } else {
    animationArray.push(["color", "red", start])
    animationArray.push(["color", "red", left])
  }
}

export { HeapSort }
