import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiBootstrap, SiExpress, SiSequelize } from 'react-icons/si';
import "./Projects.css"; 

const projects = [
  {
    id: 1,
    title: "Sistema de Gestión Escolar",
    subtitle: "Aplicación web completa para gestión educativa",
    description: "Plataforma integral para la administración escolar con módulos de estudiantes, profesores, cursos y calificaciones. Incluye dashboard administrativo y portal para padres.",
    image: "https://via.placeholder.com/600x400/667eea/ffffff?text=Gestión+Escolar",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icons: [<FaReact />, <FaNodeJs />, <SiMongodb />, <SiExpress />],
    demo: "https://cocomeza.github.io/cocomeza-PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL.2023.actualizado/",
    code: "https://github.com/cocomeza",
    featured: true,
    category: "fullstack"
  },
  {
    id: 2,
    title: "E-Commerce Moderno",
    subtitle: "Tienda online con carrito de compras",
    description: "Aplicación de comercio electrónico con catálogo de productos, carrito de compras, sistema de pagos integrado y panel de administración para gestión de inventario.",
    image: "https://via.placeholder.com/600x400/764ba2/ffffff?text=E-Commerce",
    tech: ["React", "Node.js", "MySQL", "Sequelize"],
    icons: [<FaReact />, <FaNodeJs />, <SiMysql />, <SiSequelize />],
    demo: null,
    code: "https://github.com/cocomeza/MiProyectoCrud.actualizado",
    featured: true,
    category: "fullstack"
  },
  {
    id: 3,
    title: "Portfolio Interactivo",
    subtitle: "Sitio web personal con animaciones",
    description: "Portfolio profesional con diseño moderno, animaciones fluidas, modo oscuro y optimizado para SEO. Totalmente responsive y con excelente rendimiento.",
    image: "https://via.placeholder.com/600x400/00d4ff/ffffff?text=Portfolio",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icons: [<FaHtml5 />, <FaCss3 />, <FaJs />, <SiBootstrap />],
    demo: "https://cocomeza.github.io/ProyectoIntegradorActualizado/",
    code: "https://github.com/cocomeza",
    featured: false,
    category: "frontend"
  },
  {
    id: 4,
    title: "API de Streaming",
    subtitle: "Backend para plataforma de contenido",
    description: "API RESTful robusta para gestión de contenido multimedia. Incluye autenticación JWT, upload de archivos, streaming de video y sistema de recomendaciones.",
    image: "https://via.placeholder.com/600x400/ff6b6b/ffffff?text=Streaming+API",
    tech: ["Node.js", "Express", "MySQL", "Sequelize"],
    icons: [<FaNodeJs />, <SiExpress />, <SiMysql />, <SiSequelize />],
    demo: null,
    code: "https://github.com/cocomeza/Trailerflix_API_streaming",
    featured: true,
    category: "backend"
  },
  {
    id: 5,
    title: "Dashboard Analytics",
    subtitle: "Panel de control con métricas en tiempo real",
    description: "Dashboard interactivo con visualización de datos en tiempo real, gráficos dinámicos, exportación de reportes y sistema de alertas personalizables.",
    image: "https://via.placeholder.com/600x400/4ecdc4/ffffff?text=Dashboard",
    tech: ["React", "Chart.js", "Node.js", "WebSocket"],
    icons: [<FaReact />, <FaNodeJs />],
    demo: "https://euphonious-mochi-81ead9.netlify.app/",
    code: "https://github.com/cocomeza",
    featured: false,
    category: "fullstack"
  },
  {
    id: 6,
    title: "Blog CMS",
    subtitle: "Sistema de gestión de contenido",
    description: "CMS personalizado para blogs con editor WYSIWYG, gestión de categorías, sistema de comentarios y optimización SEO automática.",
    image: "https://via.placeholder.com/600x400/95e1d3/ffffff?text=Blog+CMS",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icons: [<FaReact />, <FaNodeJs />, <SiMongodb />, <SiExpress />],
    demo: null,
    code: "https://github.com/cocomeza",
    featured: false,
    category: "fullstack"
  }
];

const categories = [
  { id: 'all', name: 'Todos', icon: '🎯' },
  { id: 'fullstack', name: 'Full Stack', icon: '🚀' },
  { id: 'frontend', name: 'Frontend', icon: '🎨' },
  { id: 'backend', name: 'Backend', icon: '⚙️' }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === 'all' 
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="projects-title">Mis Proyectos</h1>
          <p className="projects-subtitle">
            Explora mi portfolio de proyectos web, desde aplicaciones full-stack hasta soluciones frontend innovadoras
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="category-filter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="category-icon">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          className="featured-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.filter(p => p.featured).map((project) => (
            <motion.article 
              key={project.id}
              className="featured-project"
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
            >
              <div className="featured-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="featured-image"
                />
                <div className="featured-overlay">
                  <div className="featured-tech-icons">
                    {project.icons.map((icon, idx) => (
                      <span key={idx} className="tech-icon">{icon}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="featured-content">
                <span className="featured-badge">Destacado</span>
                <h2 className="featured-title">{project.title}</h2>
                <h3 className="featured-subtitle">{project.subtitle}</h3>
                <p className="featured-description">{project.description}</p>
                <div className="featured-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="featured-actions">
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      className="project-link primary"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Ver Demo
                    </a>
                  )}
                  {project.code && (
                    <a 
                      href={project.code} 
                      className="project-link secondary"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Ver Código
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Regular Projects Grid */}
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.filter(p => !p.featured).map((project) => (
            <motion.article 
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className={`project-overlay ${hoveredProject === project.id ? 'active' : ''}`}>
                  <div className="overlay-content">
                    <div className="overlay-tech-icons">
                      {project.icons.map((icon, idx) => (
                        <span key={idx} className="overlay-icon">{icon}</span>
                      ))}
                    </div>
                    <div className="overlay-actions">
                      {project.demo && (
                        <a 
                          href={project.demo}
                          className="overlay-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Ver demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      {project.code && (
                        <a 
                          href={project.code}
                          className="overlay-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Ver código"
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="project-tech">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tech-badge more">+{project.tech.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>¿Tienes un proyecto en mente?</h3>
          <p>Me encantaría ayudarte a hacerlo realidad</p>
          <a href="/contact" className="cta-button">Hablemos</a>
        </motion.div>
      </div>
    </section>
  );
}