import React from "react";
import "./Navbar.css"; // För styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
