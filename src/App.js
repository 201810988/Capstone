import Login from "./js/login"
import Overview from './js/overview';
import Match from './js/match';
import Statistics from './js/statistics';
import Nav from './js/nav';

import MatchHead from './js/MatchBox';
import "./css/Back.css"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { useState } from 'react';

import { Context, lol } from './Context';

function App() {

  const setLogin = (b) => {
    setContext({ ...context, login: b });
  }

  const setPW = (p) => {
    setContext({ ...context,  pw: p });
  }

  let [name, setName] = useState("");
  let [context, setContext] = useState({...lol, setLogin, setPW});
  return (
    <Context.Provider value={context}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/overview/:name"><Back c1={<Nav name={name}/>} c2={<Overview/>}/></Route>
            <Route path="/match"><Back c1={<Nav name={name}/>} c2={<Match/>}/></Route>
            <Route path="/stat"><Back c1={<Nav name={name}/>} c2={<Statistics/>}/></Route>
            <Route path="/test"><MatchHead win={true} mode={"CLASSIC"} type={"MATCHED_GAME"} queue={"5v5 Ranked Solo games"} spells={["SummonerFlash", "SummonerDot"]}/></Route>
            <Route path="/"><Login setName={setName}/></Route>
          </Switch>
        </div>
      </Router>
    </Context.Provider>
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
