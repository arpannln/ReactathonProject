
import React from 'react';
import { Link } from 'react-router-dom';
// home, explore, login buttons


const Nav = (props) => {
    return(
      <div>
        <button onClick={()=>props.history.push("/")}>
          Home
        </button>
        <button onClick={()=>props.history.push("/topics")}>
          Explore
        </button>
      </div>
    );
};





export default Nav;
