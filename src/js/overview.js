import { useEffect } from 'react';
import {useParams} from "react-router-dom";

let headers = new Headers();
headers.append('Access-Control-Allow-Headers', "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range");
headers.append('X-Riot-Token','RGAPI-c7e0648c-c291-47e7-8374-098ba716c8dc');



const init = {
  method: 'GET',
  headers,
  mode: 'cors',
};

let summoner = null;

function Overview() {
  let { name } = useParams();
  useEffect(() => {
    if(summoner){
      console.log(summoner);
    } else {
      fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`, init)
        .then(res => res.json())
        .then(data => console.log(data));
    }
  }, []);
  
  return (
    <div>
      <h2>Overview</h2>
      {name}
    </div>
  )
}


export default Overview;