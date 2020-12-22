import React from 'react'
import { BubbleSort } from '../Algorithms/BubbleSort'
import { randomizeArray } from '../Algorithms/randomArray'

class BodyContainer extends React.Component {

  arrayBars = (array) => {
    // display: "inline-block"
    let height = "3"
    let width = "3"
    return array.map(number => <div style={{display: "inline-block", 
    margin: "1px", backgroundColor: "red", height: `${number}px`, width: `${width}px`}}></div>)
  }

  render() {
    return (
      <>
        <h5>I'm in the BodyContainer</h5>
        { this.arrayBars(randomizeArray()) }
        <br/>
        { this.arrayBars(BubbleSort(randomizeArray()))}
      </>
    )
  }
}

export default BodyContainer