import React from "react";
import { motion } from "framer-motion";
import { 
  FiExternalLink, 
  FiGlobe, 
  FiUsers, 
  FiCheckCircle,
  FiTrendingUp,
  FiAward
} from "react-icons/fi";
import "./Freelance.css";

const freelanceProjects = [
  {
    title: "Sitio Web Huerta Comunitaria",
    client: "Huerta Comunitaria de Villa Ramallo",
    description: "Desarrollé y puse en producción el sitio web oficial de Huerta Comunitaria de Villa Ramallo, Pcia de Bs As. Creé una experiencia web responsiva y moderna que facilita la comunicación con la comunidad y promueve las actividades de la organización.",
    image: "/huertacomunitaria.png",
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    demo: "https://huertacomunitaria-vr.onrender.com",
    features: ["Diseño Responsivo", "Optimizado SEO", "Formulario de Contacto", "Galería de Imágenes"],
    impact: "Aumento del 200% en la visibilidad online de la organización"
  },
  {
    title: "Sitio Web Iglesia Puerta de Salvación",
    client: "Iglesia Puerta de Salvación",
    description: "Desarrollé y puse en producción el sitio web oficial de la Iglesia Puerta de Salvación. Diseñé una plataforma digital moderna que conecta a la congregación y facilita el acceso a información sobre servicios y eventos.",
    image: "/iglesia.png",
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    demo: "https://iglesiapuertadesalvacion.onrender.com",
    features: ["Calendario de Eventos", "Sección de Sermones", "Información de Contacto", "Diseño Moderno"],
    impact: "Mejora en la comunicación con más de 100 miembros de la comunidad"
  },
];

const services = [
  {
    icon: FiGlobe,
    title: "Desarrollo Web",
    description: "Sitios web personalizados y responsivos"
  },
  {
    icon: FiUsers,
    title: "Community Management",
    description: "Gestión integral de redes sociales"
  },
  {
    icon: FiCheckCircle,
    title: "Consultoría Digital",
    description: "Estrategias para mejorar tu presencia online"
  }
];

export default function Freelance() {
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
    <section className="freelance-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="freelance-header"
        >
          <h1 className="section-title">
            Trabajo <span className="gradient-text">Freelance</span>
          </h1>
          <p className="section-description">
            Proyectos destacados que he desarrollado para clientes reales
          </p>
        </motion.div>

        {/* Services Overview */}
        <motion.div 
          className="services-overview"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Servicios que Ofrezco</h2>
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="service-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <div className="service-icon">
                    <Icon />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Freelance Projects */}
        <motion.div 
          className="freelance-projects"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <h2 className="projects-subtitle">Proyectos Completados</h2>
          <div className="freelance-grid">
            {freelanceProjects.map((project, idx) => (
              <motion.article
                className="freelance-card"
                key={project.title + idx}
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="freelance-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="freelance-image"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-project-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink />
                      <span>Ver Sitio</span>
                    </motion.a>
                  </div>
                </div>

                <div className="freelance-content">
                  <div className="project-header">
                    <h3 className="freelance-title">{project.title}</h3>
                    <span className="client-name">{project.client}</span>
                  </div>

                  <p className="freelance-description">{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((t) => (
                      <span className="tech-tag" key={t}>{t}</span>
                    ))}
                  </div>

                  <div className="project-features">
                    <h4>Características principales:</h4>
                    <ul>
                      {project.features.map((feature, i) => (
                        <li key={i}>
                          <FiCheckCircle className="feature-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-impact">
                    <FiTrendingUp className="impact-icon" />
                    <span>{project.impact}</span>
                  </div>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink />
                    <span>Visitar Sitio Web</span>
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="freelance-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FiAward className="cta-icon" />
          <h2>¿Necesitas un sitio web profesional?</h2>
          <p>Trabajemos juntos para crear una presencia digital que destaque</p>
          <div className="cta-features">
            <span>✓ Diseño Personalizado</span>
            <span>✓ 100% Responsivo</span>
            <span>✓ SEO Optimizado</span>
            <span>✓ Soporte Continuo</span>
          </div>
          <motion.a 
            href="/contact"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Presupuesto
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}