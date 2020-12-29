// import { changeBarColor, changeBarHeight } from '../Redux/actions'
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function HeapSort(
  unsortedArray,
  arraySize,
  sortSpeed = 0,
  props
) {
  let tempArray = [...unsortedArray]
  await buildMaxHeap(tempArray, sortSpeed, props)

  let lastNode = arraySize - 1
  while (lastNode > 0) {
    await sortMaxHeap(tempArray, lastNode, sortSpeed, props)
    lastNode--
  }

  if (lastNode === 0) {
    props.changeBarColor("blue", 0)
    props.dispatchSetFinishedSorting()
  }
} //HeapSort


async function sortMaxHeap(tempArray, lastNode, sortSpeed, props) {
  let temp = tempArray[lastNode]
  let temp2 = tempArray[0]
  tempArray[lastNode] = tempArray[0]
  tempArray[0] = temp
  props.changeBarColor("yellow", 0)
  props.changeBarColor("yellow", lastNode)
  await sleep(sortSpeed)
  props.changeBarHeight(temp, 0)
  props.changeBarHeight(temp2, lastNode)
  props.changeBarColor("blue", lastNode)
  heapify(tempArray, 0, lastNode, sortSpeed, props)
}


async function buildMaxHeap(tempArray, sortSpeed, props) {
  let currentIndex = Math.floor(tempArray.length / 2)
  while (currentIndex >= 0) {
    await heapify(tempArray, currentIndex, tempArray.length, sortSpeed, props)
      .then(() => currentIndex--)
  }
}


async function heapify(array, start, end, sortSpeed, props) {
  let left = start * 2 + 1
  let right = start * 2 + 2 < end ? start * 2 + 2 : null
  let swap
 
  if (start >= Math.floor(end / 2)) {
    return;
  }
  
  if (right) {
    swap = array[left] > array[right] ? left : right
  } else {
    swap = left
  }
  
  props.changeBarColor("yellow", left)
  props.changeBarColor("yellow", right)
  
  if (array[swap] > array[start]) {
    let temp = array[swap]
    let temp2 = array[start]
    array[swap] = array[start]
    array[start] = temp
    props.changeBarHeight(temp2, swap)
    props.changeBarHeight(temp, start)
    props.changeBarColor("red", swap)
    props.changeBarColor("red", start)
    heapify(array, swap, end, sortSpeed, props)
  }

  props.changeBarColor("red", left)
  props.changeBarColor("red", right)
}

export { HeapSort }