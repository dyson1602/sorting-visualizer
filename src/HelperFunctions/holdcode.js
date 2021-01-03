// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// export const BubbleSort = async (
//   array,
//   arraySize,
//   changeBarHeight,
//   changeBarColor,
//   sortSpeed = 10,
//   arrayColor = "red",
//   selectedColor = "yellow",
//   sortedColor = "blue",
//   finished
// ) => {
//   let localArray = [...array]
//   for (let i = 0; i < arraySize; i++) {
//     let isSorted = true
//     for (let j = 0; j < arraySize - i; j++) {
//       changeBarColor(selectedColor, j)
//       changeBarColor(selectedColor, j + 1)
//       await sleep(sortSpeed)
//       if (localArray[j] > localArray[j + 1]) {
//         let temp = localArray[j]
//         let temp2 = localArray[j + 1]
//         localArray[j] = temp2
//         localArray[j + 1] = temp
//         await sleep(sortSpeed)
//         changeBarHeight(temp2, j)
//         changeBarHeight(temp, j + 1)
//         isSorted = false
//       }
//       changeBarColor(arrayColor, j)
//       changeBarColor(arrayColor, j + 1)
//     }
//     changeBarColor(sortedColor, arraySize - 1 - i)
//     changeBarColor(sortedColor, arraySize - i)
//     if (isSorted === true) {
//       for (let k = 0; k < i; k++) {
//         changeBarColor(sortedColor, k)
//       }
//       break
//     }
//   }
//   finished()
// }

// // import { changeBarColor, changeBarHeight } from '../Redux/actions'
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// async function HeapSort(
//   unsortedArray,
//   arraySize,
//   sortSpeed = 0,
//   props
// ) {
//   let tempArray = [...unsortedArray]
//   await buildMaxHeap(tempArray, sortSpeed, props)

//   let lastNode = arraySize - 1
//   while (lastNode > 0) {
//     await sortMaxHeap(tempArray, lastNode, sortSpeed, props)
//     lastNode--
//   }

//   if (lastNode === 0) {
//     props.changeBarColor("blue", 0)
//     props.dispatchSetFinishedSorting()
//   }
// } //HeapSort

// async function sortMaxHeap(tempArray, lastNode, sortSpeed, props) {
//   // await sleep(sortSpeed)
//   //   .then(() => {
//   //     let temp = tempArray[lastNode]
//   //     let temp2 = tempArray[0]
//   //     tempArray[lastNode] = tempArray[0]
//   //     tempArray[0] = temp
//   //     props.changeBarColor("yellow", 0)
//   //     props.changeBarColor("yellow", lastNode)
//   //     props.changeBarHeight(temp, 0)
//   //     props.changeBarHeight(temp2, lastNode)
//   //     props.changeBarColor("blue", lastNode)
//   //   })
//   //   .then(() => heapify(tempArray, 0, lastNode, sortSpeed, props))
//   let temp = tempArray[lastNode]
//   let temp2 = tempArray[0]
//   tempArray[lastNode] = tempArray[0]
//   tempArray[0] = temp
//   props.changeBarColor("yellow", 0)
//   props.changeBarColor("yellow", lastNode)
//   await sleep(sortSpeed)
//   props.changeBarHeight(temp, 0)
//   props.changeBarHeight(temp2, lastNode)
//   props.changeBarColor("blue", lastNode)
//   heapify(tempArray, 0, lastNode, sortSpeed, props)
// }

// async function buildMaxHeap(tempArray, sortSpeed, props) {
//   let currentIndex = Math.floor(tempArray.length / 2)
//   while (currentIndex >= 0) {
//     await heapify(tempArray, currentIndex, tempArray.length, sortSpeed, props)
//     // setTimeout((currentIndex) => currentIndex--, (tempArray.length-currentIndex)*sortSpeed)
//     currentIndex--
//   }
// }

// async function heapify(array, start, end, sortSpeed, props) {
//   let left = start * 2 + 1
//   let right = start * 2 + 2 < end ? start * 2 + 2 : null
//   let swap
//   // await sleep(sortSpeed)
//   if (start >= Math.floor(end / 2)) {
//     // await sleep(sortSpeed)
//     return;
//   }

//   if (right) {
//     swap = array[left] > array[right] ? left : right
//   } else {
//     swap = left
//   }

//   props.changeBarColor("yellow", left)
//   props.changeBarColor("yellow", right)

//   if (array[swap] > array[start]) {
//     let temp = array[swap]
//     let temp2 = array[start]
//     array[swap] = array[start]
//     array[start] = temp
//     props.changeBarHeight(temp2, swap)
//     props.changeBarHeight(temp, start)
//     // await sleep(sortSpeed)
//     props.changeBarColor("red", swap)
//     props.changeBarColor("red", start)
//     callHeapify(array, swap, end, sortSpeed, props)
//     // heapify(array, swap, end, sortSpeed, props)
//   } else {
//     props.changeBarColor("red", left)
//     props.changeBarColor("red", right)
//     // await sleep(sortSpeed)
//   }

// }

// async function callHeapify(array, swap, end, sortSpeed, props){
//   await heapify(array, swap, end, sortSpeed, props)
// }

// export { HeapSort }
