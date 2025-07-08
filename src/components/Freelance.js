import React from "react";
import "./Freelance.css";

const freelanceProjects = [
  {
    title: "Sitio Web huertacomunitaria",
    description: "Desarrollé y puse en producción el sitio web oficial de Huerta Comunitaria de Villa Ramallo. Pcia de Bs As, creando una experiencia web responsiva y moderna usando HTML5, CSS3 personalizado con Bootstrap 5 y JavaScript.",
    image: "/huertacomunitaria.png",
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    demo: "https://huertacomunitaria-vr.onrender.com",
  },
  {
    title: "Sitio Web Iglesia Puerta de Salvación",
    description: "Desarrollé y puse en producción el sitio web oficial de la Iglesia Puerta de Salvación, creando una experiencia web responsiva y moderna usando HTML5, CSS3 personalizado con Bootstrap 5 y JavaScript.",
    image: "/iglesia.png",
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    demo: "https://iglesiapuertadesalvacion.onrender.com",
  },
];

export default function Freelance() {
  return (
    <section id="freelance" className="freelance-section">
      <div className="container">
        <h1 className="title">Trabajo Freelance</h1>
        <div className="freelance-grid">
          {freelanceProjects.map((project, idx) => (
            <div className="freelance-item" key={project.title + idx} tabIndex={0} aria-label={project.title}>
              <div className="freelance-content">
                {project.image && (
                  <img src={project.image} alt={project.title} className="freelance-image" />
                )}
                <div className="freelance-info">
                  <div className="freelance-tech">
                    {project.tech.map((t) => (
                      <span className="tech-badge" key={t}>{t}</span>
                    ))}
                  </div>
                  <h2 className="freelance-title">{project.title}</h2>
                  <p className="freelance-description">{project.description}</p>
                  <div className="freelance-actions">
                    {project.demo && (
                      <a href={project.demo} className="project-btn" target="_blank" rel="noopener noreferrer">Ver Sitio</a>
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