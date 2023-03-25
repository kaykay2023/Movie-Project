import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
   <header>
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        {/* <li><a href="about">About</a></li> */}
        
      </ul>
    </nav>
   </header>
  );
}








// {/* <>
      
// <h1>OLUFLIXS</h1>
// <nav className="mainContaainer">
//   <div className="nav-options">

//   </div>

//   <ul> 
//     <li>
//     <a href="/">Movies</a>
    
//      </li>

//      <li>
    
//     <a href="/">Shows</a>
//      </li>




//   </ul>

//   <input type="text" placeholder="Search" />
// </nav>
// </> */}

export default NavBar;
