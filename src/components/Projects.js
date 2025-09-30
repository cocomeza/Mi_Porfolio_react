import React from "react";
import "./Projects.css"; 

const projects = [
  {
    title: "Sitio Web Educativo - UNTREF School",
    subtitle: "Mi primer proyecto web completo",
    description: "Sitio web educativo desarrollado como proyecto integrador, implementando diseño responsivo y mejores prácticas de desarrollo frontend. Incluye secciones informativas, formularios de contacto y navegación intuitiva.",
    image: "/html-css-collage-concept.jpg", // Using existing image as fallback
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    demo: "https://cocomeza.github.io/cocomeza-PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL.2023.actualizado/",
    code: null,
    year: "2023",
    category: "Frontend",
    featured: true
  },
  {
    title: "Sistema CRUD con Node.js",
    subtitle: "API Backend con Base de Datos",
    description: "Sistema completo de gestión de datos con operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Implementa arquitectura RESTful, validación de datos y manejo de errores robusto.",
    image: "/Node.js.png",
    tech: ["Node.js", "MongoDB", "Express", "Mongoose"],
    demo: null,
    code: "https://github.com/cocomeza/MiProyectoCrud.actualizado",
    year: "2024",
    category: "Backend",
    featured: true
  },
  {
    title: "Aplicación Web Interactiva",
    subtitle: "JavaScript Vanilla con DOM Manipulation",
    description: "Aplicación web dinámica que demuestra el manejo avanzado del DOM, eventos de JavaScript y programación orientada a objetos. Incluye funcionalidades interactivas y validación de formularios.",
    image: "/js.png",
    tech: ["HTML5", "CSS3", "JavaScript", "DOM API"],
    demo: "https://cocomeza.github.io/ProyectoIntegradorActualizado/",
    code: null,
    year: "2023",
    category: "Frontend",
    featured: false
  },
  {
    title: "API de Streaming - Trailerflix",
    subtitle: "Backend para Plataforma de Contenido",
    description: "API robusta para gestión de contenido multimedia con autenticación, autorización y manejo de archivos. Implementa patrones de diseño y arquitectura escalable.",
    image: "/mysql.png",
    tech: ["Node.js", "Express", "MySQL", "Sequelize", "JWT"],
    demo: null,
    code: "https://github.com/cocomeza/Trailerflix_API_streaming",
    year: "2024",
    category: "Backend",
    featured: true
  },
  {
    title: "Aplicación React SPA",
    subtitle: "Single Page Application Moderna",
    description: "Aplicación de una sola página desarrollada con React, implementando hooks, context API y routing. Demuestra el manejo de estado y componentes reutilizables.",
    image: "/React.png",
    tech: ["React", "JavaScript", "CSS3", "React Router"],
    demo: "https://euphonious-mochi-81ead9.netlify.app/",
    code: null,
    year: "2023",
    category: "Frontend",
    featured: false
  },
];

export default function Projects() {
  const [filter, setFilter] = React.useState('all');
  const [visibleProjects, setVisibleProjects] = React.useState([]);

  const categories = ['all', 'Frontend', 'Backend'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  React.useEffect(() => {
    // Animate projects on load
    const timer = setTimeout(() => {
      setVisibleProjects(filteredProjects.map((_, idx) => idx));
    }, 100);
    return () => clearTimeout(timer);
  }, [filteredProjects]);

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
        <div className="projects-header">
          <h1 id="projects-title" className="section-title">Mis Proyectos</h1>
          <p className="projects-subtitle">
            Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo web
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filters" role="tablist" aria-label="Filtros de proyectos">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
              role="tab"
              aria-selected={filter === category}
              aria-controls="projects-grid"
            >
              {category === 'all' ? 'Todos' : category}
              <span className="filter-count">
                {category === 'all' ? projects.length : projects.filter(p => p.category === category).length}
              </span>
            </button>
          ))}
        </div>

        <div 
          id="projects-grid"
          className="projects-grid" 
          role="list" 
          aria-label="Lista de proyectos"
        >
          {filteredProjects.map((project, idx) => (
            <article 
              className={`project-card ${project.featured ? 'featured' : ''} ${
                visibleProjects.includes(idx) ? 'visible' : ''
              }`}
              key={`${project.title}-${idx}`} 
              tabIndex={0} 
              role="listitem"
              aria-labelledby={`project-title-${idx}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="project-image-container">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={`Captura de pantalla del proyecto: ${project.title}`} 
                    className="project-image"
                    onError={handleImageError}
                    loading="lazy"
                  />
                )}
                <div className="project-overlay">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Destacado
                    </div>
                  )}
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h2 id={`project-title-${idx}`} className="project-title">{project.title}</h2>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech" role="list" aria-label="Tecnologías utilizadas">
                  {project.tech.map((tech) => (
                    <span className="tech-badge" key={tech} role="listitem">{tech}</span>
                  ))}
                </div>

                <div className="project-actions" role="group" aria-label="Acciones del proyecto">
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      className="btn btn-primary project-btn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Ver demo del proyecto ${project.title}`}
                    >
                      <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Ver Demo
                    </a>
                  )}
                  {project.code && (
                    <a 
                      href={project.code} 
                      className="btn btn-secondary project-btn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Ver código del proyecto ${project.title}`}
                    >
                      <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Ver Código
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No se encontraron proyectos para esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
}
