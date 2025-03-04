import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom"; 
import './Navbar.css'; 

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="title">
          <span className="title-text">Maximiliano Meza</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/about" className="nav-link">Sobre Mí</Link>
          <Link to="/projects" className="nav-link">Proyectos</Link>
          <Link to="/skills" className="nav-link">Habilidades</Link>
          <Link to="/contact" className="nav-link">Contacto</Link>
        </nav>
        <Link to="/contact" className="cta-button">
          ¡Contáctame!
          <ArrowRightIcon className="icon" />
        </Link>
      </div>
    </header>
  );
}
