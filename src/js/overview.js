import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { Context } from "../Context";

import '../css/Overview.css';

let summoner = null;

function Overview() {
  let { name } = useParams();
  const lol = useContext(Context);
  useEffect(() => {
    if(lol.login === "Loading") {
      const k = lol.decryption(lol.key, lol.pw);
      fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}/?api_key=${k}`)
        .then(res => res.json())
        .then(data => { 
          summoner = data 
          lol.setLogin(true);
        })
        .catch(e => {
          lol.setLogin(false);
        });
    }
    return () => {summoner = null}
  }, [name, lol]);
  let result;
  
  if(lol.login === "Loading") {
    result = (
      <div className="Loading">
        <FontAwesomeIcon icon={faAsterisk}/>
      </div>
    );
  } else if (lol.login) {
    result = (
      <div className="Success">

      </div>
    );
  } else {
    result = (
      <div className="Error">
        <h2>죄송합니다. 문제가 발생하였습니다!</h2>
      </div>
    );
  }
  
  return (
    <div className="Overview">
      {result}
    </div>
  )
}


export default Overview;