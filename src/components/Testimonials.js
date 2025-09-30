import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "María González",
    position: "Directora - Huerta Comunitaria Villa Ramallo",
    company: "Huerta Comunitaria",
    text: "Maximiliano desarrolló nuestro sitio web con gran profesionalismo y dedicación. Su capacidad para entender nuestras necesidades y traducirlas en una plataforma funcional y atractiva fue excepcional. El sitio ha mejorado significativamente nuestra presencia online.",
    rating: 5,
    image: "/huertacomunitaria.png"
  },
  {
    id: 2,
    name: "Pastor Roberto Silva",
    position: "Pastor Principal",
    company: "Iglesia Puerta de Salvación",
    text: "El trabajo de Maximiliano superó nuestras expectativas. Creó un sitio web moderno y fácil de navegar que refleja perfectamente los valores de nuestra comunidad. Su atención al detalle y comunicación constante hicieron del proceso una experiencia muy positiva.",
    rating: 5,
    image: "/iglesia.png"
  },
  {
    id: 3,
    name: "Equipo de Desarrollo",
    position: "Compañeros de Curso",
    company: "UNTREF School",
    text: "Maximiliano demostró ser un compañero colaborativo y un desarrollador talentoso durante nuestros proyectos académicos. Su capacidad para resolver problemas complejos y su disposición para ayudar a otros lo destacan como un profesional confiable.",
    rating: 5,
    image: "/React.png"
  }
];

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
        aria-hidden="true"
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="testimonials-header">
          <h2 id="testimonials-title" className="section-title">Lo que dicen sobre mi trabajo</h2>
          <p className="section-subtitle">
            Testimonios reales de clientes y colaboradores que han trabajado conmigo
          </p>
        </div>
        
        <div className="testimonials-grid" role="list" aria-label="Lista de testimonios">
          {testimonials.map((testimonial) => (
            <article 
              key={testimonial.id} 
              className="testimonial-card"
              role="listitem"
              aria-labelledby={`testimonial-${testimonial.id}-name`}
            >
              <div className="testimonial-content">
                <div className="testimonial-rating" aria-label={`Calificación: ${testimonial.rating} de 5 estrellas`}>
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="testimonial-text">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="testimonial-author">
                  <div className="author-info">
                    <h3 id={`testimonial-${testimonial.id}-name`} className="author-name">
                      {testimonial.name}
                    </h3>
                    <p className="author-position">
                      {testimonial.position}
                    </p>
                    <p className="author-company">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-decoration">
                <span className="quote-icon" aria-hidden="true">"</span>
              </div>
            </article>
          ))}
        </div>
        
        <div className="testimonials-cta">
          <p className="cta-text">¿Quieres ser el próximo en recomendar mi trabajo?</p>
          <a href="#contact" className="cta-button">
            Trabajemos Juntos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;