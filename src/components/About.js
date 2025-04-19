import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="header">
        <h3>Desarrollador Web Full Stack | Conocimientos en Diseño Web con WordPress | Técnico en Turismo y Hotelería</h3>
      </header>
      <section className="about-me">
        <img src="/foto-hero.jpg" alt="Imagen de Maximiliano Meza" className="profile-pic" />
        <p>
          ¡Bienvenidos a mi portafolio! Soy un apasionado desarrollador web con experiencia en diseño web y desarrollo de identidades visuales.
          Mi misión es transformar ideas en visuales impactantes y efectivos, creando experiencias únicas que conecten con el público y generen resultados exitosos.
        </p>
      </section>
      <section className="contact">
        <h2>Contacto</h2>
        <p>¡No dudes en contactarme!</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/maxi-meza" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.facebook.com/Maximiliano.Jesus.Meza." target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/boton.creativo.ar" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </section>
    </div>
  );
};

export default About;

