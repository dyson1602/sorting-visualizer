// import { connect } from 'react-redux'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


export const BubbleSort = async (
  array,
  arraySize,
  changeBarHeight,
  changeBarColor,
  sortSpeed = 10,
  arrayColor = "red",
  selectedColor = "yellow",
  sortedColor = "blue",
  finished
) => {
  let localArray = [...array]
  for (let i = 0; i < arraySize; i++) {
    let isSorted = true
    for (let j = 0; j < arraySize - i; j++) {
      changeBarColor(selectedColor, j)
      changeBarColor(selectedColor, j + 1)
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
      changeBarColor(arrayColor, j)
      changeBarColor(arrayColor, j + 1)
    }
    changeBarColor(sortedColor, arraySize - 1 - i)
    changeBarColor(sortedColor, arraySize - i)
    if (isSorted === true) {
      for (let k = 0; k < i; k++) {
        changeBarColor(sortedColor, k)
      }
      break
    }
  }
  finished()
}

// function mdp(dispatch) {
//   return {
//     dispatchSetFinishedSorting: () => dispatch(setFinishedSorting()),
//   }
// }
// export default connect(null, mdp)(BubbleSort)