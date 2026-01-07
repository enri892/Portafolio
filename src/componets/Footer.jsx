import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import { useScrollAnimation } from '../hooks/useScrollAnimations';

function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useScrollAnimation(0.2);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Enrique Uribe</h3>
            <p>Full Stack Developer especializado en aplicaciones web modernas y arquitecturas escalables.</p>
            <div className="footer-social">
              <a href="https://github.com/enri892" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/enrique-uribe-954072379/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <nav className="footer-nav">
              <a href="#sobre-mi">Sobre Mí</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="footer-contact">
              <p>
                <FaEnvelope className="contact-icon" />
                enriqueurib0505@gmail.com
              </p>
              <p>
                <FaPhone className="contact-icon" />
                +34 624214579
              </p>
              <p>
                <FaMapMarkerAlt className="contact-icon" />
                Arganda del Rey, Madrid, España
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Enrique Uribe. Todos los derechos reservados.</p>
          </div>
          <div className="footer-credits">
            <p>Hecho con ❤️ y React.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;