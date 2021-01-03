import { dispatchHandler } from '../HelperFunctions/dispatchHandler'

export function InsertionSort(props) {
  let tempArray = [...props.randomArray]
  let animationArray = []

  for (let i = 1; i < tempArray.length; i++) {
    let temp = tempArray[i]
    let j = i - 1
    let jWhile = 0

    animationArray.push(["color", "yellow", i])
    animationArray.push(["color", "yellow", j])

    while (j >= 0 && temp < tempArray[j]) {
      let swap = tempArray[j]
      tempArray[j] = temp
      tempArray[j + 1] = swap
      jWhile++

      animationArray.push(["height", temp, j])
      animationArray.push(["height", swap, j + 1])
      animationArray.push(["color", "red", j + 1])
      j - 1 >= 0
        ? animationArray.push(["color", "yellow", j - 1])
        : animationArray.push(["color", "red", j])

      if (temp >= tempArray[j - 1]) {
        animationArray.push(["color", "red", j])
        animationArray.push(["color", "red", j - 1])
      }
      j--
    }

    if (jWhile === 0) {
      animationArray.push(["color", "red", j + 1])
      animationArray.push(["color", "red", j])
    }
  }

  for (let i = 0; i < tempArray.length; i++) {
    animationArray.push(["color", "blue", i])
  }

  dispatchHandler(animationArray, props, tempArray)
}