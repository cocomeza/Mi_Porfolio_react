import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Dueña de Huerta Comunitaria",
    company: "Villa Ramallo",
    text: "Maximiliano transformó completamente nuestra presencia digital. El sitio web que creó para nuestra huerta comunitaria no solo es hermoso, sino que también es muy fácil de navegar. ¡Nuestras visitas aumentaron un 200%!",
    rating: 5,
    image: "/testimonial-1.jpg"
  },
  {
    id: 2,
    name: "Pastor Juan Carlos",
    role: "Director",
    company: "Iglesia Puerta de Salvación",
    text: "Trabajar con Maxi fue una experiencia excepcional. Entendió perfectamente nuestra visión y creó un sitio web que refleja nuestros valores. Su atención al detalle y profesionalismo son incomparables.",
    rating: 5,
    image: "/testimonial-2.jpg"
  },
  {
    id: 3,
    name: "Laura Martínez",
    role: "Emprendedora",
    company: "Botón Creativo",
    text: "Como community manager, Maximiliano ha sido fundamental para hacer crecer mi marca en redes sociales. Su creatividad y conocimiento técnico han llevado mi negocio al siguiente nivel.",
    rating: 5,
    image: "/testimonial-3.jpg"
  },
  {
    id: 4,
    name: "Roberto Silva",
    role: "CEO",
    company: "Tech Solutions AR",
    text: "El trabajo de testing QA que realizó Maximiliano fue impecable. Identificó y solucionó problemas críticos en nuestra aplicación. Su enfoque meticuloso nos ahorró tiempo y dinero.",
    rating: 5,
    image: "/testimonial-4.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.h2 
          className="testimonials-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Lo que dicen mis clientes
        </motion.h2>

        <div className="testimonials-wrapper">
          <motion.button 
            className="testimonial-nav prev"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Testimonio anterior"
          >
            <FaChevronLeft />
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTestimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-quote">
                <FaQuoteLeft className="quote-icon" />
              </div>

              <p className="testimonial-text">{currentTestimonial.text}</p>

              <div className="testimonial-rating">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h3 className="author-name">{currentTestimonial.name}</h3>
                  <p className="author-role">{currentTestimonial.role}</p>
                  <p className="author-company">{currentTestimonial.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button 
            className="testimonial-nav next"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Siguiente testimonio"
          >
            <FaChevronRight />
          </motion.button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;