import { dispatchHandler } from '../../HelperFunctions/dispatchHandler'
import { SORTED_COLOR, INITIAL_COLOR, COMPARE_COLOR } from '../../HelperFunctions/colors'

export function InsertionSort(props) {
  let tempArray = [...props.randomArray]
  let animationArray = []

  for (let i = 1; i < tempArray.length; i++) {
    let temp = tempArray[i]
    let j = i - 1
    let jWhile = 0

    animationArray.push(["color", COMPARE_COLOR, i])
    animationArray.push(["color", COMPARE_COLOR, j])

    while (j >= 0 && temp < tempArray[j]) {
      let swap = tempArray[j]
      tempArray[j] = temp
      tempArray[j + 1] = swap
      jWhile++

      animationArray.push(["height", temp, j])
      animationArray.push(["height", swap, j + 1])
      animationArray.push(["color", INITIAL_COLOR, j + 1])
      j - 1 >= 0
        ? animationArray.push(["color", COMPARE_COLOR, j - 1])
        : animationArray.push(["color", INITIAL_COLOR, j])

      if (temp >= tempArray[j - 1]) {
        animationArray.push(["color", INITIAL_COLOR, j])
        animationArray.push(["color", INITIAL_COLOR, j - 1])
      }
      j--
    }

    if (jWhile === 0) {
      animationArray.push(["color", INITIAL_COLOR, j + 1])
      animationArray.push(["color", INITIAL_COLOR, j])
    }
  }

  for (let i = 0; i < tempArray.length; i++) {
    animationArray.push(["color", SORTED_COLOR, i])
  }

  dispatchHandler(animationArray, props)
}