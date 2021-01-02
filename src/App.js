import { Route, Switch } from "react-router-dom"
import "./App.css"
import NavBar from "./Components/NavBar"
import BodyContainer from "./Containers/BodyContainer"

function App() {
  return (
    <>
      <NavBar />
      <br></br>
      <Switch>
        <Route
          path="/sorting-visualizer/info"
          render={() => <h1>Infopage</h1>}
        />
        <Route path="/sorting-visualizer" component={BodyContainer} />
      </Switch>
    </>
  )
}

export default App
