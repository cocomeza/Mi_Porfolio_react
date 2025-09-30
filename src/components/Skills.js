import React from "react";
import "./Skills.css";

const categories = [
  {
    name: "Frontend Development",
    description: "Tecnologías para crear interfaces de usuario modernas y responsivas",
    skills: [
      { name: "HTML5", image: "/html.png", level: "Avanzado", experience: "2+ años" },
      { name: "CSS3", image: "/css-3.png", level: "Avanzado", experience: "2+ años" },
      { name: "JavaScript", image: "/js.png", level: "Intermedio", experience: "2+ años" },
      { name: "React", image: "/React.png", level: "Intermedio", experience: "1+ año" },
      { name: "Bootstrap", image: "/Bootstrap.png", level: "Avanzado", experience: "2+ años" },
    ],
  },
  {
    name: "Backend Development",
    description: "Desarrollo de APIs, bases de datos y arquitectura del servidor",
    skills: [
      { name: "Node.js", image: "/Node.js.png", level: "Intermedio", experience: "1+ año" },
      { name: "Python", image: "/Python.png", level: "Básico", experience: "6+ meses" },
      { name: "PHP", image: "/php.png", level: "Básico", experience: "6+ meses" },
      { name: "Java", image: "/java-logo.webp", level: "Básico", experience: "6+ meses" },
      { name: "Express.js", image: "/Node.js.png", level: "Intermedio", experience: "1+ año" },
    ],
  },
  {
    name: "Bases de Datos",
    description: "Gestión y diseño de bases de datos relacionales y NoSQL",
    skills: [
      { name: "MongoDB", image: "/mongoDB.png", level: "Intermedio", experience: "1+ año" },
      { name: "MySQL", image: "/mysql.png", level: "Intermedio", experience: "1+ año" },
      { name: "PostgreSQL", image: "/PostgreSQL.jpg", level: "Básico", experience: "6+ meses" },
    ],
  },
  {
    name: "DevOps & Herramientas",
    description: "Herramientas de desarrollo, despliegue y gestión de proyectos",
    skills: [
      { name: "Git & GitHub", image: "/github.png", level: "Intermedio", experience: "2+ años" },
      { name: "Docker", image: "/Docker.jpg", level: "Básico", experience: "6+ meses" },
      { name: "Netlify", image: "/Netlify.png", level: "Intermedio", experience: "1+ año" },
      { name: "Postman", image: "/postman.jpg", level: "Intermedio", experience: "1+ año" },
      { name: "WordPress", image: "/wordpress.jpg", level: "Intermedio", experience: "1+ año" },
    ],
  },
  {
    name: "Testing & QA",
    description: "Herramientas y metodologías para asegurar la calidad del software",
    skills: [
      { name: "Karate DSL", image: "/Karate.jpg", level: "Básico", experience: "En formación" },
      { name: "Playwright", image: "/Playwright.jpg", level: "Básico", experience: "En formación" },
      { name: "Cypress", image: "/Cypress.jpg", level: "Básico", experience: "En formación" },
      { name: "Selenium", image: "/Selenium.png", level: "Básico", experience: "En formación" },
    ],
  },
  {
    name: "Gestión de Proyectos",
    description: "Metodologías ágiles y herramientas de gestión de proyectos",
    skills: [
      { name: "Scrum", image: "/Scrum.jpg", level: "Intermedio", experience: "1+ año" },
      { name: "Jira", image: "/Jira.jpg", level: "Básico", experience: "6+ meses" },
      { name: "Trello", image: "/Trello.jpg", level: "Intermedio", experience: "2+ años" },
      { name: "Canva", image: "/Canva.jpg", level: "Avanzado", experience: "2+ años" },
    ],
  },
];

export default function Skills() {
  const handleImageError = (e, skillName) => {
    e.target.style.display = 'none';
    const textElement = e.target.nextElementSibling;
    if (textElement) {
      textElement.style.fontSize = '1.2rem';
      textElement.style.fontWeight = 'bold';
    }
  };

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="container">
        <h1 id="skills-title" className="title">Habilidades y Tecnologías</h1>
        <div className="skills-categories" role="region" aria-label="Categorías de habilidades">
          {categories.map((cat) => (
            <div key={cat.name} className="skills-category">
              <div className="category-header">
                <h2 className="skills-category-title" id={`category-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {cat.name}
                </h2>
                <p className="category-description">{cat.description}</p>
              </div>
              <div 
                className="skills-grid" 
                role="list" 
                aria-labelledby={`category-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat.skills.map((skill) => (
                  <div 
                    className={`skill-item skill-${skill.level.toLowerCase()}`}
                    key={skill.name} 
                    tabIndex={0}
                    role="listitem"
                    aria-label={`${skill.name} - Nivel ${skill.level}`}
                  >
                    <div className="skill-content" title={`${skill.name} - Nivel ${skill.level}`}>
                      <div className="skill-image-container">
                        <img 
                          src={skill.image} 
                          alt={`Logo de ${skill.name}`} 
                          className="skill-image"
                          onError={(e) => handleImageError(e, skill.name)}
                          loading="lazy"
                        />
                      </div>
                      <div className="skill-info">
                        <span className="skill-text">{skill.name}</span>
                        <span className={`skill-level level-${skill.level.toLowerCase()}`} aria-label={`Nivel: ${skill.level}`}>
                          {skill.level}
                        </span>
                        <span className="skill-experience">{skill.experience}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
