export function RadixSort(props) {
  let localArray = [...props.randomArray]
  let animationArray = []

  let turns = findMax(localArray)

  for (let i = 0; i < turns; i++) {
    let buckets = Array.from({ length: 10 }, () => [])
    for (let j = 0; j < localArray.length; j++) {
      let position = getPosition(localArray[j], i)
      buckets[position].push(localArray[j])
      animationArray.push(["color", "pink", j])
      animationArray.push(["bucket", position, localArray[j]])
    }

    localArray = [].concat(...buckets)
    let localArrayPosition = 0

    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i].length) {
        let times = buckets[i].length
        for (let j = 0; j < times; j++) {
          animationArray.push(["clear", i, 0])
          animationArray.push(["height", buckets[i][j], localArrayPosition])
          animationArray.push(["color", "red", localArrayPosition])
          localArrayPosition++
        }
      }
    }
    animationArray.push(["height", localArray[i], i])
    animationArray.push(["color", "red", i])
  }
   dispatchHandler(animationArray, props)
}

function findMax(array) {
  let max = 0
  for (let number of array) {
    if (max < number.toString().length) {
      max = number.toString().length
    }
  }
  return max
}

function getPosition(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}




function dispatchHandler(animationArray, props) {
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
        : currentPane[0] === "bucket"
          ? props.buildBuckets
          : currentPane[0] === "clear"
            ? props.clearBuckets :
            null

  dispatchFunction(currentPane[1], currentPane[2])
  setTimeout(
    () => dispatchHandler(animationArray, props),
    props.speed
  )
}