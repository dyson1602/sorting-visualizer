const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// const swapBars = async (array, leftIndex, rightIndex, changeBarHeight) => {
//   const temp = array[leftIndex]
//   changeBarHeight(array[rightIndex], leftIndex)
//   changeBarHeight(temp, rightIndex)
//   array[leftIndex] = array[rightIndex]
//   array[rightIndex] = temp
// }

// const partition = async (
//   array,
//   firstIndex,
//   lastIndex,
//   changeBarHeight,
//   changeBarColor,
//   sortSpeed,
//   arrayColor,
//   selectedColor,
//   pivotColor
// ) => {
//   let pivotValue = array[lastIndex]

//   let i = firstIndex
//   console.log("Array", array)
//   console.log("Pivot Value", pivotValue)

//   for (let j = firstIndex; j < lastIndex; j++) {
//     changeBarColor(selectedColor, j)
//     changeBarColor(pivotColor, i)
//     await sleep(sortSpeed)
//     if (array[j] <= pivotValue) {
//       await swapBars(array, i, j, (height, index) =>
//         changeBarHeight(height, index)
//       )
//       changeBarColor(arrayColor, j)
//       changeBarColor(arrayColor, i)
//       i++
//     }
//     changeBarColor(arrayColor, j)
//     changeBarColor(arrayColor, i)
//   }

//   await swapBars(array, i, lastIndex, (height, index) =>
//     changeBarHeight(height, index)
//   )
//   console.log("Pivot Index", i)
//   return i
// }
// export const QuickSort = async (
//   array,
//   arraySize,
//   changeBarHeight,
//   changeBarColor,
//   sortSpeed,
//   arrayColor,
//   selectedColor,
//   pivotColor,
//   sortedColor,
//   finished
// ) => {
//   let localArray = [...array]
//   let arrayOfIndexes = []

//   let startIndex = 0
//   let endIndex = localArray.length - 1

//   arrayOfIndexes.push({ x: startIndex, y: endIndex })

//   while (arrayOfIndexes.length) {
//     const { x, y } = arrayOfIndexes.shift()
//     console.log("X:", x)
//     console.log("Y:", y)
//     const pivotIndex = await partition(
//       localArray,
//       x,
//       y,
//       (height, index) => changeBarHeight(height, index),
//       (color, index) => changeBarColor(color, index),
//       sortSpeed,
//       arrayColor,
//       selectedColor,
//       pivotColor
//     )
//     if (pivotIndex - 1 > x) {
//       arrayOfIndexes.push({ x: x, y: pivotIndex - 1 })
//     }
//     if (pivotIndex + 1 < y) {
//       arrayOfIndexes.push({ x: pivotIndex + 1, y: y })
//     }
//     console.log("Here")
//   }
//   for (let i = 0; i < arraySize; i++) {
//     //   await sleep(10)
//     changeBarColor(sortedColor, i)
//     console.log("Finished")
//     finished()
//   }
// }

export async function QuickSort(randomArray, changeBarHeight, changeBarColor) {
  let array = [...randomArray]
  console.log("Random Array: ", array)
  await quickSortHelper(
    array,
    0,
    array.length - 1,
    changeBarHeight,
    (color, index) => changeBarColor(color, index)
  )
  console.log("Quicksorted Array", array)
  return array
}

async function quickSortHelper(
  array,
  start,
  end,
  changeBarHeight,
  changeBarColor
) {
  if (start >= end) {
    return
  }
  let pivot = start,
    left = start + 1,
    right = end

  console.log("Left: ", left)
  console.log("Right: ", right)
  console.log("Pivot: ", pivot)
  changeBarColor("blue", pivot)
  changeBarColor("orange", left)
  changeBarColor("yellow", right)

  while (right >= left) {
    if (array[right] < array[pivot] && array[left] > array[pivot]) {
      let temp = array[right]
      array[right] = array[left]
      array[left] = temp
      changeBarHeight(array[right], left)
      changeBarHeight(array[left], right)
      await sleep(10)
    }
    if (array[right] >= array[pivot]) {
      right--
      await sleep(10)
    }
    if (array[left] <= array[pivot]) {
      left++
      await sleep(10)
    }
  }

  if (pivot !== right) {
    let temp = array[right]
    array[right] = array[pivot]
    array[pivot] = temp
    changeBarHeight(array[right], pivot)
    changeBarHeight(array[pivot], right)
    await sleep(10)
  }
  await quickSortHelper(
    array,
    start,
    right - 1,
    changeBarHeight,
    changeBarColor
  )
  await quickSortHelper(array, right + 1, end, changeBarHeight, changeBarColor)
}
