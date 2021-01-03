import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { BubbleSort } from "../Algorithms/BubbleSort"
import { HeapSort } from "../Algorithms/HeapSort"
import { InsertionSort } from "../Algorithms/InsertionSort"
import { MergeSort } from "../Algorithms/MergeSort"
import { QuickSort } from "../Algorithms/QuickSort"
import { generateColorArray, randomizeArray } from "../HelperFunctions/randomArray"
import { SelectionSort } from "../Algorithms/SelectionSort"
import { RadixSort } from "../Algorithms/RadixSort"
import {
  buildBuckets,
  changeBarColor,
  changeBarHeight,
  clearBuckets,
  setColorArray,
  setFinishedSorting,
  setIsSorting,
  setMethod,
  setOffInfo,
  setOnInfo,
  setRandomArray,
  setSortedArray,
  setSpeed,
  swapStyles,
} from "../Redux/actions"

class NavBar extends React.Component {
  state = {
    arrayLength: 50,
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
    this.props.dispatchSetOffInfo()
    this.props.dispatchColorArray(
      generateColorArray(this.state.arrayLength, "red")
    )
    if (this.state.arrayLength < 30) {
      this.props.dispatchSpeed(50)
    } else if (this.state.arrayLength > 60) {
      this.props.dispatchSpeed(5)
    } else {
      this.props.dispatchSpeed(30)
    }
  }

  sortHandler = () => {
    this.props.dispatchSetOffInfo()
    this.props.dispatchSetIsSorting()
    let currentMethod = this.props.method
    switch (currentMethod) {
      case "bubble":
        return BubbleSort(this.props)
      case "heap":
        return HeapSort(this.props)
      case "insertion":
        return InsertionSort(this.props)
      case "quick":
        return QuickSort(this.props)
      case "selection":
        return SelectionSort(this.props)
      case "merge":
        return MergeSort(this.props)
      case "radix":
        return RadixSort(this.props)
      default:
        return BubbleSort(this.props)
    }
  }
  setSortingMethod = (method) => {
    this.props.dispatchMethod(method)
    this.props.dispatchSetOffInfo()
  }

  handleOnInfo = () => {
    this.props.dispatchSetOnInfo()
  }

  render() {
    return (
      <>
        <nav class="nav-extended">
          <div className="nav-wrapper">
            <div className="brand-logo right">Sorting Algorithm Visualizer</div>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>Set Array Size: </li>

              <li>
                <form action="#">
                  <div className="range-field">
                    <input
                      type="range"
                      id="test5"
                      min="10"
                      max="100"
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
                <NavLink to="/sorting-visualizer/">
                  <div
                    onClick={this.props.isSorting ? null : this.newArrayHandler}
                  >
                    Generate New Array
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/sorting-visualizer/">
                  <div
                    onClick={this.props.isSorting ? null : this.sortHandler}
                    style={
                      this.props.onInfo
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    Sort!
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab">
                <NavLink to="/sorting-visualizer/">
                  <div
                    onClick={
                      this.props.isSorting
                        ? null
                        : () => this.setSortingMethod("bubble")
                    }
                    className={this.props.method === "bubble" ? "active" : null}
                  >
                    Bubble Sort
                  </div>
                </NavLink>
              </li>
              <li className="tab">
                <NavLink to="/sorting-visualizer/">
                  <div
                    onClick={
                      this.props.isSorting
                        ? null
                        : () => this.setSortingMethod("insertion")
                    }
                    className={
                      this.props.method === "insertion" ? "active" : null
                    }
                  >
                    Insertion Sort
                  </div>
                </NavLink>
              </li>
              <li className="tab">
                <NavLink to="/sorting-visualizer/">
                  <div
                    onClick={
                      this.props.isSorting
                        ? null
                        : () => this.setSortingMethod("selection")
                    }
                    className={
                      this.props.method === "selection" ? "active" : null
                    }
                  >
                    Selection Sort
                  </div>
                </NavLink>
              </li>
              <li className="tab">
                <NavLink to="/sorting-visualizer/">
                  <div
                    onClick={
                      this.props.isSorting
                        ? null
                        : () => this.setSortingMethod("quick")
                    }
                    className={this.props.method === "quick" ? "active" : null}
                  >
                    Quick Sort
                  </div>
                </NavLink>
              </li>
              <li className="tab">
                <NavLink to="/sorting-visualizer/">
                  <div
                    onClick={
                      this.props.isSorting
                        ? null
                        : () => this.setSortingMethod("heap")
                    }
                    className={this.props.method === "heap" ? "active" : null}
                  >
                    Heap Sort
                  </div>
                </NavLink>
              </li>
              <li className="tab">
                <NavLink to="/sorting-visualizer/">
                  <div
                    onClick={
                      this.props.isSorting
                        ? null
                        : () => this.setSortingMethod("merge")
                    }
                    className={this.props.method === "merge" ? "active" : null}
                  >
                    Merge Sort
                  </div>
                </NavLink>
              </li>
              <li className="tab">
                <NavLink to="/sorting-visualizer/">
                  <div
                    onClick={
                      this.props.isSorting
                        ? null
                        : () => this.setSortingMethod("radix")
                    }
                    className={this.props.method === "radix" ? "active" : null}
                  >
                    Radix
                  </div>
                </NavLink>
              </li>
              <li class="right hide-on-med-and-down tab">
                <NavLink to="/sorting-visualizer/info">
                  <div onClick={this.props.onInfo ? null : this.handleOnInfo}>
                    Algorithm Info
                  </div>
                </NavLink>
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
    speed: state.speed,
    onInfo: state.onInfo,
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
    dispatchSpeed: (speed) => dispatch(setSpeed(speed)),
<<<<<<< HEAD
    buildBuckets: (bucket, height) => dispatch(buildBuckets(bucket, height)),
    clearBuckets: (bucket) => dispatch(clearBuckets(bucket)),
=======
    dispatchSetOnInfo: () => dispatch(setOnInfo()),
    dispatchSetOffInfo: () => dispatch(setOffInfo()),
>>>>>>> cards
  }
}

export default connect(msp, mdp)(NavBar)
