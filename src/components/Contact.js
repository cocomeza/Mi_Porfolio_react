import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheck,
  FiAlertCircle
} from "react-icons/fi";
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
  const [focusedField, setFocusedField] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido";
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
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
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
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        setSubmitStatus("error");
        console.error("Error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Dirección",
      content: ["Dr. Silva 530", "Villa Ramallo, Buenos Aires", "Argentina"],
      color: "#3b82f6"
    },
    {
      icon: FiMail,
      title: "Email",
      content: ["boton.creativo.ar@gmail.com"],
      link: "mailto:boton.creativo.ar@gmail.com",
      color: "#8b5cf6"
    },
    {
      icon: FiPhone,
      title: "Teléfono",
      content: ["+54 3407-532790"],
      link: "tel:+543407532790",
      color: "#10b981"
    }
  ];

  return (
    <section className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <h1 className="section-title">
            Hablemos de tu <span className="gradient-text">Proyecto</span>
          </h1>
          <p className="section-description">
            Estoy aquí para ayudarte a convertir tus ideas en realidad digital
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form 
              name="contact" 
              onSubmit={handleSubmit} 
              className="contact-form"
              noValidate
            >
              {submitStatus === "success" && (
                <motion.div 
                  className="alert alert-success"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <FiCheck className="alert-icon" />
                  <div>
                    <strong>¡Mensaje enviado exitosamente!</strong>
                    <p>Te responderé lo antes posible.</p>
                  </div>
                </motion.div>
              )}
              
              {submitStatus === "error" && (
                <motion.div 
                  className="alert alert-error"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <FiAlertCircle className="alert-icon" />
                  <div>
                    <strong>Error al enviar el mensaje</strong>
                    <p>Por favor, intenta nuevamente.</p>
                  </div>
                </motion.div>
              )}

              <div className="form-grid">
                <motion.div 
                  className={`form-group ${focusedField === 'name' ? 'focused' : ''} ${errors.name ? 'error' : ''}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <label htmlFor="name">
                    <FiUser className="field-icon" />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tu nombre"
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <span id="name-error" className="error-text">
                      {errors.name}
                    </span>
                  )}
                </motion.div>
                
                <motion.div 
                  className={`form-group ${focusedField === 'email' ? 'focused' : ''} ${errors.email ? 'error' : ''}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <label htmlFor="email">
                    <FiMail className="field-icon" />
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="tu@email.com"
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span id="email-error" className="error-text">
                      {errors.email}
                    </span>
                  )}
                </motion.div>
              </div>
              
              <motion.div 
                className={`form-group ${focusedField === 'subject' ? 'focused' : ''} ${errors.subject ? 'error' : ''}`}
                whileHover={{ scale: 1.02 }}
              >
                <label htmlFor="subject">
                  <FiMessageSquare className="field-icon" />
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="¿En qué puedo ayudarte?"
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && (
                  <span id="subject-error" className="error-text">
                    {errors.subject}
                  </span>
                )}
              </motion.div>
              
              <motion.div 
                className={`form-group ${focusedField === 'message' ? 'focused' : ''} ${errors.message ? 'error' : ''}`}
                whileHover={{ scale: 1.02 }}
              >
                <label htmlFor="message">
                  <FiMessageSquare className="field-icon" />
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows="6"
                  placeholder="Cuéntame sobre tu proyecto..."
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <span id="message-error" className="error-text">
                    {errors.message}
                  </span>
                )}
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <div className="contact-info-wrapper">
            <motion.div 
              className="contact-info-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2>Información de Contacto</h2>
              <p className="info-description">
                No dudes en contactarme para cualquier consulta o propuesta
              </p>
              
              <div className="contact-info-list">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="info-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div 
                        className="info-icon"
                        style={{ background: `${info.color}20`, color: info.color }}
                      >
                        <Icon />
                      </div>
                      <div className="info-content">
                        <h3>{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="info-link">
                            {info.content.map((line, i) => (
                              <span key={i}>{line}</span>
                            ))}
                          </a>
                        ) : (
                          info.content.map((line, i) => (
                            <span key={i}>{line}</span>
                          ))
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="availability-badge">
                <span className="availability-dot"></span>
                <span>Disponible para nuevos proyectos</span>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div 
              className="map-container"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <iframe
                title="Ubicación en Google Maps"
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.9053085478577!2d-60.05618482545404!3d-33.503840673368344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9e361135af9dd%3A0xad246f38aedbd517!2sJ.%20Silva%20530%2C%20B2914%20Villa%20Ramallo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1740849249826!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}