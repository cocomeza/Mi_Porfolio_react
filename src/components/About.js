import React from 'react';
import './About.css';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/maxi-meza',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1BrDede6ZW/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">
        <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.729 0 1.321-.591 1.321-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/boton.creativo.ar?igsh=c3NhZXV0OHMwNW81',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
];

const softSkills = [
  'Comunicación efectiva',
  'Empatía',
  'Pensamiento creativo',
  'Trabajo en equipo',
  'Adaptabilidad',
];

const About = () => {
  return (
    <div className="about-section">
      <div className="about-card">
        <div className="about-header">
          <h2 className="about-title">Desarrollador Web Full Stack</h2>
          <span className="about-subtitle">Conocimientos en Diseño Web con WordPress | Técnico en Turismo y Hotelería</span>
        </div>
        <div className="about-content">
          <img src="/foto-hero.jpg" alt="Imagen de Maximiliano Meza" className="about-profile-pic" />
          <div className="about-text">
            <p>¡Hola! Soy Maximiliano Meza, desarrollador web Full Stack con conocimientos en diseño y programación para la creación de soluciones digitales.</p>
            <p>Actualmente me desempeño como freelance en BotonCreativo, un espacio donde transformo ideas en sitios web funcionales para emprendimientos y pymes. Allí diseño y desarrollo páginas web, catálogos online y contenidos visuales pensados para atraer y captar la atención.</p>
            <p>Mi enfoque combina el pensamiento creativo con el dominio técnico: trabajo con tecnologías como HTML, CSS, JavaScript y Bootstrap, adaptándome a las necesidades específicas de cada cliente.</p>
            <p>Tengo formación como Técnico Superior en Turismo y Hotelería, lo cual me permite entender mejor al usuario final, comunicar con empatía y crear experiencias digitales más humanas. Mi misión es seguir creciendo profesionalmente mientras ayudo a otros a potenciar su presencia en línea.</p>
            <ul className="about-softskills">
              {softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="about-social">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="about-social-link"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

