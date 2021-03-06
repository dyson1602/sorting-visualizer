import React from "react"
import Card from "../Components/Card"
import bubbleChart from "../images/bubblesortchart.png"
import bubbleSort from "../images/bubblesortgif.gif"
import heapChart from "../images/heapsortchart.png"
import heapSort from "../images/heapsortgif.gif"
import insertionChart from "../images/insertionsortchart.png"
import insertionSort from "../images/insertionsortgif.gif"
import mergeChart from "../images/mergesortchart.png"
import mergeSort from "../images/mergesortgif.gif"
import quickChart from "../images/quicksortchart.png"
import quickSort from "../images/quicksortgif.gif"
import radixChart from "../images/radixsortchart.png"
import radixSort from "../images/radixsortimg.jpeg"
import selectionChart from "../images/selectionsortchart.png"
import selectionSort from "../images/selectionsortgif.gif"
import spaceTimeComplexityGraph from "../images/spacetimecomplexity.png"

class InfoPageContainer extends React.Component {
  cardObjects = () => {
    return [
      {
        id: 1,
        name: "Bubble Sort",
        coverImage: bubbleSort,
        description:
          "Bubble Sort is the simplest sorting algorithm that works by creating a loop that compares each item in the array with another item and repeatedly swapping the adjacent elements if they are in wrong order. This process is repeated until the entire array is sorted.",
        chartImage: bubbleChart,
      },
      {
        id: 2,
        name: "Insertion Sort",
        coverImage: insertionSort,
        description:
          "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part. The algorithm's name comes from the process of picking an element and inserting it in its correct place and then repeating it for all elements. It works by assuming the first element in the array is already sorted. It then selects the next element and compares this to all elements in the array. Every element that is greater than the selected element is shifted, and the selected element is inserted. This process is repeated until the array is sorted.",
        chartImage: insertionChart,
      },
      {
        id: 3,
        name: "Selection Sort",
        coverImage: selectionSort,
        description:
          "The selection sort algorithm sorts an array by repeatedly finding the minimum element from an unsorted portion of an array and putting it at the beginning. It does this by assuming the first element in the array is the smallest one and looping through to compare that value to every other value in the array. If it ever reaches a value smaller than itself, that element is set as the new smallest value and their positions in the array are swapped. The process continues doing comparisons until it reaches the end. The loops starts all over again moving on to the second element in the array as the smallest one. This continues until the entire array is sorted.",
        chartImage: selectionChart,
      },
      {
        id: 4,
        name: "Quick Sort",
        coverImage: quickSort,
        description:
          "Quick sort is one of the most efficient ways of sorting elements in computer systems. It is known as a divide and conquer algorithm. The term 'divide and conquer' means we divide one large problem into several smaller problems and solve the smaller problems to ultimately solve the large problem.  In quick sort, we find a pivot point in the array to compare all other elements in the array. A pivot can be selected in different ways, as the first, last, random, or median element. If an element is smaller than the pivot, it is moved before the pivot. If an element is greater than the pivot, it is moved after the pivot. This is done simultaneously from both ends of the array, with a left pointer (first element) and right pointer (last element), incrementing toward each other and swapping values should they be on the wrong side. Once this is complete, the process continues recursively on the sub arrays, created by dividing the array in half, or partitioning, until the entire array is sorted.",
        chartImage: quickChart,
      },
      {
        id: 5,
        name: "Heap Sort",
        coverImage: heapSort,
        description:
          "Heap sorting is a way of sorting elements by using the 'Heap' data structure. The is actually quite similar to the selection sort technique. In order to understand heap sort, you must first understand what heaps are and how they are defined. Basically, a heap is a binary tree with some added rules. The added rules are that, first, the binary tree must be complete. This means that you have to fill all the nodes at one level before adding another one. Secondly, there must be a defined parent/child relationship with the element values of the heap. In a min heap, the value of the parent must be smaller than its children. In a max heap, the value of the parent must be greater than its children. In heap sort, we build a max heap that makes sure the highest value element is at the top. That top element is then swapped with the last element of the heap. The top element is removed and stored on a sorted array. This process is repeated until only one element remains in the heap. One important point is that heaps are not natively supported in JavaScript, therefore we implement heaps using arrays. Although heap sort is complex, its space complexity is excellent.",
        chartImage: heapChart,
      },
      {
        id: 6,
        name: "Merge Sort",
        coverImage: mergeSort,
        description:
          "Merge sort is also a divide and conquer algorithm. It divides the input array into two halves, calls itself recursively on the two halves, and then merges the two sorted halves. In merge sort we divide the array into n arrays until each of the arrays contain only one element. The smaller arrays are merged in order to produce a new array. This is repeated until there is only one array remaining, the original array in its sorted state.",
        chartImage: mergeChart,
      },
      {
        id: 7,
        name: "Radix Sort",
        coverImage: radixSort,
        description:
          "The best time complexity for comparison based sorting algorithms (all of the algorithms we have discussed thus far) is O(nlogn). So how do we do better?  Radix sort is the answer. Radix sort is a non-comparison based sorting algorithm. The radix sort algorithm distributes integers into buckets based on a number's significant digit or value (the radix) to avoid the comparison. The idea of Radix Sort is to do digit by digit sort starting from least significant digit to most significant digit. In other words, the ones place digits are sorted in into buckets first, then the tens place, then the hundreds place, and so on. Radix sort uses another sorting method called counting sort as a subroutine to complete its sort.",
        chartImage: radixChart,
      },
      {
        id: 8,
        name: "Time Complexity",
        coverImage: spaceTimeComplexityGraph,
        description:
          "Time complexity is computational representation that describes the amount of time it takes to run an algorithm to completion. Since an algorithm’s running time may vary among different inputs of the same size, we need to consider worst case time complexity, or the maximum amount of time required for inputs of a given size.  Like space complexity, time complexity is also affected by factors such as the operating system and hardware, that is completely independent of the algorithm itself.  Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that each elementary operation takes a fixed amount of time to perform. Therefore, the amount of time taken and the number of elementary operations performed by the algorithm are assumed to differ by at most a constant factor, and the algorithm that performs a task in the smallest number of operations is considered the most efficient one.  As with space complexity, time complexity is also usually represented with big O notation, considering the worst-case scenario. What you create takes up time, and we need to be prepared for the worst!",
        chartImage: "",
      },
      {
        id: 9,
        name: "Space Complexity",
        coverImage: spaceTimeComplexityGraph,
        description:
          "Space complexity is used to evaluate the use of memory, or data storage. Algorithms require the use of memory to store program instructions, execute (i.e. function calls) and store data. While these are all contributing factors, the stored variable data is often the primary consideration.  Space complexity is equal to the sum of two components: First, a fixed amount of space that is required to store certain data such as variables, constants, program size, etc. and is not dependent on the size of the problem. Second, a variable amount of space that is required by variables and is totally dependent on the size of the problem (i.e. recursion stack space and dynamic memory allocation).  Space complexity is usually represented with big O notation, which considers the worst-case scenario. What you create takes up space, and we need to be prepared for the worst!",
        chartImage: "",
      },
    ]
  }
  arrayOfCards = () => {
    return this.cardObjects().map((card) => {
      return <Card key={card.id} cardObj={card} />
    })
  }
  render() {
    return <div className="row">{this.arrayOfCards()}</div>
  }
}

export default InfoPageContainer
