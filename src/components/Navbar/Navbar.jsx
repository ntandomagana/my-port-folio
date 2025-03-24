import React from "react";
import './Navbar.css';
export default function Navbar(){
  const scrollToSection = (id, event) => {
    event.preventDefault(); 
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
    return(
        <nav>
          
             <ul>
             <li><a href="#" onClick={(e) => scrollToSection("home", e)}>Home</a></li>
        <li><a href="#about" onClick={(e) => scrollToSection("about", e)}>About</a></li>
        <li><a href="#skills" onClick={(e) => scrollToSection("skills", e)}>Skills</a></li>
        <li><a href="#projects" onClick={(e) => scrollToSection("projects", e)}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => scrollToSection("contact", e)}>Contact</a></li>
      </ul>

        </nav>


    );

}

