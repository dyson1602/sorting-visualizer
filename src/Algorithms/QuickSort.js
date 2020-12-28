const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const swapBars = async (array, leftIndex, rightIndex, changeBarHeight) => {
  const temp = array[leftIndex]
  changeBarHeight(array[rightIndex], leftIndex)
  changeBarHeight(temp, rightIndex)
  array[leftIndex] = array[rightIndex]
  array[rightIndex] = temp
}

const partition = async (
  array,
  firstIndex,
  lastIndex,
  changeBarHeight,
  changeBarColor,
  sortSpeed,
  arrayColor,
  selectedColor,
  pivotColor
) => {
  let pivotValue = array[lastIndex]

  let i = firstIndex
  console.log("Array", array)
  console.log("Pivot Value", pivotValue)

  for (let j = firstIndex; j < lastIndex; j++) {
    changeBarColor(selectedColor, j)
    changeBarColor(pivotColor, i)
    await sleep(sortSpeed)
    if (array[j] <= pivotValue) {
      await swapBars(array, i, j, (height, index) =>
        changeBarHeight(height, index)
      )
      changeBarColor(arrayColor, j)
      changeBarColor(arrayColor, i)
      i++
    }
    changeBarColor(arrayColor, j)
    changeBarColor(arrayColor, i)
  }

  await swapBars(array, i, lastIndex, (height, index) =>
    changeBarHeight(height, index)
  )
  console.log("Pivot Index", i)
  return i
}
export const QuickSort = async (
  array,
  arraySize,
  changeBarHeight,
  changeBarColor,
  sortSpeed,
  arrayColor,
  selectedColor,
  pivotColor,
  sortedColor,
  finished
) => {
  let localArray = [...array]
  let arrayOfIndexes = []

  let startIndex = 0
  let endIndex = localArray.length - 1

  arrayOfIndexes.push({ x: startIndex, y: endIndex })

  while (arrayOfIndexes.length) {
    const { x, y } = arrayOfIndexes.shift()
    console.log("X:", x)
    console.log("Y:", y)
    const pivotIndex = await partition(
      localArray,
      x,
      y,
      (height, index) => changeBarHeight(height, index),
      (color, index) => changeBarColor(color, index),
      sortSpeed,
      arrayColor,
      selectedColor,
      pivotColor
    )
    if (pivotIndex - 1 > x) {
      arrayOfIndexes.push({ x: x, y: pivotIndex - 1 })
    }
    if (pivotIndex + 1 < y) {
      arrayOfIndexes.push({ x: pivotIndex + 1, y: y })
    }
  }
  for (let i = 0; i < arraySize; i++) {
    console.log("Here")
    await sleep(10)
    changeBarColor(sortedColor, i)
  }
  finished()
}
