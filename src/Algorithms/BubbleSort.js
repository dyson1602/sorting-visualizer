const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const BubbleSort = async (
  array,
  arraySize,
  changeBarHeight,
  sortSpeed = 500
) => {
  // sortSpeed = 2500000 / (sortSpeed * arraySize * arraySize)
  let localArray = [...array]
  console.log(arraySize)
  for (let i = 0; i < arraySize; i++) {
    // isSorted optimizes in that if we loop through and its already sorted, we can stop
    let isSorted = true
    for (let j = 0; j < arraySize - i; j++) {
      // changeBarColor(selectedColor, j)
      // changeBarColor(selectedColor, j+1)
      console.log(j, i)
      await sleep(sortSpeed)
      if (localArray[j] > localArray[j + 1]) {
        let temp = localArray[j]
        let temp2 = localArray[j + 1]
        localArray[j] = temp2
        localArray[j + 1] = temp
        await sleep(sortSpeed)
        changeBarHeight(temp2, j)
        changeBarHeight(temp, j + 1)
        isSorted = false
      }
      // changeBarColor(arrayColor, j)
      // changeBarColor(arrayColor, j+1)
    }
    // changeBarColor(sortedColor, arraySize-1-i)
    // changeBarColor(sortedColor, arraySize-i)
    if (isSorted === true) {
      for (let k = 0; k < i; k++) {
        // changeBarColor(sortedColor, k)
      }
      break
    }
  }
}

// function BubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j]
//         array[j] = array[j + 1]
//         array[j + 1] = temp
//       }
//     }
//   }

//   return array
// }

// export { BubbleSort }
