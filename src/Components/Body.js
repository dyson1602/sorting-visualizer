import React from "react"
import { connect } from "react-redux"
import { BubbleSort } from '../Algorithms/BubbleSort'

class Body extends React.Component {
  
  arrayBars = (array) => {
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
    // console.log(this.props.sortedArray,this.props.randomArray)
    return (
      <div className="container">
          {/* {this.props.sorted ? this.arrayBars(this.props.sortedArray)
          : this.arrayBars(this.props.randomArray)} */}

        {this.arrayBars(this.props.randomArray)}
        {/* {this.arrayBars(BubbleSort(this.props.randomArray))} */}
        {/* {this.arrayBars(this.props.sortedArray)} */}
      </div>
    )
  }
}

function msp(state) {
  return {
    randomArray: state.randomArray,
    sorted: state.sorted,
    sortedArray: state.sortedArray
  }
}

export default connect(msp)(Body)
