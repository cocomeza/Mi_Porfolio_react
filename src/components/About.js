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
  'Comunicación clara y cercana',
  'Pensamiento creativo',
  'Empatía y escucha activa',
  'Adaptabilidad',
  'Trabajo en equipo',
  'Gestión integral de contenido',
  'Optimización visual y funcional',
];

const About = () => {
  return (
    <div className="about-section">
      <div className="about-card">
        <div className="about-header">
          <h2 className="about-title">Desarrollador Web Full Stack</h2>
          <span className="about-subtitle">Especializado en React, Node.js y MongoDB | Community Manager | Tester QA en formación</span>
        </div>
        <div className="about-content">
          <img src="/foto-hero.jpeg" alt="Maximiliano Meza - Desarrollador Web Full Stack" className="about-profile-pic" />
          <div className="about-text">
            <div className="about-intro">
              <h3>Mi Historia</h3>
              <p>Soy Maximiliano Meza, un desarrollador web Full Stack argentino apasionado por crear soluciones digitales que marquen la diferencia. Mi trayectoria combina formación técnica sólida con una perspectiva humana única, gracias a mi background en Turismo y Hotelería.</p>
            </div>
            
            <div className="about-expertise">
              <h3>Mi Experiencia</h3>
              <p>Me especializo en el desarrollo de aplicaciones web completas usando tecnologías modernas como <strong>React</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong> y <strong>MySQL</strong>. Mi enfoque se centra en crear experiencias de usuario excepcionales y código mantenible.</p>
              <p>Como Community Manager, entiendo la importancia de la comunicación efectiva y la presencia digital estratégica. Esta experiencia me permite desarrollar aplicaciones que no solo funcionan técnicamente, sino que también conectan emocionalmente con los usuarios.</p>
            </div>

            <div className="about-approach">
              <h3>Mi Enfoque</h3>
              <p>Creo en la simplicidad y la claridad. Cada proyecto que desarrollo está pensado para ser intuitivo, escalable y fácil de mantener. Mi objetivo es transformar ideas complejas en soluciones elegantes y funcionales.</p>
              <p>Actualmente estoy expandiendo mis conocimientos en Testing QA, lo que me permite entregar productos de mayor calidad y confiabilidad.</p>
            </div>

            <div className="about-values">
              <h3>Lo que me motiva</h3>
              <p>Me apasiona ayudar a emprendedores y empresas a mejorar su presencia digital. Cada proyecto es una oportunidad de aprender, crecer y crear algo que realmente impacte positivamente en la vida de las personas.</p>
            </div>

            <div className="about-skills-section">
              <h3>Habilidades Clave</h3>
              <ul className="about-softskills">
                {softSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="about-social">
          <h4>Conectemos</h4>
          <div className="social-links">
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
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



