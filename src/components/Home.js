import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiDownload, FiArrowRight, FiCode, FiLayers, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.9]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: FiCode,
      title: "Desarrollo Full Stack",
      description: "Creación de aplicaciones web completas con las últimas tecnologías"
    },
    {
      icon: FiLayers,
      title: "Diseño Responsivo",
      description: "Interfaces adaptativas que funcionan en todos los dispositivos"
    },
    {
      icon: FiZap,
      title: "Optimización",
      description: "Código limpio y optimizado para máximo rendimiento"
    }
  ];

  return (
    <div className="home-container">
      <motion.section 
        className="hero-section"
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      >
        {/* Animated Background */}
        <div className="hero-background">
          <motion.div 
            className="gradient-orb gradient-orb-1"
            animate={{
              x: mousePosition.x * 2,
              y: mousePosition.y * 2,
            }}
            transition={{ type: "spring", stiffness: 50 }}
          />
          <motion.div 
            className="gradient-orb gradient-orb-2"
            animate={{
              x: mousePosition.x * -2,
              y: mousePosition.y * -2,
            }}
            transition={{ type: "spring", stiffness: 50 }}
          />
          <div className="grid-pattern" />
        </div>

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            <span className="badge-dot"></span>
            <span>Disponible para proyectos freelance</span>
          </motion.div>

          <motion.div
            className="hero-main"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="hero-title">
              ¡Hola! Soy <span className="gradient-text">Maximiliano Meza</span>
            </h1>
            
            <motion.div 
              className="hero-subtitle-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="hero-subtitle">
                Desarrollador Web Full Stack
              </h2>
            </motion.div>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Transformo ideas en experiencias digitales memorables con código limpio, 
              diseño intuitivo y tecnologías modernas. Especializado en crear soluciones 
              web que impulsan el crecimiento de tu negocio.
            </motion.p>
          </motion.div>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="/Maximiliano_Meza_CV_Dev.pdf"
              download
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              <span>Descargar CV</span>
            </motion.a>
            
            <Link to="/projects">
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Ver Proyectos</span>
                <FiArrowRight />
              </motion.button>
            </Link>
          </motion.div>

          {/* Profile Image with Animation */}
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="hero-image-container">
              <img 
                src="/foto-hero.jpeg" 
                alt="Maximiliano Meza" 
                className="hero-image"
              />
              <motion.div 
                className="hero-image-border"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="scroll-mouse"
          >
            <div className="scroll-wheel"></div>
          </motion.div>
          <span>Scroll para explorar</span>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.h2 
            className="features-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Lo que puedo hacer por ti
          </motion.h2>
          
          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="feature-icon">
                    <Icon />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>¿Listo para llevar tu proyecto al siguiente nivel?</h2>
          <p>Trabajemos juntos para crear algo extraordinario</p>
          <Link to="/contact">
            <motion.button
              className="btn btn-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar Conversación
              <FiArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;