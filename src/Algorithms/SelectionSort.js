export function SelectionSort(props) {
  let animationArray = []
  let localArray = [...props.randomArray]
  for (let i = 0; i < localArray.length; i++) {
    let min = i
    for (let j = i + 1; j < localArray.length; j++) {
      animationArray.push(["color", "yellow", j])
      animationArray.push(["color", "purple", min])
      if (localArray[j] < localArray[min]) {
        animationArray.push(["color", "red", min])
        min = j
      } else {
        animationArray.push(["color", "red", j])
      }
    }
    if (min !== i) {
      animationArray.push(["color", "yellow", i])
      animationArray.push(["height", localArray[min], i])
      animationArray.push(["height", localArray[i], min])
      ;[localArray[i], localArray[min]] = [localArray[min], localArray[i]]
    }
    animationArray.push(["color", "blue", i])
    if (min !== i) {
      animationArray.push(["color", "red", min])
    }
  }
  dispatchHandler(animationArray, props, localArray)
}

function dispatchHandler(animationArray, props, localArray) {
  if (animationArray.length === 0) {
    props.dispatchSetFinishedSorting()
    return
  }

  let currentPane = animationArray.shift()

  let dispatchFunction =
    currentPane[0] === "color"
      ? props.changeBarColor
      : currentPane[0] === "height"
      ? props.changeBarHeight
      : null

  dispatchFunction(currentPane[1], currentPane[2])
  setTimeout(() => dispatchHandler(animationArray, props, localArray), 50)
}
