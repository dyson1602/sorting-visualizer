import React from "react"
import { connect } from "react-redux"

class Body extends React.Component {
  radixBars = () => {
    let workingBuckets = [...this.props.bucketsArray]
    let allBuckets = []
    let arraySize = this.props.randomArray.length

    switch (this.props.style) {
      case "bars":
        for (let i = 0; i < workingBuckets.length; i++) {
          let bucket = []
          for (let j = 0; j < workingBuckets[i].length; j++) {
            bucket.push(
              <div
                style={{
                  display: "inline-block",
                  verticalAlign: "top",
                  margin: `${200 / arraySize}px`,
                  backgroundColor: "#829399ff",
                  height: `${workingBuckets[i][j]}px`,
                  width: `${600 / arraySize}px`,
                  borderRadius: "3px",
                }}
              ></div>
            )
          }
          allBuckets.push(
            <div className="col">
              <div style={{ display: "inline-block", margin: "2px" }}>
                {bucket}
              </div>
            </div>
          )
        }
        return allBuckets
      case "gradient":
        for (let i = 0; i < workingBuckets.length; i++) {
          let bucket = []
          for (let j = 0; j < workingBuckets[i].length; j++) {
            bucket.push(
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: `rgba(${workingBuckets[i][j] * 0.5},9,9,${200 / arraySize
                    })`,
                  height: `400px`,
                  width: `${600 / arraySize}px`,
                  borderRadius: "3px",
                }}
              ></div>
            )
          }
          allBuckets.push(
            <div className="col">
              <div style={{ display: "inline-block", margin: "2px" }}>
                {bucket}
              </div>
            </div>
          )
        }
        return allBuckets
    }
  }//radixBars

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
                borderRadius: "3px",
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
              backgroundColor: `rgba(${number * 0.5},9,9,${200 / array.length
                })`,
              height: `400px`,
              width: `${1000 / array.length}px`,
              marginTop: "75px",
              borderRadius: "3px",
            }}
          ></div>
        ))
      default:
        return console.log("hello")
    }
  }

  render() {
    return (
      <>
        {
          this.props.method === "radix"
            ? <div className="container">
              <div style={{ justifyContent: "center" }}>
                {this.arrayBars(this.props.randomArray)}
                <br />
                <div className="row">
                  {this.radixBars(this.props)}
                </div>
              </div>
            </div>
            : <div className="container">
              <div style={{ justifyContent: "center" }}>
                {this.arrayBars(this.props.randomArray)}
              </div>
            </div>
        }
      </>

    )
  }
} //Body

function msp(state) {
  return {
    randomArray: state.randomArray,
    sorted: state.sorted,
    sortedArray: state.sortedArray,
    style: state.style,
    arrayColor: state.arrayColor,
    colorArray: state.colorArray,
    method: state.method,
    bucketsArray: state.bucketsArray
  }
}

export default connect(msp)(Body)
