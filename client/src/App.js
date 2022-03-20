import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailVideogame from "./components/Detail/DetailVideogame";
import Formulario from "./components/Formulario/Formulario";
import Home from "./components/Home/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home"><Home/></Route>
        <Route exact path="/detail/:videogameId"><DetailVideogame/></Route>
        <Route exact path="/create"><Formulario/></Route>
      </Switch>
    </Router>
  );
}

export default App;
