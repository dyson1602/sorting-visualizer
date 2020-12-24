import React from "react"
import { connect } from "react-redux"
import '../App.css'

class Body extends React.Component {

  // arrayBars = (array) => {
  //   let height = "3"
  //   let width = "3"
  //   return array.map((number) => (
  //     <div
  //       style={{
  //         display: "inline-block",
  //         margin: `${200/array.length}px`,
  //         backgroundColor: "red",
  //         height: `${number}px`,
  //         width: `${600/array.length}px`,
  //       }}
  //     >
  //     </div>
  //   ))
  // }

  arrayBars = (array) => {
    return array.map((number) => (
      <div
        style={{
          display: "inline-block",
          backgroundColor: `rgba(${number},9,9,${200/number})`,
          display: "inline-block",
          height: "400px",
          width: `${600 / array.length}px`,
          marginTop: '150px'
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
