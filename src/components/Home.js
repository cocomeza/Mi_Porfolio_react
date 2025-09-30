import React, { useEffect, useState } from 'react';
import './Home.css';

const heroBg = '/vector-fondo-tecnologia.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Desarrollador Web Full Stack",
    "Community Manager",
    "Tester QA en formación",
    "Técnico en Turismo y Hotelería"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotating roles animation
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <header className="hero-header" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay">
          <div className={`hero-content ${isVisible ? 'animate-in' : ''}`}>
            <div className="hero-profile-container">
              <img src="/foto-hero.jpeg" alt="Maximiliano Meza" className="hero-profile-pic" />
              <div className="hero-status-indicator">
                <span className="status-dot"></span>
                <span className="status-text">Disponible para proyectos</span>
              </div>
            </div>
            
            <div className="hero-text-content">
              <h1 className="hero-greeting">¡Hola! Soy</h1>
              <h2 className="hero-name">Maximiliano Meza</h2>
              <div className="hero-role-container">
                <span className="hero-role-prefix">Soy </span>
                <span className="hero-role-animated" key={currentRole}>
                  {roles[currentRole]}
                </span>
              </div>
              <p className="hero-description">
                Transformo ideas en experiencias digitales memorables, 
                combinando creatividad y tecnología para crear soluciones 
                que conectan con las personas.
              </p>
            </div>

            <div className="hero-actions">
              <a href="/Maximiliano_Meza_CV_Dev.pdf" download className="btn btn-primary hero-btn-primary">
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar CV
              </a>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="btn btn-secondary hero-btn-secondary"
              >
                Ver Proyectos
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Proyectos Completados</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Años de Experiencia</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfacción del Cliente</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-text">Scroll para explorar</span>
        </div>
      </header>
    </div>
  );
};

export default Home;
