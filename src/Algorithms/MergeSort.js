import {
  COMPARE_COLOR,
  INITIAL_COLOR,
  SORTED_COLOR,
} from "../HelperFunctions/colors"
import { dispatchHandler } from "../HelperFunctions/dispatchHandler"

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
  markSorted(localArray, animationArray)
  dispatchHandler(animationArray, props)
}

function mergeSortRecursion(localArray, start, end, auxArray, animationArray) {
  if (start === end) return
  const middle = Math.floor((start + end) / 2)
  mergeSortRecursion(auxArray, start, middle, localArray, animationArray)
  //   console.log(firstSort)
  mergeSortRecursion(auxArray, middle + 1, end, localArray, animationArray)
  //   console.log(secondSort)
  //   let isFinalMerge = false
  //   console.log("Is Final Merge?", isFinalMerge)
  //   if (firstSort.length + secondSort.length === localArray.length)
  //     isFinalMerge = true
  return merge(
    localArray,
    start,
    middle,
    end,
    auxArray,
    animationArray
    // isFinalMerge
  )
}

function merge(
  localArray,
  start,
  middle,
  end,
  auxArray,
  animationArray
  //   isFinalMerge
) {
  let k = start
  let i = start
  let j = middle + 1
  while (i <= middle && j <= end) {
    animationArray.push(["color", COMPARE_COLOR, i])
    animationArray.push(["color", COMPARE_COLOR, j])
    animationArray.push(["color", INITIAL_COLOR, i])
    animationArray.push(["color", INITIAL_COLOR, j])
    if (auxArray[i] <= auxArray[j]) {
      animationArray.push(["height", auxArray[i], k])
      localArray[k++] = auxArray[i++]
    } else {
      animationArray.push(["height", auxArray[j], k])
      localArray[k++] = auxArray[j++]
    }
  }
  while (i <= middle) {
    console.log("local Array at i", localArray[i])
    console.log("aux Array at i", auxArray[i])
    console.log("i", i)
    animationArray.push(["color", COMPARE_COLOR, i])
    animationArray.push(["color", COMPARE_COLOR, i])
    animationArray.push(["color", INITIAL_COLOR, i])
    animationArray.push(["color", INITIAL_COLOR, i])
    animationArray.push(["height", auxArray[i], k])
    localArray[k++] = auxArray[i++]
  }
  while (j <= end) {
    console.log("local Array at j", localArray[j])
    console.log("aux Array at j", auxArray[j])
    console.log("j", j)
    animationArray.push(["color", COMPARE_COLOR, j])
    animationArray.push(["color", COMPARE_COLOR, j])
    animationArray.push(["color", INITIAL_COLOR, j])
    animationArray.push(["color", INITIAL_COLOR, j])
    animationArray.push(["height", auxArray[j], k])
    localArray[k++] = auxArray[j++]
  }
  //   console.log("Is Final Merge?", isFinalMerge)
}

function markSorted(array, animationArray) {
  for (let i = 0; i < array.length; i++) {
    animationArray.push(["color", SORTED_COLOR, i])
  }
}
