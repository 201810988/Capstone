import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faUser } from '@fortawesome/free-solid-svg-icons';
import '../css/Avator.css';
import '../css/MatchTail.css';
import '../css/MatchBody.css';
import '../css/MatchHead.css';

/* props 에 대하여

  MatchTail
    {
      mapName : mapId를 가공한 string
      duration : gameDuration 그대로
      creation : gameCraetion 그대로
    }
  Avator
    {
      caption : champLevel 그대로
      name : championName 그대로
    }
  MatchBody
    {
      items: [item0, item1, item2, item3, item4, item5, item6]
      k : kills 그대로
      d : deaths 그대로
      a : assists 그대로
      minion : totalMinionsKilled 그대로
      gold : goldEarned 그대로
    }
  MatchHead
    {
      win: win 그대로 
      mode: gameMode 그대로
      type: gameType 그대로
      queue: queueId 를 가공한 string
      spells: [spell1, spell2] summoner1Id 와 summoner2Id 를 가공한 string
    }
  MatchMox
    {

    }
*/
// function MatchRow(props) {
//   return (

//   );
// }

function MatchHead(props) {
  const spells = props.spells;
  const imgSpells = spells.map((spell) => 
    <img src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${spell}.png`} alt={spell}/>
  )
  return (
    <div className="MatchBox_MatchHead">
      <div className={`Win ${props.win}`}>{props.win ? '승리': '패배'}</div>
      <div>{props.mode} / {props.type}</div>
      <div>{props.queue}</div>
      <div className="SpellList">{imgSpells}</div>
    </div>
  );
}

function MatchBody(props) {
  const items = props.items;
  const imgItems = items.map((item) => {
    if(item !== 0) {
      return <img src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${item}.png`} alt={item}/>;
    } else {
      return <img src="" alt=""/>;
    }
  });
  return (
    <div className="MatchBox_MatchBody">
      <div className="ItemList">
        {imgItems}
      </div>
      <div className="List">
        <div>{`${props.k}/${props.d}/${props.a}`}</div>
        <div>{`${props.minion} `}<FontAwesomeIcon icon={faUser}/></div>
        <div>{`${props.gold.toLocaleString()} `}<FontAwesomeIcon icon={faCoins}/></div>
      </div>
    </div>
  );
}

function MatchTail(props) {

  const duration = (s) => {
    const d = new Date(s+54000000);
    let str = `${d.getMinutes()}:${d.getSeconds()}`;
    return d.getHours() === "0" ? str = `${d.getHours()}:${str}`: str;
  }
  const creation = (s) => {
    const d = new Date(s);
    const str = `${d.getFullYear()}/${d.getMonth().toString().padStart(2, '0')}/${d.getDate().toString().padStart(2, '0')}`;
    return str;
  }

  return (
    <div className="MatchBox_MatchTail">
      <div>{props.mapName}</div>
      <div>{duration(props.duration)} · {creation(props.creation)}</div>
    </div>
  );
}

function Avator(props) {
  return (
    <div className="MatchBox_Avator">
      <img src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${props.name}.png`} alt={props.name}/>
      <span>{props.caption}</span>
    </div>
  );
}

export default MatchHead;