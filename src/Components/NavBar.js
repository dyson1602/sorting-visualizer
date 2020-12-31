import React from "react"
import { connect } from "react-redux"
import { BubbleSort } from "../Algorithms/BubbleSort"
import { HeapSort } from "../Algorithms/HeapSort"
import { QuickSort } from "../Algorithms/QuickSort"
import { generateColorArray, randomizeArray } from "../Algorithms/randomArray"
import { SelectionSort } from "../Algorithms/SelectionSort"
import { InsertionSort } from "../Algorithms/InsertionSort"
import {
  changeBarColor,
  changeBarHeight,
  setColorArray,
  setFinishedSorting,
  setIsSorting,
  setMethod,
  // setPivot,
  // setQuickTwo,
  setRandomArray,
  // setSorted,
  setSortedArray,
  // setSubArray,
  // setSwap,
  swapStyles,
} from "../Redux/actions"

class NavBar extends React.Component {
  state = {
    arrayLength: 100,
  }

  styleSwapHandler = (e) => {
    let currentStyle = this.props.style
    switch (currentStyle) {
      case "bars":
        return this.props.dispatchStyleSwap("gradient")
      case "gradient":
        return this.props.dispatchStyleSwap("bars")
      default:
        return this.props.dispatchStyleSwap(currentStyle)
    }
  }

  componentDidMount() {
    this.newArrayHandler()
  }

  arrayLengthHandler = (e) => {
    this.setState({ arrayLength: e.target.value }, this.newArrayHandler)
  }

  newArrayHandler = () => {
    this.props.dispatchRandomArray(randomizeArray(this.state.arrayLength))
    this.props.dispatchColorArray(
      generateColorArray(this.state.arrayLength, "red")
    )
  }

  sortHandler = () => {
    this.props.dispatchSetIsSorting()
    let currentMethod = this.props.method
    switch (currentMethod) {
      case "bubble":
        return BubbleSort(
          this.props.randomArray,
          this.state.arrayLength,
          (height, index) => this.props.changeBarHeight(height, index),
          (color, index) => this.props.changeBarColor(color, index),
          1000,
          this.props.arrayColor,
          "yellow",
          "blue",
          this.props.dispatchSetFinishedSorting
        )
      case "heap":
        return HeapSort(
          this.props.randomArray,
          250,
          this.props
        )
      case "insertion":
        return InsertionSort(
          this.props.randomArray,
          this.props
        )
      default:
        return BubbleSort(
          this.props.randomArray,
          this.state.arrayLength,
          (height, index) => this.props.changeBarHeight(height, index),
          (color, index) => this.props.changeBarColor(color, index),
          3,
          this.props.arrayColor,
          "yellow",
          "blue",
          this.props.dispatchSetFinishedSorting
        )
      case "quick":
        // return QuickSort(
        //       //   this.props.randomArray,
        //       //   this.props.arraySize,
        //       //   (height, color) => this.props.changeBarHeight(height, color),
        //       //   (color, index) => this.props.changeBarColor(color, index),
        //       //   500,
        //       //   "red",
        //       //   "yellow",
        //       //   "purple",
        //       //   "blue",
        //       //   this.props.dispatchSetFinishedSorting
        //       // )
        console.log(this.props)
        return QuickSort(this.props.randomArray, this.props)
      case "selection":
        return SelectionSort(this.props)
    }
  }
  setSortingMethod = (method) => {
    this.props.dispatchMethod(method)
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo right">Sorting Algorithm Visualizer</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>Set Array Size: </li>

              <li>
                <form action="#">
                  <div className="range-field">
                    <input
                      type="range"
                      id="test5"
                      min="10"
                      max="200"
                      onChange={
                        this.props.isSorting ? null : this.arrayLengthHandler
                      }
                    />
                  </div>
                </form>
              </li>
              <li>
                <div class="switch">
                  <label>
                    <input type="checkbox" />
                    <span onClick={this.styleSwapHandler} class="lever"></span>
                  </label>
                </div>
              </li>
              <li>
                <a onClick={this.props.isSorting ? null : this.newArrayHandler}>
                  Generate New Array
                </a>
              </li>
              <li>
                <a
                  onClick={
                    this.props.isSorting
                      ? null
                      : () => this.setSortingMethod("bubble")
                  }
                >
                  BubbleSort
                </a>
              </li>
              <li>
                <a
                  onClick={
                    this.props.isSorting
                      ? null
                      : () => this.setSortingMethod("insertion")
                  }
                >
                  Insertion Sort
                </a>
              </li>
              <li>
                <a
                  onClick={
                    this.props.isSorting
                      ? null
                      : () => this.setSortingMethod("heap")
                  }
                >
                  Heap Sort
                </a>
              </li>
              <li>
                <a
                  onClick={
                    this.props.isSorting
                      ? null
                      : () => this.setSortingMethod("quick")
                  }
                >
                  QuickSort
                </a>
              </li>
              <li>
                <a
                  onClick={
                    this.props.isSorting
                      ? null
                      : () => this.setSortingMethod("selection")
                  }
                >
                  SelectionSort
                </a>
              </li>
              <li>
                <a onClick={this.props.isSorting ? null : this.sortHandler}>
                  Sort!
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

function msp(state) {
  return {
    isSorting: state.isSorting,
    randomArray: state.randomArray,
    sortedArray: state.sortedArray,
    style: state.style,
    method: state.method,
    // pivot: state.pivot,
    // swap: state.swap,
    // sorted: state.sorted,
    // quickTwo: state.quickTwo,
  }
}

function mdp(dispatch) {
  return {
    dispatchRandomArray: (randomArray) => dispatch(setRandomArray(randomArray)),
    dispatchSortedArray: (sortedArray) => dispatch(setSortedArray(sortedArray)),
    dispatchSetIsSorting: () => dispatch(setIsSorting()),
    dispatchSetFinishedSorting: () => dispatch(setFinishedSorting()),
    changeBarHeight: (newHeight, index) =>
      dispatch(changeBarHeight(newHeight, index)),
    changeBarColor: (newColor, index) =>
      dispatch(changeBarColor(newColor, index)),
    dispatchStyleSwap: (styleType) => dispatch(swapStyles(styleType)),
    dispatchColorArray: (colorArray) => dispatch(setColorArray(colorArray)),
    dispatchMethod: (methodType) => dispatch(setMethod(methodType)),
    // dispatchSetPivot: (index) => dispatch(setPivot(index)),
    // dispatchSetSubArray: (array) => dispatch(setSubArray(array)),
    // dispatchSetSwap: (array) => dispatch(setSwap(array)),
    // dispatchSetSorted: (array) => dispatch(setSorted(array)),
    // dispatchSetQuickTwo: (array) => dispatch(setQuickTwo(array)),
  }
}

export default connect(msp, mdp)(NavBar)
