import React from "react";
import "./Projects.css"; 

const projects = [
  {
    title: "¡Mi Primer Proyecto Completado! año 2023",
    subtitle: "HTML, CSS, Bootstrap",
    description: "Este proyecto fue una experiencia increíble que me permitió aplicar lo aprendido en HTML, CSS y Bootstrap.",
    image: "/primerproyecto2023.png",
    tech: ["HTML", "CSS", "Bootstrap"],
    demo: "https://cocomeza.github.io/cocomeza-PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL.2023.actualizado/",
    code: null
  },
  {
    title: "¡Mi Primer Proyecto Completado! año 2024",
    subtitle: "Node.js, MongoDB",
    description: "Proyecto basado en Node.js y MongoDB, que incluye un sistema completo de CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar recursos en una base de datos.",
    image: "/primerproyecto2024.png",
    tech: ["Node.js", "MongoDB"],
    demo: null,
    code: "https://github.com/cocomeza/MiProyectoCrud.actualizado"
  },
  {
    title: "¡Mi Segundo Proyecto Completado! año 2023",
    subtitle: "HTML, CSS, JavaScript",
    description: "Este proyecto fue una experiencia increíble que me permitió aplicar lo aprendido en HTML, CSS y consolidar mis conocimientos en JavaScript.",
    image: "/segundoproyecto2023.png",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://cocomeza.github.io/ProyectoIntegradorActualizado/",
    code: null
  },
  {
    title: "¡Mi Segundo Proyecto Completado! año 2024",
    subtitle: "Node.js, Express, MySQL, Sequelize",
    description: "API que permite gestionar contenido de una plataforma de streaming. El proyecto está desarrollado con Node.js, Express, MySQL y Sequelize.",
    image: "/segundoproyecto2024.png",
    tech: ["Node.js", "Express", "MySQL", "Sequelize"],
    demo: null,
    code: "https://github.com/cocomeza/Trailerflix_API_streaming"
  },
  {
    title: "¡Mi Tercer Proyecto Completado! año 2023",
    subtitle: "React",
    description: "Proyecto realizado con React.",
    image: "/tercerproyecto2023.png",
    tech: ["React"],
    demo: "https://euphonious-mochi-81ead9.netlify.app/",
    code: null
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
                  <div className="project-tech" role="list" aria-label="Tecnologías utilizadas">
                    {project.tech.map((tech) => (
                      <span className="tech-badge" key={tech} role="listitem">{tech}</span>
                    ))}
                  </div>
                  <h2 id={`project-title-${idx}`} className="project-title">{project.title}</h2>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-actions" role="group" aria-label="Acciones del proyecto">
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        className="project-btn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Ver demo del proyecto ${project.title}`}
                      >
                        Demo
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
                        Código
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
