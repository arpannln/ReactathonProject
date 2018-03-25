
import React from 'react';
import { Link } from 'react-router-dom';
// home, explore, login buttons
import '../styles/navbar.css';


const Nav = (props) => {
    return(
      <div className="outer-div-nav-bar">
        <button className="home-button" onClick={()=>props.history.push("/")}>
          Home
        </button>
        <button className="explore-button" onClick={()=>props.history.push("/topics")}>
          Explore
        </button>
      </div>
    );
};





export default Nav;
