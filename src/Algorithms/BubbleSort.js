export function BubbleSort(props) {
  let animationArray = []
  let localArray = [...props.randomArray]

  for (let i = 0; i < localArray.length; i++) {
    let isSorted = true
    for (let j = 0; j < localArray.length - i; j++) {
      animationArray.push(["color", "yellow", j])
      animationArray.push(["color", "yellow", j + 1])

      if (localArray[j] > localArray[j + 1]) {
        let temp = localArray[j]
        let temp2 = localArray[j + 1]
        localArray[j] = temp2
        localArray[j + 1] = temp
        animationArray.push(["height", temp2, j])
        animationArray.push(["height", temp, j + 1])
        isSorted = false
      }

      animationArray.push(["color", "red", j])
      animationArray.push(["color", "red", j + 1])
    }
    animationArray.push(["color", "blue", localArray.length - 1 - i])
    animationArray.push(["color", "blue", localArray.length - i])
    if (isSorted === true) {
      for (let k = 0; k < i; k++) {
        animationArray.push(["color", "blue", k])
      }
      break
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
  setTimeout(
    () => dispatchHandler(animationArray, props, localArray),
    props.speed
  )
}
