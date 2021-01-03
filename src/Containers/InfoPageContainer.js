import React from "react"
import Card from "../Components/Card"

class InfoPageContainer extends React.Component {
  cardObjects = () => {
    return [
      {
        id: 1,
        name: "Bubble Sort",
        coverImage:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F0%2F06%2FBubble-sort.gif&f=1&nofb=1",
        description:
          "Bubble Sort is the simplest sorting algorithm that works by creating a loop that compares each item in the array with another item and repeatedly swapping the adjacent elements if they are in wrong order. This process is repeated until the entire array is sorted.",
        chartImage:
          "https://cdn-images-1.medium.com/max/800/1*1Gumz2N0q1psNJzjn7_RQw.png",
      },
      {
        id: 2,
        name: "Insertion Sort",
        coverImage:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F9c%2FInsertion-sort-example.gif&f=1&nofb=1",
        description:
          "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part. The algorithm's name comes from the process of picking an element and inserting it in its correct place and then repeating it for all elements. It works by assuming the first element in the array is already sorted. It then selects the next element and compares this to all elements in the array. Every element that is greater than the selected element is shifted, and the selected element is inserted. This process is repeated until the array is sorted.",
        chartImage:
          "https://cdn-images-1.medium.com/max/800/1*uvxHKNnP7ZGRiSzLwA3jWw.png",
      },
      {
        id: 3,
        name: "Selection Sort",
        coverImage:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1000%2F1*onU9OmVftR5WeoLWh14iZw.gif&f=1&nofb=1",
        description:
          "The selection sort algorithm sorts an array by repeatedly finding the minimum element from an unsorted portion of an array and putting it at the beginning. It does this by assuming the first element in the array is the smallest one and looping through to compare that value to every other value in the array. If it ever reaches a value smaller than itself, that element is set as the new smallest value and their positions in the array are swapped. The process continues doing comparisons until it reaches the end. The loops starts all over again moving on to the second element in the array as the smallest one. This continues until the entire array is sorted.",
        chartImage:
          "https://cdn-images-1.medium.com/max/800/1*Xq4wGwYOZEMgR2wwIVc2zg.png",
      },
      {
        id: 4,
        name: "Quick Sort",
        coverImage:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QlYf6-SE1Eq0_V-vKm1vtgHaEc%26pid%3DApi&f=1",
        description:
          "Quick sort is one of the most efficient ways of sorting elements in computer systems. It is known as a divide and conquer algorithm. The term 'divide and conquer' means we divide one large problem into several smaller problems and solve the smaller problems to ultimately solve the large problem.  In quick sort, we find a pivot point in the array to compare all other elements in the array. A pivot can be selected in different ways, as the first, last, random, or median element. If an element is smaller than the pivot, it is moved before the pivot. If an element is greater than the pivot, it is moved after the pivot. This is done simultaneously from both ends of the array, with a left pointer (first element) and right pointer (last element), incrementing toward each other and swapping values should they be on the wrong side. Once this is complete, the process continues recursively on the sub arrays, created by dividing the array in half, or partitioning, until the entire array is sorted.",
        chartImage:
          "https://cdn-images-1.medium.com/max/800/1*2XiLP4RhjCPmP9qtsV3e1g.png",
      },
      {
        id: 5,
        name: "Heap Sort",
        coverImage:
          "https://cdn-images-1.medium.com/max/800/0*VoTAH2S3iRdkRdUX.gif",
        description:
          "Heap sorting is a way of sorting elements by using the 'Heap' data structure. The is actually quite similar to the selection sort technique. In order to understand heap sort, you must first understand what heaps are and how they are defined. Basically, a heap is a binary tree with some added rules. The added rules are that, first, the binary tree must be complete. This means that you have to fill all the nodes at one level before adding another one. Secondly, there must be a defined parent/child relationship with the element values of the heap. In a min heap, the value of the parent must be smaller than its children. In a max heap, the value of the parent must be greater than its children. In heap sort, we build a max heap that makes sure the highest value element is at the top. That top element is then swapped with the last element of the heap. The top element is removed and stored on a sorted array. This process is repeated until only one element remains in the heap. One important point is that heaps are not natively supported in JavaScript, therefore we implement heaps using arrays. Although heap sort is complex, its space complexity is excellent.",
        chartImage:
          "https://cdn-images-1.medium.com/max/800/1*5D5k49gL3L15uNq1Mi3GgA.png",
      },
      {
        id: 6,
        name: "Merge Sort",
        coverImage:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fcc%2FMerge-sort-example-300px.gif&f=1&nofb=1",
        description:
          "Merge sort is also a divide and conquer algorithm. It divides the input array into two halves, calls itself recursively on the two halves, and then merges the two sorted halves. In merge sort we divide the array into n arrays until each of the arrays contain only one element. The smaller arrays are merged in order to produce a new array. This is repeated until there is only one array remaining, the original array in its sorted state.",
        chartImage:
          "https://cdn-images-1.medium.com/max/800/1*OG1qF2ZGJ3UyT_Hah1fOLg.png",
      },
      {
        id: 7,
        name: "Radix Sort",
        coverImage:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDKogfISGwMI%2Fmaxresdefault.jpg&f=1&nofb=1",
        description:
          "The best time complexity for comparison based sorting algorithms (all of the algorithms we have discussed thus far) is O(nlogn). So how do we do better?  Radix sort is the answer. Radix sort is a non-comparison based sorting algorithm. The radix sort algorithm distributes integers into buckets based on a number's significant digit or value (the radix) to avoid the comparison. The idea of Radix Sort is to do digit by digit sort starting from least significant digit to most significant digit. In other words, the ones place digits are sorted in into buckets first, then the tens place, then the hundreds place, and so on. Radix sort uses another sorting method called counting sort as a subroutine to complete its sort.",
        chartImage:
          "https://cdn-images-1.medium.com/max/800/1*NdfBcDQCS9XjGRElA0IfSw.png",
      },
      {
        id: 8,
        name: "Time Complexity",
        coverImage:
          "https://cdn-images-1.medium.com/max/800/1*leuidehqYrPSmoBRRjG8zA.png",
        description:
          "The best time complexity for comparison based sorting algorithms (all of the algorithms we have discussed thus far) is O(nlogn). So how do we do better?  Radix sort is the answer. Radix sort is a non-comparison based sorting algorithm. The radix sort algorithm distributes integers into buckets based on a number's significant digit or value (the radix) to avoid the comparison. The idea of Radix Sort is to do digit by digit sort starting from least significant digit to most significant digit. In other words, the ones place digits are sorted in into buckets first, then the tens place, then the hundreds place, and so on. Radix sort uses another sorting method called counting sort as a subroutine to complete its sort.",
        chartImage: "",
      },
      {
        id: 9,
        name: "Space Complexity",
        coverImage:
          "https://cdn-images-1.medium.com/max/800/1*leuidehqYrPSmoBRRjG8zA.png",
        description:
          "Space complexity is used to evaluate the use of memory, or data storage. Algorithms require the use of memory to store program instructions, execute (i.e. function calls) and store data. While these are all contributing factors, the stored variable data is often the primary consideration.  Space complexity is equal to the sum of two components: First, a fixed amount of space that is required to store certain data such as variables, constants, program size, etc. and is not dependent on the size of the problem. Second, a variable amount of space that is required by variables and is totally dependent on the size of the problem (i.e. recursion stack space and dynamic memory allocation).  Space complexity is usually represented with big O notation, which we know considers the worst-case scenario. What you create takes up space, and we need to be prepared for the worst!",
        chartImage: "",
      },
    ]
  }
  arrayOfCards = () => {
    return this.cardObjects().map((card) => {
      return <Card cardObj={card} />
    })
  }
  render() {
    return <div className="row">{this.arrayOfCards()}</div>
  }
}

export default InfoPageContainer
