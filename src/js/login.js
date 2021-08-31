import "../css/Login.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

let res_name = null; // champion name
let res2 = null; // skin list json

function Login(props) {
  useEffect(() => {
    if(res_name) {
      if(res2) {
        peekSkin(res2, res_name);
      } else {
        fetch(`http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/${res_name}.json`)
            .then(res => res.json())
            .then(data => {
              peekSkin(data, res_name);
            });
      }
    } else {
      fetch('http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json')
        .then(res => res.json())
        .then(data => {
          const name = peekRandomName(data);
          console.log(name); res_name = name;
          fetch(`http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/${res_name}.json`)
            .then(res => res.json())
            .then(data => {
              peekSkin(data, res_name);
            });
        });
    }
  }, []);
  let [name, setName] = useState("");
  const handler = () => {
    props.setName(name);
  }
  return (
    <section id="login">
      <div className="login_container">
        <div className="login_user_signinBx">
          <div className="login_imgBx">
            <img id="login_back" alt=""/>
          </div>
          <div className="login_formBx">
            <form>
              <h2>Start</h2>
              <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)}/>
              <Link to={`/overview/${name}`}>
                <input type="submit" value="Search" onClick={handler}/>
              </Link>
              <p className="login_p">
                상명대학교 캡스톤디자인 2021{" "}
                <a href="https://github.com/YUNJUSEOK/CapstoneDesign" target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function peekNames(champs) {
  return Object.values(champs.data).map( c => 
    c.name
  );
}
function peekRandomName(champs) {
  const names = peekNames(champs);
  const i = Math.floor((Math.random() * names.length));
  return names[i];
}

function peekSkin(skins, name) {
  const skin_num = Object.values(skins.data[name].skins).map( s => {
    return {num: s.num, name: s.name};
  });
  const i = Math.floor((Math.random() * skin_num.length));
  loadSkin(name, skin_num[i].num, skin_num[i].name);
}

function loadSkin(name, i, skin) {
  const img = document.querySelector("#login_back");
  img.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${i}.jpg`;
  img.title = (skin === "default") ? name: skin;
  img.alt = name;
  img.style.opacity = 1;
}


export default Login;