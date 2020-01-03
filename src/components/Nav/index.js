import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar">
        <span className="navbar-text">    
      <ul className="">
        <li>
          <a className="brand" href="/">
            Clicky Game
          </a>
        </li>
        <li className="message">{props.message}</li>
        <li className="">
          Current Score: {props.currentScore} | High Score: {props.highScore}
        </li>
      </ul>
      </span>
    </nav>
  );
}

export default Nav;
