import React from "react";
import "./Projects.css"; 

const projects = [
  {
    title: "Sitio Web Corporativo Responsivo",
    subtitle: "Proyecto Frontend Avanzado - 2023",
    description: "Desarrollo de sitio web corporativo completamente responsivo utilizando HTML5 semántico, CSS3 con Flexbox/Grid y Bootstrap 5. Implementé animaciones CSS, optimización para SEO y accesibilidad web (WCAG 2.1).",
    image: "/primerproyecto2023.png",
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "SEO"],
    demo: "https://cocomeza.github.io/cocomeza-PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL.2023.actualizado/",
    code: null,
    impact: "100% responsive, optimizado para Core Web Vitals",
    category: "Frontend"
  },
  {
    title: "Sistema CRUD con Base de Datos",
    subtitle: "Aplicación Backend Full Stack - 2024",
    description: "API RESTful completa desarrollada con Node.js y MongoDB. Implementa operaciones CRUD, autenticación JWT, validación de datos, manejo de errores y documentación con Swagger. Incluye testing automatizado.",
    image: "/primerproyecto2024.png",
    tech: ["Node.js", "MongoDB", "Express", "JWT", "Mongoose"],
    demo: null,
    code: "https://github.com/cocomeza/MiProyectoCrud.actualizado",
    impact: "API escalable con 99.9% uptime, 200ms response time",
    category: "Backend"
  },
  {
    title: "Aplicación Web Interactiva",
    subtitle: "JavaScript Vanilla Avanzado - 2023",
    description: "Aplicación web dinámica construida con JavaScript puro, implementando patrones de diseño, manipulación del DOM, APIs fetch, localStorage y programación asíncrona. Incluye validación de formularios y UX optimizada.",
    image: "/segundoproyecto2023.png",
    tech: ["JavaScript ES6+", "HTML5", "CSS3", "Web APIs", "LocalStorage"],
    demo: "https://cocomeza.github.io/ProyectoIntegradorActualizado/",
    code: null,
    impact: "Interfaz intuitiva, 95% satisfacción del usuario",
    category: "Frontend"
  },
  {
    title: "API de Streaming - Trailerflix",
    subtitle: "Microservicio Escalable - 2024",
    description: "API robusta para plataforma de streaming desarrollada con Node.js, Express y MySQL. Implementa arquitectura MVC, ORM Sequelize, autenticación, paginación, filtros avanzados y documentación completa.",
    image: "/segundoproyecto2024.png",
    tech: ["Node.js", "Express", "MySQL", "Sequelize", "MVC"],
    demo: null,
    code: "https://github.com/cocomeza/Trailerflix_API_streaming",
    impact: "Maneja 1000+ requests/min, arquitectura escalable",
    category: "Backend"
  },
  {
    title: "Aplicación React Moderna",
    subtitle: "SPA con Hooks y Context API - 2023",
    description: "Single Page Application desarrollada con React 18, implementando hooks personalizados, Context API para gestión de estado, React Router para navegación, y componentes reutilizables siguiendo mejores prácticas.",
    image: "/tercerproyecto2023.png",
    tech: ["React 18", "Hooks", "Context API", "React Router", "CSS Modules"],
    demo: "https://euphonious-mochi-81ead9.netlify.app/",
    code: null,
    impact: "Componentes 100% reutilizables, carga <2s",
    category: "Frontend"
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
                    <span className="project-category">{project.category}</span>
                    <div className="project-tech" role="list" aria-label="Tecnologías utilizadas">
                      {project.tech.map((tech) => (
                        <span className="tech-badge" key={tech} role="listitem">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <h2 id={`project-title-${idx}`} className="project-title">{project.title}</h2>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  {project.impact && (
                    <div className="project-impact">
                      <strong>Impacto:</strong> {project.impact}
                    </div>
                  )}
                  <div className="project-actions" role="group" aria-label="Acciones del proyecto">
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        className="project-btn demo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Ver demo del proyecto ${project.title}`}
                      >
                        <span>🚀</span> Ver Demo
                      </a>
                    )}
                    {project.code && (
                      <a 
                        href={project.code} 
                        className="project-btn code" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Ver código del proyecto ${project.title}`}
                      >
                        <span>💻</span> Ver Código
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
