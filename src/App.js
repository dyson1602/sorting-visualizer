import { Route, Switch } from "react-router-dom"
import "./App.css"
import NavBar from "./Components/NavBar"
import BodyContainer from "./Containers/BodyContainer"
import InfoPageContainer from "./Containers/InfoPageContainer"

function App() {
  return (
    <>
      <NavBar />
      <br></br>
      <Switch>
        <Route path="/sorting-visualizer/info" component={InfoPageContainer} />
        <Route path="/sorting-visualizer" component={BodyContainer} />
      </Switch>
    </>
  )
}

export default App
