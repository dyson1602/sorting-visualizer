import React from "react"

class InfoPage extends React.Component {
  render() {
    return (
      <>
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img
              class="activator"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F83%2FBubblesort-edited-color.svg%2F1200px-Bubblesort-edited-color.svg.png&f=1&nofb=1"
              //   src="../images/bubblesort.jpeg"
            />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              Bubble Sort
            </span>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Bubble Sort<i class="material-icons right">close</i>
            </span>
            <p>
              Bubble Sort is the simplest sorting algorithm that works by <br />
              creating a loop that compares each item in the array with another{" "}
              <br />
              item and repeatedly swapping the adjacent elements if they are in{" "}
              <br />
              wrong order. This process is repeated until the entire array is{" "}
              <br />
              sorted.
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default InfoPage
