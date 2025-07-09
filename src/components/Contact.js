import React, { useState } from "react";
import "./Contact.css"; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
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
        setFormData({ name: "", email: "", message: "" });
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
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
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
              <div>
                <img src="/map.png" alt="" aria-hidden="true" />
                <p>
                  <strong>Dirección:</strong><br />
                  Dr. Silva 530, Villa Ramallo, Buenos Aires, Argentina
                </p>
              </div>
              <div>
                <img src="/mail.png" alt="" aria-hidden="true" />
                <p>
                  <strong>Email:</strong><br />
                  <a href="mailto:boton.creativo.ar@gmail.com">boton.creativo.ar@gmail.com</a>
                </p>
              </div>
              <div>
                <img src="/telephone.png" alt="" aria-hidden="true" />
                <p>
                  <strong>Teléfono:</strong><br />
                  <a href="tel:+543407532790">03407-532790</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

