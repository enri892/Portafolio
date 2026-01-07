import React from "react";
import "./AboutMe.css";
import { useScrollAnimation, useScrollStagger } from '../hooks/useScrollAnimations';

function AboutMe() {
  const titleRef = useScrollAnimation(0.2);
  const contentRef = useScrollAnimation(0.3);
  const skillsRef = useScrollStagger(0.4);

  return (
    <section id="sobre-mi" className="about-me">
      <div className="container">
        <h2 ref={titleRef}>Sobre Mí</h2>
        <div className="about-content" ref={contentRef}>
          <div className="about-text">
            <p>
              Desarrollador Full Stack con especialización en arquitecturas web modernas.
              Mi experiencia abarca desde el frontend con React y JavaScript hasta el backend
              con PHP/Laravel y Java/SpringBoot, creando soluciones completas y escalables.
            </p>
            <p>
              Apasionado por el desarrollo de software limpio y patrones de diseño robustos.
              Me enfoco en construir aplicaciones que no solo funcionen bien, sino que también
              sean mantenibles y sigan las mejores prácticas de la industria.
            </p>
            <div className="skills" ref={skillsRef}>
              <h3>Stack Tecnológico</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <ul>
                    <li>React.js</li>
                    <li>JavaScript ES6+</li>
                    <li>HTML5 & CSS3</li>
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Backend</h4>
                  <ul>
                    <li>PHP & Laravel</li>
                    <li>Java & SpringBoot</li>
                    <li>RESTful APIs</li>
                    <li>Arquitectura MVC</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Base de Datos</h4>
                  <ul>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>SQLite</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>DevOps</h4>
                  <ul>
                    <li>Git & GitHub</li>
                    <li>Docker Compose</li>
                    <li>DigitalOcean Droplets</li>
                    <li>CI/CD Pipeline</li>
                    <li>Deploy.sh Scripts</li>
                    <li>Linux Administration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="code-preview">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
                <span className="window-title">developer.js</span>
              </div>
              <div className="code-content">
                <pre><code>{`const developer = {
  name: "Enrique Uribe",
  role: "Full Stack Developer",
  passion: "Código Limpio & Arquitectura",
  current: "Construyendo aplicaciones web increíbles"
};`}</code></pre>
              </div>
            </div>
          </div>
        </div>
        <div className="about-actions">
          <a href="/EnriqueUribeCURRICULUM.pdf" download="EnriqueUribeCV.pdf" className="btn btn-cv">
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;