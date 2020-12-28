import React from "react"
import { connect } from "react-redux"
import "../App.css"

class Body extends React.Component {
  arrayBars = (array) => {
    switch (this.props.style) {
      case "bars":
        let newArray = []
        for (let i = 0; i < array.length; i++) {
          newArray.push(
            <div
              style={{
                display: "inline-block",
                margin: `${200 / array.length}px`,

                backgroundColor: this.props.colorArray[i],
                height: `${array[i]}px`,
                width: `${600 / array.length}px`,
              }}
            ></div>
          )
        }
        return newArray

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
