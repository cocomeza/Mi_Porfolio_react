import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import './Navbar.css'; 

// SVG Arrow Right Icon
const ArrowRightIcon = ({ className, ...props }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M13 7l5 5m0 0l-5 5m5-5H6" 
    />
  </svg>
);

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
        
        <Link 
          to="/contact" 
          className="cta-button"
          onClick={closeMenu}
          aria-label="Ir a la página de contacto"
        >
          ¡Contáctame!
          <ArrowRightIcon className="icon" aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
