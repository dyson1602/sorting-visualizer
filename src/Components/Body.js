import React from "react"
import { connect } from "react-redux"

class Body extends React.Component {

  arrayBars = (array) => {
    console.log("style: ", this.props.style)
    switch (this.props.style) {
      case "bars":
        return array.map((number) => (
          <div
            style={{
              display: "inline-block",
              margin: `${200 / array.length}px`,
              backgroundColor: "red",
              height: `${number}px`,
              width: `${600 / array.length}px`,
            }}
          ></div>
        ))
      case "gradient":
        return array.map((number) => (
          <div
            style={{
              display: "inline-block",
              backgroundColor: `rgba(${number*.5},9,9,${200 / array.length})`,
              height: `400px`,
              width: `${1000 / array.length}px`,
              marginTop: "75px"
            }}
          ></div>
        ))
      default:
        return console.log('hello')
    }
  }

  render() {
    return (
      <div className="container">
        {this.props.sorted
          ? this.arrayBars(this.props.sortedArray)
          : this.arrayBars(this.props.randomArray)}
      </div>
    )
  }
}

function msp(state) {
  return {
    randomArray: state.randomArray,
    sorted: state.sorted,
    sortedArray: state.sortedArray,
    style: state.style
  }
}

export default connect(msp)(Body)
