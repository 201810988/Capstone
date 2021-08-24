import Login from "./js/login"
import Overview from './js/overview';
import Match from './js/match';
import Statistics from './js/statistics';
import Nav from './js/nav';
import "./css/Back.css"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  let [name, setName] = useState("");
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/overview/:name"><Back c1={<Nav name={name}/>} c2={<Overview/>}/></Route>
          <Route path="/match"><Back c1={<Nav name={name}/>} c2={<Match/>}/></Route>
          <Route path="/stat"><Back c1={<Nav name={name}/>} c2={<Statistics/>}/></Route>
          <Route path="/"><Login setName={setName}/></Route>
        </Switch>
      </div>
    </Router>
  );
}

function Back(props) {
  return (
    <section id="back">
      <div className="back_container">
        {props.c1}
        {props.c2}
      </div>
    </section>
  );
}

export default App;
