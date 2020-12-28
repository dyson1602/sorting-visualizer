import React from "react"
import { connect } from "react-redux"
import { BubbleSort } from "../Algorithms/BubbleSort"
import { generateColorArray, randomizeArray } from "../Algorithms/randomArray"
import {
  changeBarColor,
  changeBarHeight,
  setColorArray,
  setRandomArray,
  setSorted,
  setSortedArray,
  setUnsorted,
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
    this.props.dispatchSetUnsorted()
  }

  sortHandler = () => {
    BubbleSort(
      this.props.randomArray,
      this.state.arrayLength,
      (height, index) => this.props.changeBarHeight(height, index),
      (color, index) => this.props.changeBarColor(color, index),
      0,
      this.props.arrayColor,
      "yellow",
      "blue"
    )
    // this.props.dispatchSetSorted()
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
                      onChange={this.arrayLengthHandler}
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
                <a onClick={this.newArrayHandler}>Generate New Array</a>
              </li>
              <li>
                <a onClick={null}>BubbleSort</a>
              </li>
              <li>
                <a onClick={this.sortHandler}>Sort!</a>
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
    sorted: state.sorted,
    randomArray: state.randomArray,
    sortedArray: state.sortedArray,
    style: state.style,
  }
}

function mdp(dispatch) {
  return {
    dispatchRandomArray: (randomArray) => dispatch(setRandomArray(randomArray)),
    dispatchSortedArray: (sortedArray) => dispatch(setSortedArray(sortedArray)),
    dispatchSetSorted: () => dispatch(setSorted()),
    dispatchSetUnsorted: () => dispatch(setUnsorted()),
    changeBarHeight: (newHeight, index) =>
      dispatch(changeBarHeight(newHeight, index)),
    changeBarColor: (newColor, index) =>
      dispatch(changeBarColor(newColor, index)),
    dispatchStyleSwap: (styleType) => dispatch(swapStyles(styleType)),
    dispatchColorArray: (colorArray) => dispatch(setColorArray(colorArray)),
  }
}

export default connect(msp, mdp)(NavBar)
