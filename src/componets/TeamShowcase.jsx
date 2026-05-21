import React from "react";
import "./TeamShowcase.css";
import { useScrollAnimation, useScrollStagger } from "../hooks/useScrollAnimations";

const roles = [
  {
    title: "Frontend",
    tag: "UI / UX",
    desc: "React, interfaces en producción y experiencias interactivas.",
  },
  {
    title: "Backend",
    tag: "APIs",
    desc: "APIs REST, lógica de negocio y bases de datos bien estructuradas.",
  },
  {
    title: "DevOps",
    tag: "Deploy",
    desc: "Docker, DigitalOcean, CI/CD y apps listas para producción.",
  },
  {
    title: "Producto",
    tag: "Full Cycle",
    desc: "De la idea al deploy: diseño, desarrollo y puesta en marcha.",
  },
];

function TeamShowcase() {
  const titleRef = useScrollAnimation(0.2);
  const gridRef = useScrollStagger(0.25);

  return (
    <section id="perfil" className="team-showcase">
      <div className="container">
        <span className="brutal-section-tag">// Perfil multidisciplinar</span>
        <h2 ref={titleRef} className="section-heading" data-brutal>
          Áreas en las que trabajo
        </h2>
        <p className="team-showcase__intro">
          Me interesa participar en distintas partes del desarrollo: interfaz, servidor,
          despliegue y coordinación con el equipo. Siempre aprendiendo y abierto a nuevos retos.
        </p>

        <div className="team-showcase__layout">
          <article className="team-lead" data-brutal>
            <div className="team-lead__avatar" aria-hidden="true">
              EU
            </div>
            <div className="team-lead__info">
              <span className="brutal-label">Full Stack Developer</span>
              <h3>Enrique Uribe</h3>
              <p>
                Basado en Madrid. Experiencia en proyectos profesionales, prácticas con
                clientes reales y proyectos académicos de fin de grado. Me gusta colaborar,
                escuchar y aportar lo que pueda en cada etapa.
              </p>
              <ul className="team-lead__highlights">
                <li>Proyectos profesionales</li>
                <li>Prácticas con clientes reales</li>
                <li>Proyectos académicos (TFG)</li>
              </ul>
            </div>
          </article>

          <div
            className="team-roles"
            ref={gridRef}
            data-brutal-stagger
          >
            {roles.map((role, index) => (
              <article key={index} className="team-role-card">
                <span className="team-role-card__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="brutal-label">{role.tag}</span>
                <h4>{role.title}</h4>
                <p>{role.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamShowcase;
