import React from "react"
import { connect } from "react-redux"
import { setArrayLength } from "../Redux/actions"

class NavBar extends React.Component {
  arrayLengthHandler = (e) => {
    console.log(e.target.value)

    // this.setState({ arrayLength: e.target.value })
    this.props.arrayLength(e.target.value)
    //dispatch array length
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo right">Sorting Algorithm Visualizer</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>Set Array Size:</li>

              <li>
                <form action="#">
                  <p className="range-field">
                    <input
                      type="range"
                      id="test5"
                      min="10"
                      max="200"
                      onChange={this.arrayLengthHandler}
                    />
                  </p>
                </form>
              </li>
              <li>
                <a>Generate New Array</a>
              </li>
              <li>
                <a>Sort!</a>
              </li>
              <li>
                <a>BubbleSort</a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

function mdp(dispatch) {
  console.log("In MDP")
  return { arrayLength: (length) => dispatch(setArrayLength(length)) }
}

export default connect(null, mdp)(NavBar)
