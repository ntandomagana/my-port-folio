import React from "react";
import './Navbar.css';
export default function Navbar(){
    return(
        <nav>
          <div className="nav-logo">
            {/* <h1>Ntando Codes</h1> */}
          </div>
             <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>

        <li><a href="#Projects">Projects</a></li>

        <li><a href="#Contact">Contact</a></li>
      </ul>

        </nav>


    );

}

