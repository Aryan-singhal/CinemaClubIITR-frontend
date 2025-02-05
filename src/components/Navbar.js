import React from "react";
import "./Navbar.css";
// import zIndex from "@mui/material/styles/zIndex";

function Navbar() {
  let clicked = false;
  return (
    <div className="Navbar-container">
      <div className="logo">
        {/* <img src="C:\Users\DELL\Desktop\cinema-main\cinema-club\src\logo.png" alt="" /> */}
      </div>

      <div className="nav-parent">
        
          <ul className="navbar-content">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Movies">Movies</a>
            </li>
            <li>
              <a href="/Events">Events</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            {/* <li><a href="">FAQs</a></li> */}
          </ul>
        
      </div>
    </div>
  );
}

export default Navbar;
