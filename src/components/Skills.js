import React from "react";
import "./Skills.css";

const categories = [
  {
    name: "Frontend",
    icon: "🎨",
    description: "Tecnologías para crear interfaces de usuario atractivas y funcionales",
    skills: [
      { name: "HTML5", image: "/html.png", level: 90, experience: "2+ años" },
      { name: "CSS3", image: "/css-3.png", level: 85, experience: "2+ años" },
      { name: "JavaScript", image: "/js.png", level: 80, experience: "2+ años" },
      { name: "React", image: "/React.png", level: 75, experience: "1+ año" },
      { name: "Bootstrap", image: "/Bootstrap.png", level: 85, experience: "2+ años" },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    description: "Desarrollo del lado del servidor y gestión de bases de datos",
    skills: [
      { name: "Node.js", image: "/Node.js.png", level: 75, experience: "1+ año" },
      { name: "Python", image: "/Python.png", level: 60, experience: "6+ meses" },
      { name: "PHP", image: "/php.png", level: 55, experience: "6+ meses" },
      { name: "Java", image: "/java-logo.webp", level: 50, experience: "Básico" },
      { name: "MongoDB", image: "/mongoDB.png", level: 70, experience: "1+ año" },
      { name: "MySQL", image: "/mysql.png", level: 75, experience: "1+ año" },
      { name: "PostgreSQL", image: "/PostgreSQL.jpg", level: 65, experience: "6+ meses" },
      { name: "Docker", image: "/Docker.jpg", level: 45, experience: "Básico" },
      { name: "WordPress", image: "/wordpress.jpg", level: 70, experience: "1+ año" },
    ],
  },
  {
    name: "Herramientas",
    icon: "🛠️",
    description: "Herramientas de desarrollo, diseño y gestión de proyectos",
    skills: [
      { name: "Canva", image: "/Canva.jpg", level: 90, experience: "2+ años" },
      { name: "GitHub", image: "/github.png", level: 80, experience: "2+ años" },
      { name: "Netlify", image: "/Netlify.png", level: 75, experience: "1+ año" },
      { name: "Postman", image: "/postman.jpg", level: 70, experience: "1+ año" },
      { name: "Trello", image: "/Trello.jpg", level: 85, experience: "2+ años" },
      { name: "Jira", image: "/Jira.jpg", level: 60, experience: "6+ meses" },
      { name: "Scrum", image: "/Scrum.jpg", level: 65, experience: "1+ año" },
    ],
  },
  {
    name: "Testing",
    icon: "🧪",
    description: "Herramientas para asegurar la calidad del software",
    skills: [
      { name: "Karate", image: "/Karate.jpg", level: 55, experience: "En formación" },
      { name: "Playwright", image: "/Playwright.jpg", level: 50, experience: "En formación" },
      { name: "Cypress", image: "/Cypress.jpg", level: 45, experience: "Básico" },
      { name: "Selenium", image: "/Selenium.png", level: 40, experience: "Básico" },
    ],
  },
];

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = React.useState(new Set());
  const [activeCategory, setActiveCategory] = React.useState(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.dataset.skillId;
            if (skillId) {
              setVisibleSkills(prev => new Set([...prev, skillId]));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = document.querySelectorAll('.skill-item');
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleImageError = (e, skillName) => {
    e.target.style.display = 'none';
    const textElement = e.target.nextElementSibling;
    if (textElement) {
      textElement.style.fontSize = '1.2rem';
      textElement.style.fontWeight = 'bold';
    }
  };

  const getSkillLevelText = (level) => {
    if (level >= 80) return 'Avanzado';
    if (level >= 60) return 'Intermedio';
    if (level >= 40) return 'Básico';
    return 'Principiante';
  };

  const getSkillLevelColor = (level) => {
    if (level >= 80) return 'var(--color-success)';
    if (level >= 60) return 'var(--color-primary)';
    if (level >= 40) return 'var(--color-accent)';
    return 'var(--color-gray-400)';
  };

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="container">
        <div className="skills-header">
          <h1 id="skills-title" className="section-title">Habilidades y Tecnologías</h1>
          <p className="skills-subtitle">
            Un resumen de mis competencias técnicas y herramientas de desarrollo
          </p>
        </div>

        <div className="skills-categories" role="region" aria-label="Categorías de habilidades">
          {categories.map((category, categoryIndex) => (
            <div 
              key={category.name} 
              className={`skills-category ${activeCategory === category.name ? 'active' : ''}`}
              onMouseEnter={() => setActiveCategory(category.name)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="category-header">
                <div className="category-title-container">
                  <span className="category-icon">{category.icon}</span>
                  <h2 className="category-title" id={`category-${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {category.name}
                  </h2>
                  <span className="skills-count">{category.skills.length}</span>
                </div>
                <p className="category-description">{category.description}</p>
              </div>

              <div 
                className="skills-grid" 
                role="list" 
                aria-labelledby={`category-${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category.skills.map((skill, skillIndex) => {
                  const skillId = `${category.name}-${skill.name}`;
                  const isVisible = visibleSkills.has(skillId);
                  
                  return (
                    <div 
                      className={`skill-item ${isVisible ? 'visible' : ''}`}
                      key={skill.name} 
                      data-skill-id={skillId}
                      tabIndex={0}
                      role="listitem"
                      aria-label={`${skill.name} - Nivel ${getSkillLevelText(skill.level)}`}
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      <div className="skill-content">
                        <div className="skill-header">
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
                            <h3 className="skill-name">{skill.name}</h3>
                            <span className="skill-experience">{skill.experience}</span>
                          </div>
                        </div>

                        <div className="skill-progress-container">
                          <div className="skill-progress-header">
                            <span className="skill-level-text">{getSkillLevelText(skill.level)}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                          <div className="skill-progress-bar">
                            <div 
                              className="skill-progress-fill"
                              style={{ 
                                width: isVisible ? `${skill.level}%` : '0%',
                                backgroundColor: getSkillLevelColor(skill.level)
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-stats">
            <div className="stat-card">
              <div className="stat-number">{categories.reduce((acc, cat) => acc + cat.skills.length, 0)}</div>
              <div className="stat-label">Tecnologías</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{categories.length}</div>
              <div className="stat-label">Categorías</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {categories.reduce((acc, cat) => 
                  acc + cat.skills.filter(skill => skill.level >= 70).length, 0
                )}
              </div>
              <div className="stat-label">Nivel Avanzado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
