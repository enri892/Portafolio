import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import { useScrollAnimation, useScrollStagger } from '../hooks/useScrollAnimations';

function Contact() {
  const [state, handleSubmit] = useForm("meeodvoo");
  const [showSuccess, setShowSuccess] = useState(false);
  const titleRef = useScrollAnimation(0.2);
  const contentRef = useScrollStagger(0.3);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <h2 ref={titleRef}>Contacto</h2>
        <div className="contact-content" ref={contentRef}>
          <div className="contact-info">

            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>enriqueurib0505@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Teléfono</h4>
                  <p>+34 624214579</p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Ubicación</h4>
                  <p>Arganda del Rey, Madrid, España</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <h4>Redes Sociales</h4>
              <div className="social-icons">
                <a href="https://github.com/enri892" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/enrique-uribe-954072379/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            {showSuccess ? (
              <div className="form-message success">
                ¡Mensaje enviado con éxito! Te responderé pronto.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Tu nombre"
                  />
                  <ValidationError 
                    prefix="Nombre" 
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="tu.email@ejemplo.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Asunto *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="¿Sobre qué es tu mensaje?"
                  />
                  <ValidationError 
                    prefix="Asunto" 
                    field="subject"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Enviame tu mensaje..."
                  ></textarea>
                  <ValidationError 
                    prefix="Mensaje" 
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;