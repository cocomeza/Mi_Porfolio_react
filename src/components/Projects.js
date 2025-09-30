import React from "react";
import "./Projects.css"; 

const projects = [
  {
    title: "E-commerce Responsive",
    subtitle: "HTML, CSS, Bootstrap",
    description: "Sitio web de comercio electrónico completamente responsive desarrollado con HTML5, CSS3 y Bootstrap. Incluye diseño adaptativo, navegación intuitiva y optimización para dispositivos móviles.",
    image: "/primerproyecto2023.png",
    tech: ["HTML5", "CSS3", "Bootstrap"],
    demo: "https://cocomeza.github.io/cocomeza-PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL.2023.actualizado/",
    code: null,
    features: ["Diseño Responsive", "Optimización SEO", "Interfaz Intuitiva"],
    status: "Completado"
  },
  {
    title: "Sistema CRUD con MongoDB",
    subtitle: "Node.js, MongoDB, Express",
    description: "API REST completa para gestión de recursos con operaciones CRUD. Implementa autenticación, validación de datos y conexión robusta con MongoDB. Incluye documentación técnica completa.",
    image: "/primerproyecto2024.png",
    tech: ["Node.js", "MongoDB", "Express"],
    demo: null,
    code: "https://github.com/cocomeza/MiProyectoCrud.actualizado",
    features: ["API REST", "Autenticación", "Validación de Datos"],
    status: "Completado"
  },
  {
    title: "Aplicación Web Interactiva",
    subtitle: "HTML, CSS, JavaScript",
    description: "Aplicación web dinámica con JavaScript vanilla que implementa funcionalidades interactivas avanzadas. Incluye manipulación del DOM, eventos personalizados y animaciones CSS.",
    image: "/segundoproyecto2023.png",
    tech: ["HTML5", "CSS3", "JavaScript ES6+"],
    demo: "https://cocomeza.github.io/ProyectoIntegradorActualizado/",
    code: null,
    features: ["JavaScript Vanilla", "DOM Manipulation", "Animaciones CSS"],
    status: "Completado"
  },
  {
    title: "API de Streaming Platform",
    subtitle: "Node.js, Express, MySQL, Sequelize",
    description: "API completa para plataforma de streaming con gestión de contenido multimedia. Implementa relaciones complejas entre entidades, consultas optimizadas y arquitectura escalable.",
    image: "/segundoproyecto2024.png",
    tech: ["Node.js", "Express", "MySQL", "Sequelize"],
    demo: null,
    code: "https://github.com/cocomeza/Trailerflix_API_streaming",
    features: ["Arquitectura REST", "Base de Datos Relacional", "ORM Sequelize"],
    status: "Completado"
  },
  {
    title: "Portfolio Personal React",
    subtitle: "React, CSS Modules",
    description: "Portfolio personal desarrollado con React que demuestra habilidades en componentes funcionales, hooks, routing y diseño moderno. Implementa mejores prácticas de desarrollo React.",
    image: "/tercerproyecto2023.png",
    tech: ["React", "React Router", "CSS Modules"],
    demo: "https://euphonious-mochi-81ead9.netlify.app/",
    code: null,
    features: ["Componentes React", "React Router", "Responsive Design"],
    status: "Completado"
  },
];

export default function Projects() {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const projectInfo = e.target.parentElement.querySelector('.project-info');
    if (projectInfo) {
      projectInfo.style.paddingTop = '20px';
    }
  };

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="container">
        <h1 id="projects-title" className="section-title">Mis Proyectos</h1>
        <div className="projects-grid" role="list" aria-label="Lista de proyectos">
          {projects.map((project, idx) => (
            <article 
              className="project-item" 
              key={`${project.title}-${idx}`} 
              tabIndex={0} 
              role="listitem"
              aria-labelledby={`project-title-${idx}`}
            >
              <div className="project-content">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={`Captura de pantalla del proyecto: ${project.title}`} 
                    className="project-image"
                    onError={handleImageError}
                    loading="lazy"
                  />
                )}
                <div className="project-info">
                  <div className="project-header">
                    <div className="project-status">{project.status}</div>
                    <h2 id={`project-title-${idx}`} className="project-title">{project.title}</h2>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <h4>Características principales:</h4>
                    <ul>
                      {project.features.map((feature, featureIdx) => (
                        <li key={featureIdx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech" role="list" aria-label="Tecnologías utilizadas">
                    <h4>Tecnologías:</h4>
                    <div className="tech-badges">
                      {project.tech.map((tech) => (
                        <span className="tech-badge" key={tech} role="listitem">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions" role="group" aria-label="Acciones del proyecto">
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        className="project-btn primary" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Ver demo del proyecto ${project.title}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Ver Demo
                      </a>
                    )}
                    {project.code && (
                      <a 
                        href={project.code} 
                        className="project-btn secondary" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Ver código del proyecto ${project.title}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                        </svg>
                        Ver Código
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
