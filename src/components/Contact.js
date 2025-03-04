import React from "react";
import "./Contact.css"; 

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("¡Mensaje enviado!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="content">
          <div className="map-form-info-container">
            <div className="map-container">
              <iframe
                title="map"
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.9053085478577!2d-60.05618482545404!3d-33.503840673368344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9e361135af9dd%3A0xad246f38aedbd517!2sJ.%20Silva%20530%2C%20B2914%20Villa%20Ramallo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1740849249826!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <form name="contact" onSubmit={handleSubmit} className="contact-form">
              <h2>¡Contactame!</h2>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit">Enviar</button>
            </form>
            <div className="contact-info">
              <div>
                <img src="/map.png" alt="Dirección" />
                <p>Dr. Silva 530, Villa Ramallo, Buenos Aires, Argentina</p>
              </div>
              <div>
                <img src="/mail.png" alt="Correo" />
                <p>boton.creativo.ar@gmail.com</p>
              </div>
              <div>
                <img src="/telephone.png" alt="Teléfono" />
                <p>03407-532790</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

