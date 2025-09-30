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
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`about-section ${isVisible ? 'visible' : ''}`} id="about">
      <div className="container">
        <div className="about-header">
          <h1 className="section-title">Sobre Mí</h1>
          <p className="about-intro">
            Conoce más sobre mi trayectoria, experiencia y pasión por el desarrollo web
          </p>
        </div>

        <div className="about-content">
          <div className="about-profile">
            <div className="profile-image-container">
              <img src="/foto-hero.jpeg" alt="Maximiliano Meza" className="about-profile-pic" />
              <div className="profile-badge">
                <span className="badge-text">Full Stack Developer</span>
              </div>
            </div>
            
            <div className="profile-info">
              <h2 className="profile-name">Maximiliano Meza</h2>
              <p className="profile-roles">
                Desarrollador Web Full Stack • Community Manager • Tester QA en formación • Técnico en Turismo y Hotelería
              </p>
              
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Años de Experiencia</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Proyectos Completados</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Clientes Satisfechos</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-story">
            <div className="story-section">
              <h3 className="story-title">Mi Historia</h3>
              <p>
                ¡Hola! Soy Maximiliano Meza, desarrollador web Full Stack argentino y creador de contenido integral en 
                <strong> Botón Creativo</strong>, mi espacio freelance donde diseño, produzco y gestiono soluciones 
                digitales pensadas para emprendedores y pymes.
              </p>
              <p>
                Me dedico a crear sitios web funcionales, catálogos online y contenidos visuales que conectan con la gente. 
                Trabajo todos los días en la producción y publicación de contenido gráfico y audiovisual, adaptado a públicos 
                no técnicos y con foco en claridad, continuidad y presencia digital efectiva.
              </p>
            </div>

            <div className="story-section">
              <h3 className="story-title">Mi Enfoque</h3>
              <p>
                Uso tecnologías como HTML, CSS, JavaScript, React y Node.js, y me apoyo en herramientas modernas y 
                formatos editables para que cada entrega sea práctica, profesional y fácil de actualizar.
              </p>
              <p>
                Además, soy Técnico Superior en Turismo y Hotelería, lo que me da una mirada más humana y empática 
                para entender al usuario final y comunicar de forma clara.
              </p>
            </div>

            <div className="story-section">
              <h3 className="story-title">Mi Objetivo</h3>
              <p>
                Mi objetivo es seguir creciendo como profesional, optimizando cada entrega y ayudando a otros a mejorar 
                su presencia online con soluciones simples, bien pensadas y hechas a medida.
              </p>
            </div>
          </div>

          <div className="about-skills-soft">
            <h3 className="skills-title">Habilidades Blandas</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={skill} className="soft-skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-icon">✨</div>
                  <span className="skill-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-social-section">
            <h3 className="social-title">Conecta Conmigo</h3>
            <p className="social-description">
              Sígueme en mis redes sociales para ver mis últimos proyectos y contenido
            </p>
            <div className="about-social">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Seguir en ${link.name}`}
                  className="about-social-link"
                >
                  <div className="social-icon">{link.icon}</div>
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



