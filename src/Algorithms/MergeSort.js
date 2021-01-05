import { dispatchHandler } from '../HelperFunctions/dispatchHandler'
import { SORTED_COLOR, INITIAL_COLOR, COMPARE_COLOR } from '../HelperFunctions/colors'

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

  mergeSortRecursion(auxArray, middle + 1, end, localArray, animationArray)

  let isFinalMerge = false

  if (end - start + 1 === localArray.length) {
    isFinalMerge = true
  }


  return merge(
    localArray,
    start,
    middle,
    end,
    auxArray,
    animationArray,
    isFinalMerge
  )
}

function merge(
  localArray,
  start,
  middle,
  end,
  auxArray,
  animationArray,
  isFinalMerge
) {
  console.log("final merge? ", isFinalMerge)
  let k = start
  let i = start
  let j = middle + 1
  console.log("i-k-j-middle ", i, k, j, middle)
  while (i <= middle && j <= end) {
    console.log("first while:", i, k, j, middle, isFinalMerge )
    animationArray.push(["color", COMPARE_COLOR, i])
    animationArray.push(["color", COMPARE_COLOR, j])

    // animationArray.push(["color", INITIAL_COLOR, i])
    // animationArray.push(["color", INITIAL_COLOR, j])


    if (auxArray[i] <= auxArray[j]) {
      console.log("in first cond", k)
      animationArray.push(["height", auxArray[i], k])
      
      animationArray.push(["color", INITIAL_COLOR, i])
      animationArray.push(["color", INITIAL_COLOR, j])
      
      if (isFinalMerge) {
        animationArray.push(["color", SORTED_COLOR, i])
      }
      localArray[k++] = auxArray[i++]
    } else {
      console.log('in else cond', k)
      animationArray.push(["height", auxArray[j], k])

      animationArray.push(["color", INITIAL_COLOR, i])
      animationArray.push(["color", INITIAL_COLOR, j])
      

      if (isFinalMerge) {
        animationArray.push(["color", SORTED_COLOR, k])
      }
      localArray[k++] = auxArray[j++]
    }
  }

  while (i <= middle) {
    console.log("second while", i,j,k,middle, end)
    animationArray.push(["color", COMPARE_COLOR, i])
    if (isFinalMerge) {
      animationArray.push(["color", SORTED_COLOR, i])
    } else {
      animationArray.push(["color", INITIAL_COLOR, i])
    }
    animationArray.push(["height", auxArray[i], k])
    localArray[k++] = auxArray[i++]
  }

  while (j <= end) {
    console.log("third while", i,j,k,middle, end)
    animationArray.push(["color", COMPARE_COLOR, j])

    if (isFinalMerge) {
      animationArray.push(["color", SORTED_COLOR, k])
    } else {
      animationArray.push(["color", INITIAL_COLOR, j])
    }
    animationArray.push(["height", auxArray[j], k])
    localArray[k++] = auxArray[j++]
  }

  return localArray
}

function markSorted(array, animationArray) {
  for (let i = 0; i < array.length; i++) {
    animationArray.push(["color", SORTED_COLOR, i])
  }
}