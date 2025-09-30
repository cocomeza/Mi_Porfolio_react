import React, { useState } from "react";
import "./Contact.css"; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "El asunto debe tener al menos 5 caracteres";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "El mensaje debe tener al menos 20 caracteres";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        setSubmitStatus("error");
        console.error("Error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="content">
          <h1 id="contact-title" className="section-title">Contacto</h1>
          <div className="map-form-info-container">
            <div className="map-container">
              <iframe
                title="Ubicación en Google Maps - Dr. Silva 530, Villa Ramallo, Buenos Aires"
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.9053085478577!2d-60.05618482545404!3d-33.503840673368344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9e361135af9dd%3A0xad246f38aedbd517!2sJ.%20Silva%20530%2C%20B2914%20Villa%20Ramallo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1740849249826!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Mapa mostrando la ubicación en Dr. Silva 530, Villa Ramallo"
              />
            </div>
            
            <form 
              name="contact" 
              onSubmit={handleSubmit} 
              className="contact-form"
              noValidate
              aria-labelledby="contact-title"
            >
              <h2>¡Contáctame!</h2>
              
              {submitStatus === "success" && (
                <div className="success-message" role="alert">
                  ¡Mensaje enviado exitosamente! Te responderé pronto.
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="error-message" role="alert">
                  Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Nombre *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={!!errors.name}
                  required
                />
                {errors.name && (
                  <span id="name-error" className="error-text" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                  required
                />
                {errors.email && (
                  <span id="email-error" className="error-text" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Asunto *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Ej: Consulta sobre desarrollo web"
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  aria-invalid={!!errors.subject}
                  required
                />
                {errors.subject && (
                  <span id="subject-error" className="error-text" role="alert">
                    {errors.subject}
                  </span>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Cuéntame sobre tu proyecto, necesidades o cualquier consulta que tengas..."
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={!!errors.message}
                  required
                />
                {errors.message && (
                  <span id="message-error" className="error-text" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                aria-describedby="submit-status"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
              
              <div id="submit-status" className="sr-only" aria-live="polite">
                {isSubmitting && "Enviando mensaje..."}
              </div>
            </form>
            
            <div className="contact-info" role="complementary" aria-label="Información de contacto">
              <h3>Información de Contacto</h3>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Ubicación</h4>
                    <p>Dr. Silva 530<br />Villa Ramallo, Buenos Aires<br />Argentina</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p><a href="mailto:boton.creativo.ar@gmail.com">boton.creativo.ar@gmail.com</a></p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Teléfono</h4>
                    <p><a href="tel:+543407532790">03407-532790</a></p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Disponibilidad</h4>
                    <p>Lunes a Viernes<br />9:00 AM - 6:00 PM<br />(GMT-3)</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-cta">
                <h4>¿Prefieres una llamada rápida?</h4>
                <p>Si tienes una consulta urgente, no dudes en llamarme directamente.</p>
                <a href="tel:+543407532790" className="call-button">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  Llamar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

