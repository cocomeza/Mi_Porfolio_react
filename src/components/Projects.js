import React from "react";
import "./Projects.css"; 

const projects = [
  {
  title: "Sitio Web Iglesia Puerta de Salvación",
  subtitle: "HTML5, CSS3 (Bootstrap 5), JavaScript",
  description: "Desarrollé y puse en producción el sitio web oficial de la Iglesia Puerta de Salvación, creando una experiencia web responsiva y moderna usando HTML5, CSS3 personalizado con Bootstrap 5 y JavaScript.",
  link: "https://iglesiapuertadesalvacion.onrender.com",
  },
  {
    title: "¡Mi Primer Proyecto Completado! año 2023",
    subtitle: "HTML, CSS, Bootstrap",
    description: "Este proyecto fue una experiencia increíble que me permitió aplicar lo aprendido en HTML, CSS y Bootstrap.",
    link: "https://cocomeza.github.io/cocomeza-PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL.2023.actualizado/",
  },
  {
    title: "¡Mi Primer Proyecto Completado! año 2024",
    subtitle: "Node.js, MongoDB",
    description: "Proyecto basado en Node.js y MongoDB, que incluye un sistema completo de CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar recursos en una base de datos.",
    link: "https://github.com/cocomeza/MiProyectoCrud.actualizado",
  },
  {
    title: "¡Mi Segundo Proyecto Completado! año 2023",
    subtitle: "HTML, CSS, JavaScript",
    description: "Este proyecto fue una experiencia increíble que me permitió aplicar lo aprendido en HTML, CSS y consolidar mis conocimientos en JavaScript.",
    link: "https://cocomeza.github.io/ProyectoIntegradorActualizado/",
  },
  {
    title: "¡Mi Segundo Proyecto Completado! año 2024",
    subtitle: "Node.js, Express, MySQL, Sequelize",
    description: "API que permite gestionar contenido de una plataforma de streaming. El proyecto está desarrollado con Node.js, Express, MySQL y Sequelize.",
    link: "https://github.com/cocomeza/Trailerflix_API_streaming",
  },
  {
    title: "¡Mi Tercer Proyecto Completado! año 2023",
    subtitle: "React",
    description: "Proyecto realizado con React.",
    link: "https://euphonious-mochi-81ead9.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
       
        <div className="projects-grid">
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="project-item" target="_blank" rel="noopener noreferrer">
              <div className="project-content">
                <div className="project-info">
                  <h2 className="project-subtitle">{project.subtitle}</h2>
                  <h1 className="project-title">{project.title}</h1>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
