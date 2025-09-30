import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FiCode, 
  FiDatabase, 
  FiTool, 
  FiCheckCircle,
  FiTrendingUp 
} from "react-icons/fi";
import "./Skills.css";

const skillsData = {
  frontend: {
    title: "Frontend Development",
    icon: FiCode,
    color: "#3b82f6",
    skills: [
      { name: "HTML5", level: 90, icon: "/html.png" },
      { name: "CSS3", level: 85, icon: "/css-3.png" },
      { name: "JavaScript", level: 80, icon: "/js.png" },
      { name: "React", level: 75, icon: "/React.png" },
      { name: "Bootstrap", level: 85, icon: "/Bootstrap.png" },
    ]
  },
  backend: {
    title: "Backend Development",
    icon: FiDatabase,
    color: "#8b5cf6",
    skills: [
      { name: "Node.js", level: 75, icon: "/Node.js.png" },
      { name: "Python", level: 70, icon: "/Python.png" },
      { name: "PHP", level: 65, icon: "/php.png" },
      { name: "Java", level: 60, icon: "/java-logo.webp" },
      { name: "MongoDB", level: 70, icon: "/mongoDB.png" },
      { name: "MySQL", level: 75, icon: "/mysql.png" },
      { name: "PostgreSQL", level: 65, icon: "/PostgreSQL.jpg" },
      { name: "Docker", level: 60, icon: "/Docker.jpg" },
    ]
  },
  tools: {
    title: "Herramientas y Metodologías",
    icon: FiTool,
    color: "#10b981",
    skills: [
      { name: "Git/GitHub", level: 80, icon: "/github.png" },
      { name: "Canva", level: 85, icon: "/Canva.jpg" },
      { name: "Netlify", level: 75, icon: "/Netlify.png" },
      { name: "Postman", level: 70, icon: "/postman.jpg" },
      { name: "WordPress", level: 75, icon: "/wordpress.jpg" },
      { name: "Trello", level: 80, icon: "/Trello.jpg" },
      { name: "Jira", level: 65, icon: "/Jira.jpg" },
      { name: "Scrum", level: 70, icon: "/Scrum.jpg" },
    ]
  },
  testing: {
    title: "Testing & QA",
    icon: FiCheckCircle,
    color: "#f59e0b",
    skills: [
      { name: "Karate", level: 60, icon: "/Karate.jpg" },
      { name: "Playwright", level: 65, icon: "/Playwright.jpg" },
      { name: "Cypress", level: 70, icon: "/Cypress.jpg" },
      { name: "Selenium", level: 65, icon: "/Selenium.png" },
    ]
  }
};

const SkillBar = ({ skill, index, categoryColor }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      className="skill-item"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="skill-header">
        <div className="skill-info">
          <img 
            src={skill.icon} 
            alt={skill.name} 
            className="skill-icon"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <span className="skill-name">{skill.name}</span>
        </div>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar-container">
        <motion.div 
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          style={{ background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}dd)` }}
        >
          <motion.div 
            className="skill-bar-glow"
            animate={{ x: [-100, 200] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="skills-header"
        >
          <h1 className="section-title">
            Habilidades y <span className="gradient-text">Tecnologías</span>
          </h1>
          <p className="section-description">
            Mi stack tecnológico y nivel de dominio en cada área
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="skills-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.entries(skillsData).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={key}
                className={`category-tab ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  borderColor: activeCategory === key ? category.color : 'transparent',
                  background: activeCategory === key ? `${category.color}10` : 'transparent'
                }}
              >
                <Icon style={{ color: category.color }} />
                <span>{category.title}</span>
                {activeCategory === key && (
                  <motion.div
                    className="category-indicator"
                    layoutId="category-indicator"
                    style={{ background: category.color }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-content">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="skills-grid"
          >
            {skillsData[activeCategory].skills.map((skill, index) => (
              <SkillBar 
                key={skill.name}
                skill={skill}
                index={index}
                categoryColor={skillsData[activeCategory].color}
              />
            ))}
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            className="skills-stats"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="stats-header">
              <FiTrendingUp className="stats-icon" />
              <h3>Resumen de Habilidades</h3>
            </div>
            
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">
                  {Object.values(skillsData).reduce((acc, cat) => acc + cat.skills.length, 0)}
                </span>
                <span className="stat-label">Tecnologías</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">3+</span>
                <span className="stat-label">Años de Experiencia</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">15+</span>
                <span className="stat-label">Proyectos Completados</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Dedicación</span>
              </div>
            </div>

            <div className="learning-section">
              <h4>Actualmente aprendiendo:</h4>
              <div className="learning-tags">
                <span className="learning-tag">TypeScript</span>
                <span className="learning-tag">Next.js</span>
                <span className="learning-tag">GraphQL</span>
                <span className="learning-tag">AWS</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div 
          className="experience-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="experience-title">Mi Trayectoria</h2>
          <div className="timeline">
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2024 - Presente</h3>
                <p>Desarrollador Full Stack Freelance</p>
                <span>Creando soluciones web personalizadas para clientes</span>
              </div>
            </motion.div>
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2023 - 2024</h3>
                <p>Formación en Testing QA</p>
                <span>Especialización en pruebas automatizadas y manuales</span>
              </div>
            </motion.div>
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2022 - 2023</h3>
                <p>Inicio en Desarrollo Web</p>
                <span>Aprendizaje de HTML, CSS, JavaScript y frameworks modernos</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}