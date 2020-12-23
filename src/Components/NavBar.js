import React from "react"
import { connect } from "react-redux"
import { BubbleSort } from "../Algorithms/BubbleSort"
import { randomizeArray } from "../Algorithms/randomArray"
import { setRandomArray, setSortedArray, setSorted, setUnsorted } from "../Redux/actions"

class NavBar extends React.Component {

  state = {
    arrayLength: 100
  }

  componentDidMount() {
    this.newArrayHandler()
  }

  arrayLengthHandler = (e) => {
    this.setState({ arrayLength: e.target.value },
      this.newArrayHandler)
  }

  newArrayHandler = () => {
    this.props.dispatchRandomArray(randomizeArray(this.state.arrayLength))
    this.props.dispatchSetUnsorted()
  }

  sortHandler = () => {
    this.props.dispatchSortedArray(BubbleSort(this.props.randomArray))
    this.props.dispatchSetSorted()
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
    sortedArray: state.sortedArray
  }
}

function mdp(dispatch) {
  return {
    dispatchRandomArray: (randomArray) => dispatch(setRandomArray(randomArray)),
    dispatchSortedArray: (sortedArray) => dispatch(setSortedArray(sortedArray)),
    dispatchSetSorted: () => dispatch(setSorted()),
    dispatchSetUnsorted: () => dispatch(setUnsorted())
  }
}

export default connect(msp, mdp)(NavBar)
