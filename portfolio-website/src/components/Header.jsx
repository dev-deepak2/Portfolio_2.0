import React from "react";
import "../Header.css" ;
import About from "../pages/About";

const Header = () => {
  return (
    <div  className="nav-container glass-card">
    <ul className="nav-list">
      <li className="nav-item">
        <a href="#home" className="nav-link active">
          <span className="text">Home</span>
          
        </a>
      </li>

      <li className="nav-item">
        <a href="#about" className="nav-link">
          
          <span className="text">About</span>
          
        </a>
      </li>

      <li className="nav-item">
        <a href="#projects" className="nav-link">
          
          <span className="text">Projects</span>
          
        </a>
      </li>

      <li className="nav-item">
        <a href="#contact" className="nav-link">
          <span className="text">Contact</span>
          
        </a>
      </li>
    </ul>
  </div>
       
  );
};

export default Header;
