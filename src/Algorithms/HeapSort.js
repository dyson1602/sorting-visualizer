function HeapSort(unsortedArray) {
  
  let tempArray = [...unsortedArray]
  buildMaxHeap(tempArray)  
  
  let lastNode = tempArray.length - 1
  while (lastNode > 0) {
    let temp = tempArray[lastNode]
    tempArray[lastNode] = tempArray[0]
    tempArray[0] = temp
    heapify(tempArray, 0, lastNode)
    lastNode--
  }
  return tempArray
}

function buildMaxHeap(tempArray) {
  let currentIndex = Math.floor(tempArray.length / 2)
  while (currentIndex >= 0) {
    heapify(tempArray, currentIndex, tempArray.length)
    currentIndex--
  }
}

function heapify(array, start, end) {
  let left = start * 2 + 1
  let right = start * 2 + 2 < end ? start * 2 + 2 : null
  let swap
  console.log(array)

  if (start >= Math.floor(end / 2)) {
    return;
  }

  if (right) {
    swap = array[left] > array[right] ? left : right
  } else {
    swap = left
  }

  if (array[swap] > array[start]) {
    let temp = array[swap]
    array[swap] = array[start]
    array[start] = temp
    heapify(array, swap, end)
  }
}