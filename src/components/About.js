import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiLinkedin, 
  FiFacebook, 
  FiInstagram,
  FiAward,
  FiBriefcase,
  FiUsers,
  FiTarget,
  FiHeart,
  FiStar
} from 'react-icons/fi';
import './About.css';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/maxi-meza',
    icon: FiLinkedin,
    color: '#0077b5'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1BrDede6ZW/',
    icon: FiFacebook,
    color: '#1877f2'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/boton.creativo.ar?igsh=c3NhZXV0OHMwNW81',
    icon: FiInstagram,
    color: '#e4405f'
  },
];

const softSkills = [
  { icon: '💬', skill: 'Comunicación clara y cercana' },
  { icon: '💡', skill: 'Pensamiento creativo' },
  { icon: '👂', skill: 'Empatía y escucha activa' },
  { icon: '🔄', skill: 'Adaptabilidad' },
  { icon: '🤝', skill: 'Trabajo en equipo' },
  { icon: '📊', skill: 'Gestión integral de contenido' },
  { icon: '🎨', skill: 'Optimización visual y funcional' },
];

const achievements = [
  { icon: FiAward, value: '3+', label: 'Años de Experiencia' },
  { icon: FiBriefcase, value: '15+', label: 'Proyectos Completados' },
  { icon: FiUsers, value: '10+', label: 'Clientes Satisfechos' },
  { icon: FiStar, value: '100%', label: 'Compromiso' },
];

const About = () => {
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
    <section className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          <h1 className="section-title">
            Sobre <span className="gradient-text">Mí</span>
          </h1>
          <p className="section-description">
            Conoce más sobre mi trayectoria y lo que me apasiona
          </p>
        </motion.div>

        <div className="about-content">
          {/* Main Card */}
          <motion.div 
            className="about-main-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="about-card-content">
              <div className="about-image-section">
                <motion.div 
                  className="about-image-wrapper"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/foto-hero.jpeg" 
                    alt="Maximiliano Meza" 
                    className="about-image"
                  />
                  <div className="image-decoration"></div>
                </motion.div>
                
                <div className="about-roles">
                  <span className="role-badge primary">Desarrollador Full Stack</span>
                  <span className="role-badge">Community Manager</span>
                  <span className="role-badge">Tester QA en formación</span>
                  <span className="role-badge">Técnico en Turismo</span>
                </div>
              </div>

              <div className="about-text-section">
                <motion.h2 
                  className="about-name"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Maximiliano Meza
                </motion.h2>
                
                <motion.div 
                  className="about-bio"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p>
                    <strong>¡Hola! Soy Maximiliano Meza</strong>, desarrollador web Full Stack argentino 
                    y creador de contenido integral en <span className="highlight">Botón Creativo</span>, 
                    mi espacio freelance donde diseño, produzco y gestiono soluciones digitales 
                    pensadas para emprendedores y pymes.
                  </p>
                  
                  <p>
                    Me dedico a crear <span className="highlight">sitios web funcionales</span>, 
                    catálogos online y contenidos visuales que conectan con la gente. 
                    Trabajo todos los días en la producción y publicación de contenido 
                    gráfico y audiovisual, adaptado a públicos no técnicos y con foco 
                    en claridad, continuidad y presencia digital efectiva.
                  </p>
                  
                  <p>
                    Uso tecnologías como <span className="tech-highlight">HTML, CSS, JavaScript, 
                    Bootstrap, React y Node.js</span>, y me apoyo en herramientas gratuitas 
                    y formatos editables para que cada entrega sea práctica, profesional 
                    y fácil de actualizar.
                  </p>
                  
                  <p>
                    Además, soy <span className="highlight">Técnico Superior en Turismo y Hotelería</span>, 
                    lo que me da una mirada más humana y empática para entender al usuario 
                    final y comunicar de forma clara.
                  </p>
                  
                  <p className="about-goal">
                    <FiTarget className="goal-icon" />
                    Mi objetivo es seguir creciendo como profesional, optimizando cada 
                    entrega y ayudando a otros a mejorar su presencia online con 
                    soluciones simples, bien pensadas y hechas a medida.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="about-social-section">
              <h3>Conecta conmigo</h3>
              <div className="social-links">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      style={{ '--social-color': link.color }}
                    >
                      <Icon />
                      <span className="social-tooltip">{link.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Side Cards */}
          <div className="about-side-cards">
            {/* Soft Skills Card */}
            <motion.div 
              className="skill-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="card-header">
                <FiHeart className="card-icon" />
                <h3>Habilidades Blandas</h3>
              </div>
              <motion.div 
                className="soft-skills-list"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {softSkills.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="soft-skill-item"
                    variants={item}
                    whileHover={{ x: 5 }}
                  >
                    <span className="skill-emoji">{item.icon}</span>
                    <span>{item.skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Achievements Card */}
            <motion.div 
              className="achievement-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="card-header">
                <FiAward className="card-icon" />
                <h3>Logros</h3>
              </div>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="achievement-item"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Icon className="achievement-icon" />
                      <span className="achievement-value">{achievement.value}</span>
                      <span className="achievement-label">{achievement.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="about-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2>¿Listo para trabajar juntos?</h2>
          <p>Transformemos tu idea en una realidad digital</p>
          <div className="cta-buttons">
            <motion.a 
              href="/contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar Ahora
            </motion.a>
            <motion.a 
              href="/projects"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyectos
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;