import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Freelance from './Freelance';
import Testimonials from './Testimonials';
import Contact from './Contact';
import './Home.css';

const heroBg = '/vector-fondo-tecnologia.jpg'; // Imagen libre de derechos incluida en public

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-header" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay">
          <div className="hero-content fade-in">
            <img src="/foto-hero.jpeg" alt="Maximiliano Meza - Desarrollador Full Stack" className="hero-profile-pic" />
            <h1 className="hero-title">Maximiliano Meza</h1>
            <h2 className="hero-subtitle">Desarrollador Full Stack & QA Tester</h2>
            <p className="hero-value">Especializado en crear soluciones web escalables y experiencias digitales que impulsan el crecimiento empresarial</p>
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
                <span className="stat-label">Clientes Satisfechos</span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#contact" className="hero-btn primary">Contrátame</a>
              <a href="/Maximiliano_Meza_CV_Dev.pdf" download className="hero-btn secondary">Descargar CV</a>
            </div>
            <div className="hero-tech-stack">
              <span className="tech-label">Tecnologías principales:</span>
              <div className="tech-icons">
                <img src="/React.png" alt="React" className="tech-icon" />
                <img src="/Node.js.png" alt="Node.js" className="tech-icon" />
                <img src="/js.png" alt="JavaScript" className="tech-icon" />
                <img src="/Python.png" alt="Python" className="tech-icon" />
                <img src="/mongoDB.png" alt="MongoDB" className="tech-icon" />
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* All sections in one page */}
      <About />
      <Skills />
      <Projects />
      <Freelance />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
