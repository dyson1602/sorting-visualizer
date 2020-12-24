const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const BubbleSort = async (
  array,
  arraySize,
  changeBarHeight,
  sortSpeed = 500
) => {
  let localArray = [...array]
  console.log(arraySize)
  for (let i = 0; i < arraySize; i++) {
    let isSorted = true
    for (let j = 0; j < arraySize - i; j++) {
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
