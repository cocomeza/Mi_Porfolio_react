import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaInstagram, FaBriefcase, FaGraduationCap, FaHeart } from 'react-icons/fa';
import './About.css';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/maxi-meza',
    icon: <FaLinkedin />,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1BrDede6ZW/',
    icon: <FaFacebook />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/boton.creativo.ar?igsh=c3NhZXV0OHMwNW81',
    icon: <FaInstagram />,
  },
];

const softSkills = [
  { name: 'Comunicación clara', level: 95 },
  { name: 'Pensamiento creativo', level: 90 },
  { name: 'Trabajo en equipo', level: 92 },
  { name: 'Adaptabilidad', level: 88 },
  { name: 'Gestión de proyectos', level: 85 },
  { name: 'Resolución de problemas', level: 90 },
];

const experience = [
  {
    title: 'Desarrollador Web Full Stack Freelance',
    company: 'Botón Creativo',
    period: '2022 - Presente',
    description: 'Desarrollo de sitios web personalizados, catálogos online y soluciones digitales para PyMEs y emprendedores.',
    achievements: [
      'Más de 10 proyectos completados exitosamente',
      'Implementación de soluciones responsive y optimizadas',
      'Gestión integral de contenido digital',
    ]
  },
  {
    title: 'Community Manager',
    company: 'Freelance',
    period: '2021 - Presente',
    description: 'Creación y gestión de contenido para redes sociales, diseño gráfico y estrategias de marketing digital.',
    achievements: [
      'Aumento del engagement en un 150% en clientes',
      'Desarrollo de estrategias de contenido efectivas',
      'Producción de contenido audiovisual',
    ]
  },
];

const education = [
  {
    degree: 'Desarrollador Full Stack',
    institution: 'Argentina Programa / UNTREF',
    year: '2023-2024',
    description: 'Formación intensiva en desarrollo web con tecnologías modernas'
  },
  {
    degree: 'Tester QA',
    institution: 'En formación continua',
    year: '2024',
    description: 'Especialización en testing automatizado y manual'
  },
  {
    degree: 'Técnico Superior en Turismo y Hotelería',
    institution: 'Instituto Superior',
    year: 'Completado',
    description: 'Formación en atención al cliente y gestión de servicios'
  },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <motion.div 
      className="about-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="about-container">
        {/* Hero Section */}
        <motion.div className="about-hero" variants={itemVariants}>
          <div className="about-hero-content">
            <div className="about-image-wrapper">
              <img src="/foto-hero.jpeg" alt="Maximiliano Meza" className="about-profile-pic" />
              <div className="about-image-decoration"></div>
            </div>
            <div className="about-hero-text">
              <h1 className="about-title">Sobre Mí</h1>
              <h2 className="about-subtitle">Desarrollador Full Stack & Creador Digital</h2>
              <p className="about-intro">
                Soy Maximiliano Meza, un apasionado desarrollador web argentino con más de 3 años de experiencia 
                creando soluciones digitales innovadoras. Mi enfoque combina habilidades técnicas sólidas con 
                una visión creativa y orientada al usuario.
              </p>
              <div className="about-social">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="about-social-link"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="about-content-grid">
          {/* Experience Section */}
          <motion.section className="about-experience" variants={itemVariants}>
            <h3 className="section-title">
              <FaBriefcase className="section-icon" />
              Experiencia Profesional
            </h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="timeline-item"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <h5>{exp.company}</h5>
                    <span className="timeline-period">{exp.period}</span>
                    <p>{exp.description}</p>
                    <ul className="achievements">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section className="about-education" variants={itemVariants}>
            <h3 className="section-title">
              <FaGraduationCap className="section-icon" />
              Formación Académica
            </h3>
            <div className="education-grid">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="education-card"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution}</h5>
                  <span className="education-year">{edu.year}</span>
                  <p>{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Soft Skills Section */}
        <motion.section className="about-skills" variants={itemVariants}>
          <h3 className="section-title">
            <FaHeart className="section-icon" />
            Habilidades Blandas
          </h3>
          <div className="skills-grid">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-item"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section className="about-values" variants={itemVariants}>
          <h3 className="section-title">Mis Valores</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h4>Innovación</h4>
              <p>Siempre buscando nuevas formas de resolver problemas y mejorar procesos.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4>Creatividad</h4>
              <p>Combinando diseño y funcionalidad para crear experiencias únicas.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Compromiso</h4>
              <p>Dedicación total a cada proyecto hasta alcanzar los objetivos planteados.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📚</div>
              <h4>Aprendizaje Continuo</h4>
              <p>Actualizándome constantemente con las últimas tecnologías y tendencias.</p>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section className="about-cta" variants={itemVariants}>
          <h3>¿Listo para trabajar juntos?</h3>
          <p>Estoy disponible para nuevos proyectos y oportunidades laborales</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-btn primary">Contáctame</a>
            <a href="/projects" className="cta-btn secondary">Ver Proyectos</a>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;