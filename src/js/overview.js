import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { Context } from "../Context";

import '../css/Overview.css';


function Overview(props) {
  const { name } = useParams()
  const context = useContext(Context)
  let r1
  let r2
  let r3
  if (props.name === null) { props.setName(name) }
  else {
    if(props.summoner === "Loading") {
      props.summoner_v4(name)
      r1 = (
        <div className="Loading">
          <FontAwesomeIcon icon={faAsterisk}/>
        </div>
      )
    } else if (props.summoner) {
      
      if (props.league === "Loading") {
        props.league_v4(props.summoner.id)
        r2 = (
          <div className="Loading">
            <FontAwesomeIcon icon={faAsterisk}/>
          </div>
        )
      } else if (props.league) {
        
        if (props.tier === "Loading") {
          r3 = (
            <div className="Loading">
              <FontAwesomeIcon icon={faAsterisk}/>
            </div>
          )
        } else if (props.tier.length !== 0 ) {
          r3 = (
            <div>이미지 로딩 성공!</div>
          )
        } else if (props.tier.length === 0) {
          // 언랭일떄
          r3 = (
            <div>Unranked</div>
          )
        } else {
          r3 = (
            <div>이미지 에러!</div>
          )
        }

        const leagues = props.league.map( l => (
          <div className="League_Box">
            <div>{l.queueType}</div>
            <div>{`${l.tier} ${l.rank} ${l.leaguePoints}`}</div>
            <div>{`${l.wins}승 / ${l.losses}패`}</div>
            <div className="Tier_Img">{r3}</div>
          </div>
        ))

        r2 = (
          <div className="Leagues_Box">
            {leagues}
          </div>
        )

      } else {
        r2 = (
          <div className="Error">
            <h2>죄송합니다. 문제가 발생하였습니다!</h2>
          </div>
        )
      }

      r1 = (
        <div className="Success">
          <div>서머너 정보</div>
          <div className="Sumonner_Box">
            <img src={`${context.cdn}/img/profileicon/${props.summoner.profileIconId}.png`} alt=""/>
            <div>{props.summoner.name}</div>
            <div>{props.summoner.summonerLevel}</div>
          </div>
          <div>리그 정보</div>
          {r2}
        </div>
      )

    } else {
      r1 = (
        <div className="Error">
          <h2>죄송합니다. 문제가 발생하였습니다!</h2>
        </div>
      )
    }
  }
  
  
  return (
    <div className="Overview">
      {r1}
    </div>
  )
}
export default Overview;