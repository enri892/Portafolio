import React, { useRef } from "react";
import "./AboutMe.css";
import { useScrollAnimation, useScrollStagger } from "../hooks/useScrollAnimations";
import { useHeroEntrance } from "../hooks/useHeroEntrance";

const cvUrl = `${import.meta.env.BASE_URL}EnriqueUribeCURRICULUM.pdf`;

const marqueeText =
  "REACT · SPRING BOOT · LARAVEL · JAVASCRIPT · DOCKER · FULL STACK · CREATIVIDAD · ";

function AboutMe() {
  const introRef = useRef(null);
  useHeroEntrance(introRef);
  const titleRef = useScrollAnimation(0.2);
  const contentRef = useScrollAnimation(0.3);
  const skillsRef = useScrollStagger(0.4);

  return (
    <section id="sobre-mi" className="about-me py-5">
      <div className="container">
        <div className="brutal-marquee" aria-hidden="true">
          <div className="brutal-marquee__track">
            <span>
              <strong>DISPONIBLE</strong> — {marqueeText}
            </span>
            <span>
              <strong>DISPONIBLE</strong> — {marqueeText}
            </span>
          </div>
        </div>

        <div className="about-intro about-intro--brutal" ref={introRef}>
          <p className="about-intro__eyebrow brutal-label" data-hero>
            Full Stack Developer · Madrid, España
          </p>
          <h1 className="about-intro__title" data-hero>
            Enrique
            <br />
            <span className="about-intro__title-accent">Uribe</span>
          </h1>
          <p className="about-intro__subtitle" data-hero>
            Desarrollador Full Stack con ganas de aprender, crear y superar nuevos retos.
            Me motivan los proyectos con impacto real, el trabajo en equipo y seguir
            creciendo en cada línea de código.
          </p>
          <div className="about-intro__actions" data-hero>
            <a href="#proyectos" className="btn-intro btn-intro--primary">
              Ver proyectos
            </a>
            <a
              href={cvUrl}
              download="EnriqueUribeCV.pdf"
              className="btn-intro btn-intro--cv"
            >
              Descargar CV
            </a>
            <a href="#contacto" className="btn-intro btn-intro--secondary">
              Contactar
            </a>
          </div>
        </div>

        <span className="brutal-section-tag">// Sobre mí</span>
        <h2 ref={titleRef} className="section-heading section-title-spaced" data-brutal>
          Perfil & Stack
        </h2>
        <div className="row" ref={contentRef}>
          <div className="col-lg-6 mb-4">
            <div className="about-text about-text--brutal">
              <p className="mb-3">
                Soy desarrollador Full Stack con experiencia en{" "}
                <strong>entornos profesionales</strong>: plataforma Hargos (SaaS con Stripe,
                JWT, multi-tenant) y RiTrack, tracking de riders en producción.
              </p>
              <p className="mb-3">
                En <strong>prácticas</strong> desplegué Arendel.es y Entregalia.com. En{" "}
                <strong>TFG</strong>: e-commerce Laravel y gestión veterinaria en equipo.
              </p>
              <p className="mb-4">
                React, Spring Boot, Laravel, Docker y DigitalOcean — del frontend al servidor.
              </p>
              <div className="skills" ref={skillsRef} data-brutal-stagger>
                <h3 className="mb-3">Stack Tecnológico</h3>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="skill-category">
                      <h4>Frontend</h4>
                      <ul>
                        <li>React.js</li>
                        <li>JavaScript ES6+</li>
                        <li>HTML5 & CSS3</li>
                        <li>Bootstrap</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="skill-category">
                      <h4>Backend</h4>
                      <ul>
                        <li>PHP & Laravel</li>
                        <li>Java & Spring Boot</li>
                        <li>RESTful APIs</li>
                        <li>Arquitectura MVC</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="skill-category">
                      <h4>Base de Datos</h4>
                      <ul>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>SQLite</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="skill-category">
                      <h4>DevOps</h4>
                      <ul>
                        <li>Git & GitHub</li>
                        <li>Docker Compose</li>
                        <li>DigitalOcean</li>
                        <li>CI/CD Pipeline</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="about-image">
              <div className="code-preview code-preview--brutal">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control red"></span>
                    <span className="control yellow"></span>
                    <span className="control green"></span>
                  </div>
                  <span className="window-title">developer.js</span>
                </div>
                <div className="code-content">
                  <pre>
                    <code>{`const developer = {
  name: "Enrique Uribe",
  role: "Full Stack Developer",
  location: "Madrid, España",
  mindset: "Curioso y con ganas de retos",
  openTo: "Nuevos proyectos e ideas"
};`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href={cvUrl} download="EnriqueUribeCV.pdf" className="btn btn-cv">
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
