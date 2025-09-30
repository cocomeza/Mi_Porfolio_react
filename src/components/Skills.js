import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaPython, FaPhp, FaJava, FaDocker, FaWordpress, FaGithub, FaTrello } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPostgresql, SiCanva, SiNetlify, SiPostman, SiJira, SiSelenium, SiCypress, SiPlaywright } from 'react-icons/si';
import "./Skills.css";

const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    color: "#667eea",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, level: 90, experience: "3+ años" },
      { name: "CSS3", icon: <FaCss3Alt />, level: 85, experience: "3+ años" },
      { name: "JavaScript", icon: <FaJs />, level: 75, experience: "2+ años" },
      { name: "React", icon: <FaReact />, level: 70, experience: "1+ año" },
      { name: "Bootstrap", icon: <FaBootstrap />, level: 80, experience: "2+ años" },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    color: "#764ba2",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 70, experience: "2+ años" },
      { name: "Python", icon: <FaPython />, level: 60, experience: "1+ año" },
      { name: "PHP", icon: <FaPhp />, level: 55, experience: "1+ año" },
      { name: "Java", icon: <FaJava />, level: 50, experience: "6 meses" },
    ],
  },
  {
    name: "Bases de Datos",
    icon: "🗄️",
    color: "#f5576c",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 65, experience: "1+ año" },
      { name: "MySQL", icon: <SiMysql />, level: 70, experience: "2+ años" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 60, experience: "1+ año" },
    ],
  },
  {
    name: "DevOps & Herramientas",
    icon: "🛠️",
    color: "#4facfe",
    skills: [
      { name: "Docker", icon: <FaDocker />, level: 45, experience: "Aprendiendo" },
      { name: "Git/GitHub", icon: <FaGithub />, level: 75, experience: "2+ años" },
      { name: "WordPress", icon: <FaWordpress />, level: 70, experience: "2+ años" },
      { name: "Netlify", icon: <SiNetlify />, level: 80, experience: "2+ años" },
      { name: "Postman", icon: <SiPostman />, level: 70, experience: "1+ año" },
    ],
  },
  {
    name: "Testing & QA",
    icon: "🧪",
    color: "#fa709a",
    skills: [
      { name: "Selenium", icon: <SiSelenium />, level: 50, experience: "En formación" },
      { name: "Cypress", icon: <SiCypress />, level: 45, experience: "En formación" },
      { name: "Playwright", icon: <SiPlaywright />, level: 40, experience: "En formación" },
      { name: "Karate", icon: "🥋", level: 35, experience: "Iniciando" },
    ],
  },
  {
    name: "Diseño & Marketing",
    icon: "💡",
    color: "#00f2fe",
    skills: [
      { name: "Canva", icon: <SiCanva />, level: 85, experience: "3+ años" },
      { name: "Trello", icon: <FaTrello />, level: 80, experience: "2+ años" },
      { name: "Jira", icon: <SiJira />, level: 60, experience: "1+ año" },
      { name: "Scrum", icon: "🏃", level: 65, experience: "1+ año" },
    ],
  },
];

const proficiencyLevels = [
  { range: [0, 25], label: "Iniciando", color: "#ff6b6b" },
  { range: [26, 50], label: "Básico", color: "#feca57" },
  { range: [51, 75], label: "Intermedio", color: "#48dbfb" },
  { range: [76, 90], label: "Avanzado", color: "#1dd1a1" },
  { range: [91, 100], label: "Experto", color: "#5f27cd" },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getProficiencyLabel = (level) => {
    const proficiency = proficiencyLevels.find(p => level >= p.range[0] && level <= p.range[1]);
    return proficiency ? proficiency.label : "Iniciando";
  };

  const getProficiencyColor = (level) => {
    const proficiency = proficiencyLevels.find(p => level >= p.range[0] && level <= p.range[1]);
    return proficiency ? proficiency.color : "#ff6b6b";
  };

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
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="skills-title">Habilidades y Tecnologías</h1>
          <p className="skills-subtitle">
            Mi stack tecnológico y nivel de competencia en cada área
          </p>
        </motion.div>

        {/* Proficiency Legend */}
        <motion.div 
          className="proficiency-legend"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {proficiencyLevels.map((level) => (
            <div key={level.label} className="legend-item">
              <div 
                className="legend-color" 
                style={{ background: level.color }}
              ></div>
              <span className="legend-label">{level.label}</span>
              <span className="legend-range">({level.range[0]}-{level.range[1]}%)</span>
            </div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className={`skill-category ${selectedCategory === categoryIndex ? 'expanded' : ''}`}
              variants={itemVariants}
              onClick={() => setSelectedCategory(selectedCategory === categoryIndex ? null : categoryIndex)}
              style={{ borderColor: category.color }}
            >
              <div className="category-header" style={{ background: `linear-gradient(135deg, ${category.color}22, ${category.color}11)` }}>
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-name">{category.name}</h3>
                <span className="category-count">{category.skills.length} skills</span>
              </div>

              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{typeof skill.icon === 'string' ? skill.icon : skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-meta">
                        <span className="skill-experience">{skill.experience}</span>
                        <span className="skill-level" style={{ color: getProficiencyColor(skill.level) }}>
                          {getProficiencyLabel(skill.level)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="skill-progress-container">
                      <div className="skill-progress-bg">
                        <motion.div
                          className="skill-progress-bar"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                          style={{ 
                            background: `linear-gradient(90deg, ${category.color}, ${getProficiencyColor(skill.level)})`
                          }}
                        >
                          <span className="skill-percentage">{skill.level}%</span>
                        </motion.div>
                      </div>
                    </div>

                    {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                      <motion.div 
                        className="skill-tooltip"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <p>Experiencia: {skill.experience}</p>
                        <p>Nivel: {getProficiencyLabel(skill.level)}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="summary-card">
            <h3>Stack Principal</h3>
            <div className="main-stack">
              <span className="stack-item">React</span>
              <span className="stack-item">Node.js</span>
              <span className="stack-item">MongoDB</span>
              <span className="stack-item">Express</span>
            </div>
          </div>
          <div className="summary-card">
            <h3>En Aprendizaje</h3>
            <div className="learning-stack">
              <span className="stack-item learning">TypeScript</span>
              <span className="stack-item learning">Next.js</span>
              <span className="stack-item learning">Docker</span>
              <span className="stack-item learning">Testing Automatizado</span>
            </div>
          </div>
          <div className="summary-card">
            <h3>Certificaciones</h3>
            <div className="certifications">
              <span className="cert-item">🎓 Full Stack Developer - Argentina Programa</span>
              <span className="cert-item">📚 QA Testing - En curso</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}