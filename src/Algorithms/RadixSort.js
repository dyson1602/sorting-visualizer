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

    let localArrayPosition = 0
    localArray = [].concat(...buckets)

    for (let k = 0; k < buckets.length; k++) {
      if (buckets[k].length) {
        let times = buckets[k].length
        for (let l = 0; l < times; l++) {
          animationArray.push(["clear", k, 0])
          animationArray.push(["height", buckets[k][l], localArrayPosition])
          if (i === turns - 1) {
            animationArray.push(["color", "blue", localArrayPosition])
          } else {
            animationArray.push(["color", "red", localArrayPosition])
          }
          localArrayPosition++
        }
      }
    }
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