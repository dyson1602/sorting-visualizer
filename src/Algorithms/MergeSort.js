export function MergeSort(props) {
  let animationArray = []
  let localArray = [...props.randomArray]
  let auxArray = [...props.randomArray]
  if (localArray.length <= 1) return localArray
  mergeSortRecursion(
    localArray,
    0,
    localArray.length - 1,
    auxArray,
    animationArray
  )
  dispatchHandler(animationArray, props, localArray)
}

function mergeSortRecursion(localArray, start, end, auxArray, animationArray) {
  if (start === end) return
  const middle = Math.floor((start + end) / 2)
  mergeSortRecursion(auxArray, start, middle, localArray, animationArray)
  mergeSortRecursion(auxArray, middle + 1, end, localArray, animationArray)
  merge(localArray, start, middle, end, auxArray, animationArray)
}

function merge(localArray, start, middle, end, auxArray, animationArray) {
  let k = start
  let i = start
  let j = middle + 1
  while (i <= middle && j <= end) {
    animationArray.push(["color", "yellow", i])
    animationArray.push(["color", "yellow", j])
    animationArray.push(["color", "red", i])
    animationArray.push(["color", "red", j])
    if (auxArray[i] <= auxArray[j]) {
      animationArray.push(["height", auxArray[i], k])
      localArray[k++] = auxArray[i++]
    } else {
      animationArray.push(["height", auxArray[j], k])
      localArray[k++] = auxArray[j++]
    }
  }
  while (i <= middle) {
    animationArray.push(["color", "yellow", i])
    animationArray.push(["color", "yellow", i])
    animationArray.push(["color", "red", i])
    animationArray.push(["color", "red", i])
    animationArray.push(["height", auxArray[i], k])
    localArray[k++] = auxArray[i++]
  }
  while (j <= end) {
    animationArray.push(["color", "yellow", j])
    animationArray.push(["color", "yellow", j])
    animationArray.push(["color", "red", j])
    animationArray.push(["color", "red", j])
    animationArray.push(["height", auxArray[j], k])
    localArray[k++] = auxArray[j++]
  }
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
