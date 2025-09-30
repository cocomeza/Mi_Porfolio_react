import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Maximiliano Meza</h3>
            <p className="footer-description">
              Desarrollador Web Full Stack apasionado por crear experiencias digitales únicas y funcionales.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/maxi-meza" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/cocomeza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/boton.creativo.ar" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/share/1BrDede6ZW/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Sobre Mí</Link></li>
              <li><Link to="/projects">Proyectos</Link></li>
              <li><Link to="/freelance">Freelance</Link></li>
              <li><Link to="/skills">Habilidades</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Servicios</h4>
            <ul className="footer-services">
              <li>Desarrollo Web</li>
              <li>Diseño Responsive</li>
              <li>Community Manager</li>
              <li>Testing QA</li>
              <li>Consultoría Digital</li>
              <li>Mantenimiento Web</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contacto</h4>
            <div className="footer-contact">
              <p><FaMapMarkerAlt /> Dr. Silva 530, Villa Ramallo, Buenos Aires</p>
              <p><FaEnvelope /> <a href="mailto:boton.creativo.ar@gmail.com">boton.creativo.ar@gmail.com</a></p>
              <p><FaPhone /> <a href="tel:+543407532790">03407-532790</a></p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Maximiliano Meza. Todos los derechos reservados.</p>
          <p>Hecho con <FaHeart className="heart-icon" /> en Argentina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;