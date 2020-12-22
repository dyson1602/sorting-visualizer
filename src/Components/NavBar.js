import React from "react"

class NavBar extends React.Component {

  render() {
    return (
      <>
        <nav>
          <div class="nav-wrapper">
            <a class="brand-logo right">Sorting Algorithm Visualizer</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li>Set Array Size:</li>

              <li>
                <form action="#">
                  <p class="range-field">
                    <input type="range" id="test5" min="10" max="500" />
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

export default NavBar
