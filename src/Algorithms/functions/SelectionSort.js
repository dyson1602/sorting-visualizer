import { dispatchHandler } from '../../HelperFunctions/dispatchHandler'
import { SORTED_COLOR, INITIAL_COLOR, PIVOT_COLOR, COMPARE_COLOR } from '../../HelperFunctions/colors'


export function SelectionSort(props) {
  let animationArray = []
  let localArray = [...props.randomArray]
  for (let i = 0; i < localArray.length; i++) {
    let min = i
    for (let j = i + 1; j < localArray.length; j++) {
      animationArray.push(["color", COMPARE_COLOR, j])
      animationArray.push(["color", PIVOT_COLOR, min])
      if (localArray[j] < localArray[min]) {
        animationArray.push(["color", INITIAL_COLOR, min])
        min = j
      } else {
        animationArray.push(["color", INITIAL_COLOR, j])
      }
    }
    if (min !== i) {
      animationArray.push(["color", COMPARE_COLOR, i])
      animationArray.push(["height", localArray[min], i])
      animationArray.push(["height", localArray[i], min])
      ;[localArray[i], localArray[min]] = [localArray[min], localArray[i]]
    }
    animationArray.push(["color", SORTED_COLOR, i])
    if (min !== i) {
      animationArray.push(["color", INITIAL_COLOR, min])
    }
  }
  dispatchHandler(animationArray, props)
}
