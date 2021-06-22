import { dispatchHandler } from '../../HelperFunctions/dispatchHandler'
import { SORTED_COLOR, INITIAL_COLOR, COMPARE_COLOR} from '../../HelperFunctions/colors'

export function BubbleSort(props) {
  let animationArray = []
  let localArray = [...props.randomArray]

  for (let i = 0; i < localArray.length; i++) {
    let isSorted = true
    for (let j = 0; j < localArray.length - i; j++) {
      animationArray.push(["color", COMPARE_COLOR, j])
      animationArray.push(["color", COMPARE_COLOR, j + 1])

      if (localArray[j] > localArray[j + 1]) {
        let temp = localArray[j]
        let temp2 = localArray[j + 1]
        localArray[j] = temp2
        localArray[j + 1] = temp
        animationArray.push(["height", temp2, j])
        animationArray.push(["height", temp, j + 1])
        isSorted = false
      }

      animationArray.push(["color", INITIAL_COLOR, j])
      animationArray.push(["color", INITIAL_COLOR, j + 1])
    }
    animationArray.push(["color", SORTED_COLOR, localArray.length - 1 - i])
    animationArray.push(["color", SORTED_COLOR, localArray.length - i])
    if (isSorted === true) {
      for (let k = 0; k < i; k++) {
        animationArray.push(["color", SORTED_COLOR, k])
      }
      break
    }
  }

  dispatchHandler(animationArray, props)
}