import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="header-overlay">
          <div className="header-content">
            <h1>¡Hola! Soy Maximiliano Meza</h1>
            <h3>Desarrollador Web Full Stack</h3>
            <p>Transformo ideas en experiencias digitales memorables</p>
          </div>
        </div>
      </header>
      <section className="download-cv">
        <h2>Descargar CV</h2>
        <a href="/Maximiliano_Meza_CV_Dev.pdf" download className="download-cv-button">Descargar CV en PDF</a>
      </section>
    </div>
  );
};

export default Home;
