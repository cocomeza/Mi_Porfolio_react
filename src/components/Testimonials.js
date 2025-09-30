import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Cliente Freelance",
    role: "Emprendedor",
    company: "Startup Local",
    content: "Maximiliano transformó completamente nuestra presencia digital. Su enfoque técnico y su capacidad para entender las necesidades del negocio fueron excepcionales. El proyecto se entregó a tiempo y superó nuestras expectativas.",
    rating: 5,
    project: "Desarrollo de sitio web corporativo"
  },
  {
    id: 2,
    name: "Colega Desarrollador",
    role: "Senior Developer",
    company: "Tech Company",
    content: "Trabajar con Maxi es una experiencia muy positiva. Su código es limpio, bien documentado y sigue las mejores prácticas. Su capacidad de aprendizaje y adaptación es impresionante.",
    rating: 5,
    project: "Proyecto colaborativo React"
  },
  {
    id: 3,
    name: "Profesor Academia",
    role: "Instructor",
    company: "UNTREF School",
    content: "Maximiliano demostró excelente dedicación y progreso durante su formación. Su portfolio muestra un crecimiento constante y proyectos bien ejecutados. Recomiendo su trabajo sin dudas.",
    rating: 5,
    project: "Proyectos académicos"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="testimonials-header">
          <h2 id="testimonials-title" className="testimonials-title">Lo que dicen sobre mi trabajo</h2>
          <p className="testimonials-subtitle">Testimonios de clientes y colegas que han trabajado conmigo</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              
              <blockquote className="testimonial-content">
                "{testimonial.content}"
              </blockquote>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="testimonial-project">
                <span className="project-label">Proyecto:</span>
                <span className="project-name">{testimonial.project}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-cta">
          <p>¿Quieres ser el próximo en trabajar conmigo?</p>
          <a href="/contact" className="cta-button">Contáctame</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;