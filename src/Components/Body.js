import React from "react"
import { connect } from "react-redux"
import { BubbleSort } from "../Algorithms/BubbleSort"
import { randomizeArray } from "../Algorithms/randomArray"

class Body extends React.Component {
  state = {
    array: [],
    sortedArray: [],
    arrayLength: 100,
  }

  //   arrayLengthHandler = (e) => {
  //     this.setState({ arrayLength: e.target.value })
  //     //dispatch array length
  //   }

  arrayBars = (array) => {
    // display: "inline-block"
    //dispatch to set array in state
    let height = "3"
    let width = "3"
    return array.map((number) => (
      <div
        style={{
          display: "inline-block",
          margin: "1px",
          backgroundColor: "red",
          height: `${number}px`,
          width: `${width}px`,
        }}
      ></div>
    ))
  }

  render() {
    return (
      <>
        {/* <form action="#" onChange={this.arrayLengthHandler}>
          <p class="range-field">
            <input type="range" id="test5" min="5" max="100" />
          </p>
        </form> */}
        <br />
        {this.arrayBars(randomizeArray(this.props.arrayLength))}
        <br />
        {this.arrayBars(BubbleSort(randomizeArray(this.props.arrayLength)))}
      </>
    )
  }
}

function msp(state) {
  console.log(state.arrayLength)
  return { arrayLength: state.arrayLength }
}

export default connect(msp)(Body)
