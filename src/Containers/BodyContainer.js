import React from 'react'
import { BubbleSort } from '../Algorithms/BubbleSort'
import { randomizeArray } from '../Algorithms/randomArray'

class BodyContainer extends React.Component {

  state = {
    array: [],
    sortedArray: [],
    arrayLength: 100
  }

  clickHandler = (e) => {
    this.setState({ array: randomizeArray() })
  }

  arraySizeHandler = (e) => {
    this.setState({arrayLength: e.target.value})
  }

  arrayBars = (array) => {
    // display: "inline-block"
    let height = "3"
    let width = "3"
    return array.map(number => <div style={{
      display: "inline-block",
      margin: "1px", backgroundColor: "red", height: `${number}px`, width: `${width}px`
    }}></div>)
  }



  render() {
    return (
      <>
        <h5>I'm in the BodyContainer</h5>
        {/* <button className="button" onClick={this.clickHandler}> Generate New Array </button> */}
        <form action="#" onChange={this.arraySizeHandler}>
          <p class="range-field">
            <input type="range" id="test5" min="5" max="100" />
          </p>
        </form>
        <br />
        { this.arrayBars(randomizeArray(this.state.arrayLength))}
        <br />
        { this.arrayBars(BubbleSort(randomizeArray(this.state.arrayLength)))}
      </>
    )
  }
}

export default BodyContainer