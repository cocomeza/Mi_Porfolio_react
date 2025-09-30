import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaPalette, 
  FaMobile, 
  FaServer, 
  FaBug, 
  FaUsers,
  FaRocket,
  FaChartLine,
  FaShieldAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Desarrollo Web Full Stack",
    description: "Creación de aplicaciones web completas desde el frontend hasta el backend, utilizando las últimas tecnologías.",
    features: ["React/Vue/Angular", "Node.js/Express", "Bases de datos SQL/NoSQL", "APIs RESTful"],
    price: "Desde $500 USD",
    popular: true
  },
  {
    id: 2,
    icon: <FaPalette />,
    title: "Diseño UI/UX",
    description: "Diseños modernos y atractivos centrados en la experiencia del usuario y la conversión.",
    features: ["Diseño responsivo", "Prototipado", "Wireframes", "Guías de estilo"],
    price: "Desde $300 USD",
    popular: false
  },
  {
    id: 3,
    icon: <FaMobile />,
    title: "Desarrollo Responsive",
    description: "Sitios web que se adaptan perfectamente a todos los dispositivos y tamaños de pantalla.",
    features: ["Mobile-first", "Cross-browser", "PWA", "Optimización de rendimiento"],
    price: "Desde $400 USD",
    popular: false
  },
  {
    id: 4,
    icon: <FaServer />,
    title: "Backend & APIs",
    description: "Desarrollo de servidores robustos y APIs escalables para tus aplicaciones.",
    features: ["Node.js", "Express", "MongoDB/MySQL", "Autenticación JWT"],
    price: "Desde $600 USD",
    popular: false
  },
  {
    id: 5,
    icon: <FaBug />,
    title: "Testing QA",
    description: "Pruebas exhaustivas para garantizar la calidad y funcionamiento de tu software.",
    features: ["Pruebas unitarias", "E2E Testing", "Automatización", "Reportes detallados"],
    price: "Desde $350 USD",
    popular: false
  },
  {
    id: 6,
    icon: <FaUsers />,
    title: "Community Manager",
    description: "Gestión profesional de redes sociales y creación de contenido estratégico.",
    features: ["Estrategia digital", "Contenido creativo", "Análisis de métricas", "Engagement"],
    price: "Desde $250 USD/mes",
    popular: true
  },
  {
    id: 7,
    icon: <FaRocket />,
    title: "Optimización SEO",
    description: "Mejora el posicionamiento de tu sitio web en los motores de búsqueda.",
    features: ["SEO On-page", "SEO técnico", "Análisis de keywords", "Link building"],
    price: "Desde $200 USD",
    popular: false
  },
  {
    id: 8,
    icon: <FaChartLine />,
    title: "Consultoría Digital",
    description: "Asesoramiento experto para llevar tu negocio al siguiente nivel digital.",
    features: ["Análisis de negocio", "Estrategia digital", "Roadmap técnico", "Mentoría"],
    price: "Desde $150 USD/hora",
    popular: false
  },
  {
    id: 9,
    icon: <FaShieldAlt />,
    title: "Mantenimiento Web",
    description: "Mantenimiento continuo y actualizaciones para tu sitio web.",
    features: ["Actualizaciones", "Backups", "Seguridad", "Soporte técnico"],
    price: "Desde $100 USD/mes",
    popular: false
  }
];

const Services = () => {
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
    <section className="services-section">
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="services-title">Mis Servicios</h1>
          <p className="services-subtitle">
            Soluciones digitales personalizadas para impulsar tu negocio
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className={`service-card ${service.popular ? 'popular' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {service.popular && (
                <div className="popular-badge">Más Popular</div>
              )}

              <div className="service-icon">
                {service.icon}
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="service-footer">
                <p className="service-price">{service.price}</p>
                <Link to="/contact">
                  <motion.button 
                    className="service-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contratar
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>¿No encuentras lo que buscas?</h2>
          <p>Contáctame para crear una solución personalizada para tu proyecto</p>
          <Link to="/contact">
            <motion.button 
              className="cta-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Presupuesto Personalizado
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;