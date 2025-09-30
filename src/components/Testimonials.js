import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "CEO de TechStart",
    company: "Startup Tecnológica",
    image: "https://i.pravatar.cc/150?img=1",
    content: "Maximiliano transformó completamente nuestra presencia digital. Su atención al detalle y capacidad para entender nuestras necesidades fue excepcional. El sitio web que desarrolló superó todas nuestras expectativas.",
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Director de Marketing",
    company: "Agencia Creativa",
    image: "https://i.pravatar.cc/150?img=3",
    content: "Trabajar con Maxi fue una experiencia increíble. Su profesionalismo y creatividad nos ayudaron a alcanzar resultados que no creíamos posibles. Definitivamente lo recomendaría a cualquiera.",
    rating: 5,
    project: "Portal Corporativo"
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Fundadora",
    company: "Eco Solutions",
    image: "https://i.pravatar.cc/150?img=5",
    content: "La dedicación y el compromiso de Maximiliano con nuestro proyecto fue admirable. No solo cumplió con los plazos, sino que también aportó ideas innovadoras que mejoraron significativamente el resultado final.",
    rating: 5,
    project: "Aplicación Web"
  },
  {
    id: 4,
    name: "Jorge Pérez",
    role: "Product Manager",
    company: "FinTech Solutions",
    image: "https://i.pravatar.cc/150?img=7",
    content: "Maximiliano demostró un dominio excepcional de las tecnologías modernas. Su capacidad para resolver problemas complejos y su comunicación clara hicieron que el proyecto fuera un éxito rotundo.",
    rating: 5,
    project: "Dashboard Analytics"
  },
  {
    id: 5,
    name: "Laura Silva",
    role: "Directora Creativa",
    company: "Design Studio",
    image: "https://i.pravatar.cc/150?img=9",
    content: "Es raro encontrar un desarrollador que combine tan bien habilidades técnicas con visión creativa. Maximiliano entregó un producto que no solo funciona perfectamente, sino que también es visualmente impresionante.",
    rating: 5,
    project: "Portfolio Interactivo"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="testimonials-title">Lo que dicen mis clientes</h2>
          <p className="testimonials-subtitle">
            Testimonios reales de personas con las que he tenido el placer de trabajar
          </p>
        </motion.div>

        <div className="testimonials-wrapper">
          <button 
            className="nav-button prev"
            onClick={() => paginate(-1)}
            aria-label="Testimonio anterior"
          >
            <FaChevronLeft />
          </button>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="testimonial-card"
            >
              <div className="testimonial-content">
                <FaQuoteLeft className="quote-icon" />
                
                <div className="testimonial-header">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{testimonials[currentIndex].name}</h3>
                    <p className="testimonial-role">{testimonials[currentIndex].role}</p>
                    <p className="testimonial-company">{testimonials[currentIndex].company}</p>
                  </div>
                </div>

                <p className="testimonial-text">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="testimonial-footer">
                  <div className="testimonial-rating">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                  <span className="testimonial-project">
                    Proyecto: {testimonials[currentIndex].project}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            className="nav-button next"
            onClick={() => paginate(1)}
            aria-label="Siguiente testimonio"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>

        <motion.div 
          className="testimonials-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>¿Quieres ser mi próximo cliente satisfecho?</h3>
          <p>Trabajemos juntos en tu próximo proyecto</p>
          <a href="/contact" className="cta-button">Iniciar Proyecto</a>
        </motion.div>
      </div>
    </section>
  );
}