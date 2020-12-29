// import { changeBarColor, changeBarHeight } from '../Redux/actions' 
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// export const HeapSort = async (
//   unsortedArray,
//   arraySize,
//   changeBarHeight,
//   changeBarColor,
//   sortSpeed = 0,
//   arrayColor = "red",
//   selectedColor = "yellow",
//   sortedColor = "blue",
//   finished
// ) => {

//   let tempArray = [...unsortedArray]
//   console.log(tempArray)

//   await buildMaxHeap(tempArray, sortSpeed)
//   console.log(tempArray)

//   let lastNode = arraySize - 1


//   while (lastNode > 0) {
//     console.log(lastNode)
//     let temp = tempArray[lastNode]
//     let temp2 = tempArray[0]
//     tempArray[lastNode] = tempArray[0]
//     tempArray[0] = temp
//     changeBarColor(selectedColor, 0)
//     changeBarColor(selectedColor, lastNode)
//     await sleep(sortSpeed)
//     changeBarHeight(temp, 0)
//     changeBarHeight(temp2, lastNode)
//     changeBarColor(sortedColor, lastNode)
//     heapify(tempArray, 0, lastNode)
//     lastNode--
//   }

//   if (lastNode === 0){
//     changeBarColor(sortedColor, 0)
//   }

//   finished()
// }

// function sortMaxHeap (){

// }

// async function buildMaxHeap(tempArray, sortSpeed) {
//   let currentIndex = Math.floor(tempArray.length / 2)
//   while (currentIndex >= 0) {
//     await heapify(tempArray, currentIndex, tempArray.length, sortSpeed)
//     currentIndex--
//   }
// }


// async function heapify(array, start, end, sortSpeed) {
//   let left = start * 2 + 1
//   let right = start * 2 + 2 < end ? start * 2 + 2 : null
//   let swap
//   // await sleep(sortSpeed)
//   // changeBarColor("yellow", left)
//   // changeBarColor("yellow", right)

//   if (start >= Math.floor(end / 2)) {
//     return;
//   }
//   // await sleep(sortSpeed)

//   if (right) {
//     swap = array[left] > array[right] ? left : right
//   } else {
//     swap = left
//   }

//   if (array[swap] > array[start]) {
//     // console.log('changed', swap)
//     // await sleep(sortSpeed)
//     let temp = array[swap]
//     let temp2 = array[start]
//     array[swap] = array[start]
//     array[start] = temp
//     console.log("temp: ", temp, "temp2: ", temp2,  "array[swap]: ", array[swap], "array[start]: ", array[start])
//     changeBarHeight(temp2, start)
//     changeBarHeight(temp, swap)
//     heapify(array, swap, end)
   
//     // changeBarColor(arrayColor, swap)
//     // changeBarColor(arrayColor, start)
//   }
//   // changeBarColor(arrayColor, left)
//   // changeBarColor(arrayColor, right)
// }