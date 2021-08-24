import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../css/Nav.css";

function Nav(props) {

  let [toggle, setToggle] = useState(false);

  const handleClick = (e) => {
    setToggle(!toggle);
  }

  return (
    <header className={`nav${toggle ? " open" : ""}`}>
      <NavLink exact to="/" className="Login">Login</NavLink>
      <div className={`menu${toggle ? " arrow" : ""}`} onClick={handleClick}></div>
      <nav>
        <ul>
          <li><NavLink to={`/overview/${props.name}`}>Overview</NavLink></li>
          <li><NavLink to="/match">Match</NavLink></li>
          <li><NavLink to="/stat">Statistics</NavLink></li>
        </ul>
      </nav>
      <div className="clearfix"></div>
    </header>
  );
}



export default Nav;