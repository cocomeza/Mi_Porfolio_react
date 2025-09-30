import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      <header className="hero-header" role="banner">
        <div className="hero-overlay">
          <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="hero-title animate-fadeInUp" id="hero-title">
              ¡Hola! Soy <span className="gradient-text">Maximiliano Meza</span>
            </h1>
            <h2 className="hero-subtitle animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Desarrollador Web Full Stack
            </h2>
            <p className="hero-value animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Transformo ideas en experiencias digitales memorables
            </p>
            <a 
              href="/Maximiliano_Meza_CV_Dev.pdf" 
              download 
              className="hero-btn animate-fadeInUp" 
              style={{ animationDelay: '0.6s' }}
              aria-label="Descargar CV de Maximiliano Meza en formato PDF"
              role="button"
            >
              Descargar CV
              <span className="sr-only">de Maximiliano Meza</span>
            </a>
          </div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="floating-elements" aria-hidden="true">
          <div className="floating-element floating-element-1"></div>
          <div className="floating-element floating-element-2"></div>
          <div className="floating-element floating-element-3"></div>
        </div>
      </header>
    </div>
  );
};

export default Home;
