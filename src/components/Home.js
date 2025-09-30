import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDownload, FaArrowRight, FaCode, FaRocket, FaPalette } from 'react-icons/fa';
import './Home.css';

const heroBg = '/vector-fondo-tecnologia.jpg';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <FaCode />,
      title: "Desarrollo Full Stack",
      description: "Soluciones completas desde el frontend hasta el backend"
    },
    {
      icon: <FaPalette />,
      title: "Diseño Creativo",
      description: "Interfaces atractivas y experiencias de usuario excepcionales"
    },
    {
      icon: <FaRocket />,
      title: "Optimización",
      description: "Sitios web rápidos, seguros y optimizados para SEO"
    }
  ];

  return (
    <div className="home-container">
      <header className="hero-header" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay">
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img 
              src="/foto-hero.jpeg" 
              alt="Maximiliano Meza" 
              className="hero-profile-pic"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            <motion.h1 className="hero-title" variants={itemVariants}>
              ¡Hola! Soy <span className="hero-name">Maximiliano Meza</span>
            </motion.h1>
            
            <motion.h2 className="hero-subtitle" variants={itemVariants}>
              Desarrollador Web Full Stack
            </motion.h2>
            
            <motion.p className="hero-value" variants={itemVariants}>
              Transformo ideas en experiencias digitales memorables
            </motion.p>
            
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.a 
                href="/Maximiliano_Meza_CV_Dev.pdf" 
                download 
                className="hero-btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Descargar CV
              </motion.a>
              
              <Link to="/projects">
                <motion.button 
                  className="hero-btn secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Proyectos <FaArrowRight />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <section className="home-features">
        <div className="features-container">
          <motion.h2 
            className="features-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Qué puedo hacer por ti?
          </motion.h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
