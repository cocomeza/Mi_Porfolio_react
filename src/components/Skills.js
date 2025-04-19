import React from "react";
import "./Skills.css"; 

const skillImages = {
  HTML: "/html.png",
  Css: "/css-3.png",
  JavaScript: "/js.png",
  React: "/React.png",
  Bootstrap: "/Bootstrap.png",
  "Node.js": "/Node.js.png",
  Python: "/Python.png",
  PHP: "/php.png",
  Java: "/java-logo.webp",
  MongoDB: "/mongoDB.png",
  MySQL: "/mysql.png",
  PostgreSQL : "/PostgreSQL.png",
  Docker: "/Docker.jpg",
  WordPress: "/wordpress.jpg",
  Canva: "/Canva.png",
  GitHub: "/github.png",
  Netlify: "/Netlify.png",
  Postman: "/postman.jpg",
  Karate: "/Karate.jpg",
  Playwright: "/Playwright.jpg",
  Cypress: "/Cypress.jpg",
  Selenium: "/Selenium.png",
};

export default function Skills() {
  const skills = ["HTML", "Css", "JavaScript","React", "Bootstrap", "Node.js", "Python", "PHP", "Java", "MongoDB", "MySQL","PostgreSQL", "Docker", "WordPress" , "Canva" , "GitHub","Netlify","Postman","Karate","Playwright","Cypress","Selenium","Scrum","Jira","Trello"];
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="title">Habilidades y Tecnologías</h1>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-item">
              <div className="skill-content">
                <img src={skillImages[skill]} alt={skill} className="skill-image" />
                <span className="skill-text">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
