
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
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-item" key={project.title + idx} tabIndex={0} aria-label={project.title}>
              <div className="project-content">
                {project.image && (
                  <img src={project.image} alt={project.title} className="project-image" />
                )}
                <div className="project-info">
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span className="tech-badge" key={t}>{t}</span>
                    ))}
                  </div>
                  <h1 className="project-title">{project.title}</h1>
                  <p className="project-description">{project.description}</p>
                  <div className="project-actions">
                    {project.demo && (
                      <a href={project.demo} className="project-btn" target="_blank" rel="noopener noreferrer">Demo</a>
                    )}
                    {project.code && (
                      <a href={project.code} className="project-btn code" target="_blank" rel="noopener noreferrer">Código</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
