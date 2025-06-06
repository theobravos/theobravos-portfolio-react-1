// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css"; // we’ll add some basic CSS later

export default function Navbar() {
  return (
    <header>
      <nav className="nav-container">
        <div className="logo">Theo Bravos</div>
        <ul className="nav-links">
          <li>
            <Link to="hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}