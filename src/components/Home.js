import React, { useEffect } from 'react';
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Typed from 'react-typed';
import './Home.css';

const heroBg = '/vector-fondo-tecnologia.jpg';

const Home = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    const handleScroll = () => {
      const scrollBtn = document.querySelector('.scroll-indicator');
      if (scrollBtn) {
        if (window.scrollY > 100) {
          scrollBtn.style.opacity = '0';
        } else {
          scrollBtn.style.opacity = '1';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    window.location.href = '/about';
  };

  return (
    <div className="home-container">
      <header className="hero-header" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            >
              <img src="/foto-hero.jpeg" alt="Maximiliano Meza" className="hero-profile-pic" />
            </motion.div>

            {/* Animated greeting */}
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              ¡Hola! Soy <span className="hero-name">Maximiliano Meza</span>
            </motion.h1>

            {/* Typed subtitle */}
            <h2 className="hero-subtitle">
              <Typed
                strings={[
                  'Desarrollador Web Full Stack',
                  'Community Manager',
                  'Tester QA en formación',
                  'Freelancer Creativo'
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </h2>

            <p className="hero-value">Transformo ideas en experiencias digitales memorables</p>

            {/* Action buttons */}
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a href="/Maximiliano_Meza_CV_Dev.pdf" download className="hero-btn primary">
                <FaDownload className="btn-icon" /> Descargar CV
              </a>
              <a href="/contact" className="hero-btn secondary">
                <FaEnvelope className="btn-icon" /> Contáctame
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div 
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a href="https://www.linkedin.com/in/maxi-meza" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/cocomeza" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:boton.creativo.ar@gmail.com" className="social-link" aria-label="Email">
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={scrollToAbout}
          >
            <FaArrowDown className="scroll-arrow" />
          </motion.div>
        </div>
      </header>

      {/* Quick stats section */}
      <section className="quick-stats">
        <div className="stats-container">
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="stat-number">3+</h3>
            <p className="stat-label">Años de Experiencia</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="stat-number">10+</h3>
            <p className="stat-label">Proyectos Completados</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="stat-number">15+</h3>
            <p className="stat-label">Tecnologías Dominadas</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="stat-number">100%</h3>
            <p className="stat-label">Compromiso</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
