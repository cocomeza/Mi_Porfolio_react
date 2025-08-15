import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import './Navbar.css'; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar" role="banner">
      <div className="container">
        <Link to="/" className="title" onClick={closeMenu}>
          <span className="title-text">Maximiliano Meza</span>
        </Link>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="nav-menu" role="navigation">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            Inicio
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
            aria-current={isActive('/about') ? 'page' : undefined}
          >
            Sobre Mí
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
            onClick={closeMenu}
            aria-current={isActive('/projects') ? 'page' : undefined}
          >
            Proyectos
          </Link>
          <Link 
            to="/freelance" 
            className={`nav-link ${isActive('/freelance') ? 'active' : ''}`}
            onClick={closeMenu}
            aria-current={isActive('/freelance') ? 'page' : undefined}
          >
            Freelance
          </Link>
          <Link 
            to="/skills" 
            className={`nav-link ${isActive('/skills') ? 'active' : ''}`}
            onClick={closeMenu}
            aria-current={isActive('/skills') ? 'page' : undefined}
          >
            Habilidades
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
            aria-current={isActive('/contact') ? 'page' : undefined}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}


