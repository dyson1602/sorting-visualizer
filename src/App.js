import { Route, Switch } from "react-router-dom"
import "./App.css"
import InfoPage from "./Components/InfoPage"
import NavBar from "./Components/NavBar"
import BodyContainer from "./Containers/BodyContainer"

function App() {
  return (
    <>
      <NavBar />
      <br></br>
      <Switch>
        <Route path="/sorting-visualizer/info" component={InfoPage} />
        <Route path="/sorting-visualizer" component={BodyContainer} />
      </Switch>
    </>
  )
}

export default App
