import React from 'react';
import './Home.css';

const heroBg = '/vector-fondo-tecnologia.jpg'; // Imagen libre de derechos incluida en public

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-header" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay">
          <div className="hero-content fade-in">
            {/* Foto de perfil opcional */}
            {/* <img src="/foto-hero.jpg" alt="Maximiliano Meza" className="hero-profile-pic" /> */}
            <h1 className="hero-title">¡Hola! Soy Maximiliano Meza</h1>
            <h2 className="hero-subtitle">Desarrollador Web Full Stack</h2>
            <p className="hero-value">Transformo ideas en experiencias digitales memorables</p>
            <a href="/Maximiliano_Meza_CV_Dev.pdf" download className="hero-btn">Descargar CV</a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
