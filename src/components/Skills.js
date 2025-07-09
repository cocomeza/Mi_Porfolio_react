import React from "react";
import "./Skills.css";

const categories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", image: "/html.png" },
      { name: "Css", image: "/css-3.png" },
      { name: "JavaScript", image: "/js.png" },
      { name: "React", image: "/React.png" },
      { name: "Bootstrap", image: "/Bootstrap.png" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", image: "/Node.js.png" },
      { name: "Python", image: "/Python.png" },
      { name: "PHP", image: "/php.png" },
      { name: "Java", image: "/java-logo.webp" },
      { name: "MongoDB", image: "/mongoDB.png" },
      { name: "MySQL", image: "/mysql.png" },
      { name: "PostgreSQL", image: "/PostgreSQL.jpg" },
      { name: "Docker", image: "/Docker.jpg" },
      { name: "WordPress", image: "/wordpress.jpg" },
    ],
  },
  {
    name: "Herramientas",
    skills: [
      { name: "Canva", image: "/Canva.jpg" },
      { name: "GitHub", image: "/github.png" },
      { name: "Netlify", image: "/Netlify.png" },
      { name: "Postman", image: "/postman.jpg" },
      { name: "Trello", image: "/Trello.jpg" },
      { name: "Jira", image: "/Jira.jpg" },
      { name: "Scrum", image: "/Scrum.jpg" },
    ],
  },
  {
    name: "Testing",
    skills: [
      { name: "Karate", image: "/Karate.jpg" },
      { name: "Playwright", image: "/Playwright.jpg" },
      { name: "Cypress", image: "/Cypress.jpg" },
      { name: "Selenium", image: "/Selenium.png" },
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
              <h2 className="skills-category-title" id={`category-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}>
                {cat.name}
              </h2>
              <div 
                className="skills-grid" 
                role="list" 
                aria-labelledby={`category-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat.skills.map((skill) => (
                  <div 
                    className="skill-item" 
                    key={skill.name} 
                    tabIndex={0}
                    role="listitem"
                    aria-label={`${skill.name} - Nivel Básico`}
                  >
                    <div className="skill-content" title={`${skill.name} - Nivel Básico`}>
                      <img 
                        src={skill.image} 
                        alt={`Logo de ${skill.name}`} 
                        className="skill-image"
                        onError={(e) => handleImageError(e, skill.name)}
                        loading="lazy"
                      />
                      <span className="skill-text">{skill.name}</span>
                      <span className="skill-level" aria-label={`Nivel: Básico`}>Básico</span>
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
