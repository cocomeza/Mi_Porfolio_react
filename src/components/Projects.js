import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFilter } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Projects.css"; 

const projects = [
  {
    id: 1,
    title: "Mi Primer Proyecto - 2023",
    subtitle: "Proyecto Web Escolar",
    description: "Experiencia increíble aplicando HTML, CSS y Bootstrap. Un proyecto educativo que marcó el inicio de mi carrera como desarrollador.",
    image: "/primerproyecto2023.png",
    tech: ["HTML", "CSS", "Bootstrap"],
    category: "frontend",
    year: 2023,
    demo: "https://cocomeza.github.io/cocomeza-PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL.2023.actualizado/",
    code: null,
    featured: false
  },
  {
    id: 2,
    title: "Sistema CRUD con Node.js",
    subtitle: "Gestión de Base de Datos",
    description: "Sistema completo de CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar recursos en MongoDB. Backend robusto con validaciones y manejo de errores.",
    image: "/primerproyecto2024.png",
    tech: ["Node.js", "MongoDB", "Express"],
    category: "fullstack",
    year: 2024,
    demo: null,
    code: "https://github.com/cocomeza/MiProyectoCrud.actualizado",
    featured: true
  },
  {
    id: 3,
    title: "Proyecto Interactivo JavaScript",
    subtitle: "Aplicación Web Dinámica",
    description: "Consolidación de conocimientos en JavaScript creando una experiencia interactiva y responsiva con manipulación del DOM.",
    image: "/segundoproyecto2023.png",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    year: 2023,
    demo: "https://cocomeza.github.io/ProyectoIntegradorActualizado/",
    code: null,
    featured: false
  },
  {
    id: 4,
    title: "API de Streaming",
    subtitle: "Backend Profesional",
    description: "API REST completa para gestionar contenido de streaming. Arquitectura escalable con Node.js, Express, MySQL y Sequelize ORM.",
    image: "/segundoproyecto2024.png",
    tech: ["Node.js", "Express", "MySQL", "Sequelize"],
    category: "backend",
    year: 2024,
    demo: null,
    code: "https://github.com/cocomeza/Trailerflix_API_streaming",
    featured: true
  },
  {
    id: 5,
    title: "Aplicación React",
    subtitle: "SPA Moderna",
    description: "Single Page Application desarrollada con React, implementando componentes reutilizables y gestión de estado.",
    image: "/tercerproyecto2023.png",
    tech: ["React", "JavaScript", "CSS"],
    category: "frontend",
    year: 2023,
    demo: "https://euphonious-mochi-81ead9.netlify.app/",
    code: null,
    featured: true
  },
];

const categories = [
  { id: "all", name: "Todos", icon: "🚀" },
  { id: "frontend", name: "Frontend", icon: "🎨" },
  { id: "backend", name: "Backend", icon: "⚙️" },
  { id: "fullstack", name: "Full Stack", icon: "💻" }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="container">
        <motion.h1 
          id="projects-title" 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mis Proyectos
        </motion.h1>

        {/* Category Filter */}
        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="filter-header">
            <FaFilter className="filter-icon" />
            <span>Filtrar por categoría:</span>
          </div>
          <div className="filter-buttons">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="filter-emoji">{cat.icon}</span>
                {cat.name}
                {selectedCategory === cat.id && (
                  <motion.span 
                    className="filter-count"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    {filteredProjects.length}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory}
          >
            {filteredProjects.map((project) => (
              <motion.article 
                className={`project-item ${project.featured ? 'featured' : ''}`}
                key={project.id}
                variants={itemVariants}
                layout
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <span>⭐ Destacado</span>
                  </div>
                )}
                
                <div className="project-image-container">
                  <LazyLoadImage
                    src={project.image}
                    alt={`Captura de ${project.title}`}
                    effect="blur"
                    className="project-image"
                    placeholderSrc="/placeholder.jpg"
                  />
                  <div className="project-overlay">
                    <span className="project-year">{project.year}</span>
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <motion.span 
                        className="tech-badge" 
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>

                  <div className="project-actions">
                    {project.demo && (
                      <motion.a 
                        href={project.demo} 
                        className="project-btn demo"
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt /> Demo
                      </motion.a>
                    )}
                    {project.code && (
                      <motion.a 
                        href={project.code} 
                        className="project-btn code"
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub /> Código
                      </motion.a>
                    )}
                  </div>
                </div>

                {hoveredProject === project.id && (
                  <motion.div 
                    className="project-hover-info"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <span className="hover-category">{project.category}</span>
                  </motion.div>
                )}
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>No hay proyectos en esta categoría todavía.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}