import React from "react";
import "./Experience.css";
import { useScrollAnimation, useScrollStagger } from "../hooks/useScrollAnimations";

const experiences = [
  {
    type: "profesional",
    period: "En producción",
    title: "Plataforma Hargos & RiTrack",
    description:
      "Desarrollo en producción de un SaaS multi-tenant (auth JWT, Stripe, Google OAuth) y una app de tracking de riders en tiempo real con WebSockets, MapBox y API Glovo. Despliegue en DigitalOcean con Docker.",
    highlights: ["Spring Boot + React", "Stripe & webhooks", "DigitalOcean"],
  },
  {
    type: "practicas",
    period: "En empresa",
    title: "Arendel.es & Entregalia.com",
    description:
      "Desarrollo y despliegue de sitios web corporativos en un entorno profesional durante las prácticas: frontend React, backend Spring Boot, mensajería por correo y hosting en Droplets.",
    highlights: ["React + Spring Boot", "Docker", "Sitios en producción"],
  },
  {
    type: "tfg",
    period: "Trabajo de Fin de Grado",
    title: "E-Commerce Streetwear & Gestión Veterinaria",
    description:
      "Dos proyectos de fin de grado: plataforma e-commerce con Laravel (catálogo, carrito, pagos) y sistema de gestión veterinaria en equipo con React y Laravel.",
    highlights: ["Laravel", "React", "Trabajo en equipo"],
  },
];

const badgeLabels = {
  profesional: "Profesional",
  practicas: "Prácticas",
  tfg: "TFG",
};

function Experience() {
  const titleRef = useScrollAnimation(0.2);
  const timelineRef = useScrollStagger(0.3);

  return (
    <section id="experiencia" className="experience">
      <div className="container">
        <span className="brutal-section-tag">// Trayectoria</span>
        <h2 ref={titleRef} className="section-heading" data-brutal>Experiencia</h2>
        <p className="experience-intro">
          Trayectoria combinando proyectos en producción, prácticas con clientes reales y TFGs con stack completo.
        </p>
        <div className="experience-timeline" ref={timelineRef} data-brutal-stagger>
          {experiences.map((item, index) => (
            <article key={index} className="experience-card">
              <div className="experience-card__marker" aria-hidden="true" />
              <div className="experience-card__body">
                <div className="experience-card__meta">
                  <span className={`experience-badge experience-badge--${item.type}`}>
                    {badgeLabels[item.type]}
                  </span>
                  <span className="experience-card__period">{item.period}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="experience-highlights">
                  {item.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
