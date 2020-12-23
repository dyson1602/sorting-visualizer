import React from "react"
import { connect } from "react-redux"

class Body extends React.Component {

  arrayBars = (array) => {
    let height = "3"
    let width = "3"
    return array.map((number) => (
      <div
        style={{
          display: "inline-block",
          margin: `${200/array.length}px`,
          backgroundColor: "red",
          height: `${number}px`,
          width: `${600/array.length}px`,
        }}
      >
      </div>
    ))
  }

  render() {
    return (
      <div className="container">
        {this.props.sorted ? this.arrayBars(this.props.sortedArray)
          : this.arrayBars(this.props.randomArray)}
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
