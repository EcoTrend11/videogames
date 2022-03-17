import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailVideogame from "./components/Detail/DetailVideogame";
import Home from "./components/Home/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home"><Home/></Route>
        <Route exact path="/detail/:videogameId"><DetailVideogame/></Route>
      </Switch>
    </Router>
  );
}

export default App;
