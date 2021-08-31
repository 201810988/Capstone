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
import JSZip from 'jszip';

function App() {

  const [name, setName] = useState(null)

  const [summoner, setSummoner] = useState("Loading")

  const [league, setLeague] = useState("Loading")

  const [tier, setTier] = useState("Loading")

  const summoner_v4 = (name) => {
    const key = lol.decryption(lol.key, lol.pw);
    fetch(`${lol.kr_host}/summoner/v4/summoners/by-name/${name}?api_key=${key}`)
      .then(res => res.json())
      .then(data => {
        setSummoner(data)
      })
      .catch(e => {
        setSummoner(null)
      })
  }

  const league_v4 = (id) => {
    const key = lol.decryption(lol.key, lol.pw);
    fetch(`${lol.kr_host}/league/v4/entries/by-summoner/${id}?api_key=${key}`)
      .then(res => res.json())
      .then(data => {
        setLeague(data)
      })
      .catch(e => {
        setLeague(null)
      })
  }

  const tier_zip = () => {
    fetch('https://static.developer.riotgames.com/docs/lol/ranked-emblems.zip')
      .then(res => {
        if (res.status === 200 || res.status === 0) {
          return Promise.resolve(res.blob)
        } else {
          return Promise.reject(new Error(res.statusText))
        }
      })
      .then(JSZip.loadAsync)
      .then(zip => {
        setTier(zip)
      })
      .then(function success(text) {}, function error(e) {setTier(null)})
      
  }

  return (
    <Context.Provider value={lol}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/overview/:name"><Back c1={<Nav name={name}/>} c2={<Overview name={name} setName={setName} summoner={summoner} summoner_v4={summoner_v4} league={league} league_v4={league_v4} tier={tier} tier_zip={tier_zip}/>}/></Route>
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
