const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const HeapSort = async (
  unsortedArray,
  arraySize,
  changeBarHeight,
  changeBarColor,
  sortSpeed = 0,
  arrayColor = "red",
  selectedColor = "yellow",
  sortedColor = "blue",
  finished
) => {

  let tempArray = [...unsortedArray]

  buildMaxHeap(tempArray)

  let lastNode = arraySize - 1

  while (lastNode > 0) {
    console.log(lastNode)
    let temp = tempArray[lastNode]
    let temp2 = tempArray[0]
    tempArray[lastNode] = tempArray[0]
    tempArray[0] = temp
    changeBarColor(selectedColor, 0)
    changeBarColor(selectedColor, lastNode)
    await sleep(sortSpeed)
    changeBarHeight(temp, 0)
    changeBarHeight(temp2, lastNode)
    changeBarColor(sortedColor, lastNode)
    heapify(tempArray, 0, lastNode)
    lastNode--
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
    // changeBarColor(selectedColor, left)
    // changeBarColor(selectedColor, right)

    // await sleep(sortSpeed)


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
      let temp2 = array[start]
      array[swap] = array[start]
      array[start] = temp
     

      changeBarHeight(temp, start)
      changeBarHeight(temp2, swap)
      // changeBarColor(arrayColor, swap)
      // changeBarColor(arrayColor, start)
      heapify(array, swap, end)
    }
    // changeBarColor(arrayColor, left)
    // changeBarColor(arrayColor, right)
  }

  finished()
}
