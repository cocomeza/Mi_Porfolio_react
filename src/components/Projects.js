import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiFilter, FiEye } from "react-icons/fi";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Mi Primer Proyecto 2023",
    category: "frontend",
    year: "2023",
    description: "Experiencia increíble aplicando HTML, CSS y Bootstrap. Un proyecto que marcó el inicio de mi carrera en desarrollo web.",
    image: "/primerproyecto2023.png",
    tech: ["HTML", "CSS", "Bootstrap"],
    demo: "https://cocomeza.github.io/cocomeza-PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL.2023.actualizado/",
    code: null,
    featured: true
  },
  {
    id: 2,
    title: "Sistema CRUD con Node.js",
    category: "fullstack",
    year: "2024",
    description: "Sistema completo de CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar recursos en una base de datos MongoDB.",
    image: "/primerproyecto2024.png",
    tech: ["Node.js", "MongoDB", "Express"],
    demo: null,
    code: "https://github.com/cocomeza/MiProyectoCrud.actualizado",
    featured: true
  },
  {
    id: 3,
    title: "Proyecto JavaScript Interactivo",
    category: "frontend",
    year: "2023",
    description: "Consolidación de conocimientos en JavaScript creando interfaces dinámicas e interactivas.",
    image: "/segundoproyecto2023.png",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://cocomeza.github.io/ProyectoIntegradorActualizado/",
    code: null,
    featured: false
  },
  {
    id: 4,
    title: "API Streaming Platform",
    category: "backend",
    year: "2024",
    description: "API RESTful para gestionar contenido de plataforma de streaming con autenticación y gestión de datos.",
    image: "/segundoproyecto2024.png",
    tech: ["Node.js", "Express", "MySQL", "Sequelize"],
    demo: null,
    code: "https://github.com/cocomeza/Trailerflix_API_streaming",
    featured: true
  },
  {
    id: 5,
    title: "Aplicación React",
    category: "frontend",
    year: "2023",
    description: "Proyecto desarrollado con React implementando componentes reutilizables y gestión de estado.",
    image: "/tercerproyecto2023.png",
    tech: ["React", "JavaScript", "CSS"],
    demo: "https://euphonious-mochi-81ead9.netlify.app/",
    code: null,
    featured: false
  },
];

const categories = [
  { id: "all", label: "Todos", icon: "🎯" },
  { id: "frontend", label: "Frontend", icon: "🎨" },
  { id: "backend", label: "Backend", icon: "⚙️" },
  { id: "fullstack", label: "Full Stack", icon: "🚀" }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <h1 className="section-title">
            Mis <span className="gradient-text">Proyectos</span>
          </h1>
          <p className="section-description">
            Una selección de mis trabajos más recientes y destacados
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="filter-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="filter-icon">
            <FiFilter />
          </div>
          <div className="filter-tabs">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="tab-icon">{category.icon}</span>
                <span>{category.label}</span>
                {selectedCategory === category.id && (
                  <motion.div
                    className="tab-indicator"
                    layoutId="tab-indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={item}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -8 }}
              >
                <div className="project-image-wrapper">
                  {project.featured && (
                    <div className="featured-badge">
                      ⭐ Destacado
                    </div>
                  )}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className={`project-overlay ${hoveredProject === project.id ? 'visible' : ''}`}>
                    <div className="overlay-content">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="preview-icon"
                      >
                        <FiEye />
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className="project-category">{project.category}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <motion.span 
                        key={tech} 
                        className="tech-tag"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link demo-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink />
                        <span>Demo en vivo</span>
                      </motion.a>
                    )}
                    {project.code && (
                      <motion.a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link code-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub />
                        <span>Ver código</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>No hay proyectos en esta categoría aún.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}