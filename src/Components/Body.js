import React from "react"
import { connect } from "react-redux"
import "../App.css"

class Body extends React.Component {
  arrayBars = (array) => {
    console.log("style: ", this.props.style)
    switch (this.props.style) {
      case "bars":
        console.log(this.props.colorArray)
        // let index = array.indexOf(number)
        return array.map((number) => (
          <div
            style={{
              display: "inline-block",
              margin: `${200 / array.length}px`,
              // backgroundColor: this.props.arrayColor,
              backgroundColor: this.props.colorArray[array.indexOf(number)],
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
              backgroundColor: `rgba(${number * 0.5},9,9,${
                200 / array.length
              })`,
              height: `400px`,
              width: `${1000 / array.length}px`,
              marginTop: "75px",
            }}
          ></div>
        ))
      default:
        return console.log("hello")
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
    style: state.style,
    arrayColor: state.arrayColor,
    colorArray: state.colorArray,
  }
}

export default connect(msp)(Body)
