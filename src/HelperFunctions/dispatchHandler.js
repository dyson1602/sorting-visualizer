export function dispatchHandler(animationArray, props) {
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