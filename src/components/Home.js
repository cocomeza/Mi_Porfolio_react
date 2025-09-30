import React from 'react';
import './Home.css';

const heroBg = '/vector-fondo-tecnologia.jpg'; // Imagen libre de derechos incluida en public

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-header" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay">
          <div className="hero-content fade-in">
            <img src="/foto-hero.jpeg" alt="Maximiliano Meza - Desarrollador Web Full Stack" className="hero-profile-pic" />
            <h1 className="hero-title">¡Hola! Soy Maximiliano Meza</h1>
            <h2 className="hero-subtitle">Desarrollador Web Full Stack</h2>
            <p className="hero-value">Especializado en React, Node.js y MongoDB. Creo soluciones web escalables y experiencias digitales que conectan con los usuarios.</p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Proyectos Completados</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Tecnologías</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Comprometido</span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="/Maximiliano_Meza_CV_Dev.pdf" download className="hero-btn primary">Descargar CV</a>
              <a href="/contact" className="hero-btn secondary">Contáctame</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
