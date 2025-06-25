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
        <p>¡Hola! Soy Maximiliano Meza, desarrollador web Full Stack con conocimientos en diseño y programación para la creación de soluciones digitales.

Actualmente me desempeño como freelance en BotonCreativo, un espacio donde transformo ideas en sitios web funcionales para emprendimientos y pymes. Allí diseño y desarrollo páginas web, catálogos online y contenidos visuales pensados para atraer y captar la atención.

Mi enfoque combina el pensamiento creativo con el dominio técnico: trabajo con tecnologías como HTML, CSS, JavaScript y Bootstrap, adaptándome a las necesidades específicas de cada cliente.

También cuento con formación como Técnico Superior en Turismo y Hotelería, lo cual me permite entender mejor al usuario final, comunicar con empatía y crear experiencias digitales más humanas.

Mi misión es seguir creciendo profesionalmente mientras ayudo a otros a potenciar su presencia en línea.</p>
      </section>
      <section className="contact">
        <h2>Contacto</h2>
        <p>¡No dudes en contactarme!</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/maxi-meza" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.facebook.com/share/1BrDede6ZW/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/boton.creativo.ar?igsh=c3NhZXV0OHMwNW81" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </section>
    </div>
  );
};

export default About;

