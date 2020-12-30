// import { connect } from "react-redux"

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

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
//   let pivot = array[lastIndex]

//   let i = firstIndex
//   console.log("Array", array)
//   console.log("Pivot ", pivot)

//   for (let j = firstIndex; j < lastIndex; j++) {
//     changeBarColor(selectedColor, j)
//     changeBarColor(pivotColor, i)
//     await sleep(sortSpeed)
//     if (array[j] <= pivot) {
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

//   //   changeBarColor("black", i)
//   // await sleep(10)
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

//   arrayOfIndexes.push({ left: startIndex, right: endIndex })

//   while (arrayOfIndexes.length) {
//     const { left, right } = arrayOfIndexes.shift()
//     console.log("left:", left)
//     console.log("right:", right)
//     const pivotIndex = await partition(
//       localArray,
//       left,
//       right,
//       (height, index) => changeBarHeight(height, index),
//       (color, index) => changeBarColor(color, index),
//       sortSpeed,
//       arrayColor,
//       selectedColor,
//       pivotColor
//     )
//     if (pivotIndex - 1 > left) {
//       arrayOfIndexes.push({ left: left, right: pivotIndex - 1 })
//     }
//     if (pivotIndex + 1 < right) {
//       arrayOfIndexes.push({ left: pivotIndex + 1, right: right })
//     }
//     console.log("Here")
//     await sleep(500)
//     changeBarColor("red", pivotIndex)
//   }
//   for (let i = 0; i < arraySize; i++) {
//     //   await sleep(10)
//     changeBarColor(sortedColor, i)
//     console.log("Finished")
//     finished()
//   }
// }

export function QuickSort(
  randomArray,
  dispatchSetPivot,
  dispatchSetSubArray,
  dispatchSetSwap,
  dispatchSetSorted,
  dispatchSetQuickTwo
) {
  let array = [...randomArray]
  let animationArray = []
  console.log("Random Array: ", array)
  console.log("dispatch set pivot", dispatchSetPivot)
  quickSortHelper(array, 0, array.length - 1, animationArray)
  console.log("Quicksorted Array", array)
  handleDispatch(
    dispatchSetPivot,
    dispatchSetSubArray,
    dispatchSetSwap,
    dispatchSetSorted,
    dispatchSetQuickTwo,
    array,
    animationArray
  )
  return array
}

function quickSortHelper(array, start, end, animationArray) {
  if (start >= end) {
    animationArray.push([true, start])
    return
  }
  let pivot = start,
    left = start + 1,
    right = end
  console.log(animationArray)
  animationArray.push(pivot)
  animationArray.push([left, right])

  while (right >= left) {
    if (array[right] < array[pivot] && array[left] > array[pivot]) {
      animationArray.push([left, right, true])
      let temp = array[right]
      array[right] = array[left]
      array[left] = temp

      animationArray.push([...array])
      animationArray.push([])
    }
    if (array[right] >= array[pivot]) {
      right--
    }
    if (array[left] <= array[pivot]) {
      left++
    }
    if (right >= left) animationArray.push([left, right])
  }
  animationArray.push([pivot, right])

  if (pivot !== right) {
    let temp = array[right]
    array[right] = array[pivot]
    array[pivot] = temp

    animationArray.push([pivot, right, true])
    animationArray.push([...array])
    animationArray.push([])
    animationArray.push([true, right])
    console.log(animationArray)
  }
  quickSortHelper(array, start, right - 1, animationArray)
  quickSortHelper(array, right + 1, end, animationArray)
}

function handleDispatch(
  dispatchSetPivot,
  dispatchSetSubArray,
  dispatchSetSwap,
  dispatchSetSorted,
  dispatchSetQuickTwo,
  array,
  animationArray
) {
  if (!animationArray.length) {
    dispatchSetPivot(null)
    dispatchSetQuickTwo(array.map((num, index) => index))
    setTimeout(() => {
      dispatchSetQuickTwo([])
      //   dispatch(setRunning(false))
    }, 900)
    return
  }
  //   console.log(dispatchSetPivot)
  let dispatchFunction = !(animationArray[0] instanceof Array)
    ? dispatchSetPivot(animationArray.shift())
    : animationArray[0].length > 3
    ? dispatchSetSubArray(animationArray.shift())
    : animationArray[0].length !== 2
    ? dispatchSetSwap(animationArray.shift())
    : animationArray[0].length === 2 &&
      typeof animationArray[0][0] === "boolean"
    ? dispatchSetSorted(animationArray.shift())
    : dispatchSetQuickTwo(animationArray.shift())
  //   dispatch(dispatchFunction(animationArray.shift()))
  if (dispatchFunction === dispatchSetPivot(animationArray.shift()))
    dispatchSetQuickTwo(animationArray.shift())
  setTimeout(() => {
    handleDispatch(
      dispatchSetPivot,
      dispatchSetSubArray,
      dispatchSetSwap,
      dispatchSetSorted,
      dispatchSetQuickTwo,
      array,
      animationArray
    )
  }, 500)
}

// function mdp(dispatch) {
//   return {
//     dispatchSetPivot: (index) => dispatch(setPivot(index)),
//     dispatchSetSubArray: (array) => dispatch(setSubArray(array)),
//     dispatchSetSwap: (array) => dispatch(setSwap(array)),
//     dispatchSetSorted: (array) => dispatch(setSorted(array)),
//     dispatchSetQuickTwo: (array) => dispatch(setQuickTwo(array)),
//   }
// }

// export default connect(null, mdp)(QuickSort)
