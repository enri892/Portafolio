import React, { useState } from "react";
import {
  FaShoppingBag,
  FaGlobe,
  FaCreditCard,
  FaMotorcycle,
  FaTimes,
  FaPaw,
} from "react-icons/fa";
import "./Projects.css";
import "./VideoModal.css";
import {
  useScrollAnimation,
  useScrollStagger,
} from "../hooks/useScrollAnimations";

const badgeLabels = {
  profesional: "Profesional",
  practicas: "Prácticas",
  tfg: "TFG",
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showStreetwearModal, setShowStreetwearModal] = useState(false);
  const titleRef = useScrollAnimation(0.2);
  const projectsRef = useScrollStagger(0.25);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Streetwear",
      badge: "tfg",
      context: "Trabajo de Fin de Grado — e-commerce completo con Laravel.",
      description:
        "Plataforma de comercio electrónico de ropa streetwear con catálogo, carrito, autenticación y panel de administración.",
      technologies: [
        "Laravel",
        "HTML5",
        "CSS3",
        "Docker",
        "API REST",
        "Laravel Sanctum",
      ],
      icon: <FaShoppingBag />,
      features: [
        "Catálogo y carrito de compras",
        "Autenticación con Laravel Sanctum",
        "Panel de administración e inventario",
        "API REST y despliegue con Docker",
      ],
      github: "https://youtu.be/zBt2wpjKVmQ?si=1OHJuOwA8bG9mBVj",
      linkLabel: "Ver demo en video",
    },
    {
      id: 2,
      title: "Sistema SaaS Multi-Tenant (Hargos)",
      badge: "profesional",
      context: "Proyecto profesional en producción — plataforma SaaS multi-tenant.",
      description:
        "SaaS con pagos Stripe, autenticación JWT, Google OAuth y gestión multi-tenant desplegado en DigitalOcean.",
      technologies: [
        "Spring Boot",
        "React",
        "PostgreSQL",
        "JWT",
        "Stripe",
        "Docker",
        "DigitalOcean",
      ],
      icon: <FaCreditCard />,
      features: [
        "Auth JWT, OAuth y gestión de sesiones",
        "Pagos y suscripciones con Stripe + webhooks",
        "Arquitectura multi-tenant y API REST",
        "Dashboard y despliegue en DigitalOcean",
      ],
      repositories: [
        {
          label: "HargosAuthSystem",
          url: "https://github.com/enri892/HargosAuthSystem/tree/dev",
        },
        {
          label: "HargosWeb",
          url: "https://github.com/enri892/HargosWeb/tree/dev",
        },
        {
          label: "HargosAppWeb",
          url: "https://github.com/enri892/HargosAppWeb/tree/dev",
        },
      ],
    },
    {
      id: 3,
      title: "Sistema de Tracking de Riders (RiTrack)",
      badge: "profesional",
      context: "Proyecto profesional — tracking en tiempo real integrado con la plataforma Hargos.",
      description:
        "Seguimiento de riders en tiempo real con WebSockets, MapBox y API de Glovo. Métricas, roles y panel de administración.",
      technologies: [
        "React",
        "Spring Boot",
        "PostgreSQL",
        "WebSockets",
        "MapBox",
        "API Glovo",
        "Docker",
      ],
      icon: <FaMotorcycle />,
      features: [
        "Tracking en tiempo real con WebSockets",
        "Mapas MapBox con GeoJSON y filtros por ciudad",
        "Integración API Glovo y gestión de riders",
        "Métricas, exportación CSV y panel admin",
      ],
      github: "https://github.com/enri892/RiTrackApp",
    },
    {
      id: 4,
      title: "Páginas Web Desplegadas",
      badge: "practicas",
      context: "Prácticas en empresa — sitios corporativos en producción.",
      description:
        "Desarrollo y despliegue profesional de webs empresariales con React, Spring Boot y sistema de mensajería.",
      technologies: [
        "React",
        "Spring Boot",
        "Docker",
        "DigitalOcean",
        "MySQL",
      ],
      icon: <FaGlobe />,
      features: [
        "Arendel.es y Entregalia.com en producción",
        "Backend Spring Boot con mensajería por correo",
        "Despliegue en DigitalOcean con Docker",
      ],
      github: "https://arendel.es",
      demo: "https://entregalia.com",
    },
    {
      id: 5,
      title: "Sistema de Gestión Veterinaria",
      badge: "tfg",
      context: "TFG en equipo — repositorio compartido del proyecto.",
      description:
        "Aplicación de gestión veterinaria con citas, historial médico, roles y panel de administración.",
      technologies: [
        "React",
        "Laravel",
        "Docker",
        "PostgreSQL",
        "API REST",
      ],
      icon: <FaPaw />,
      features: [
        "Gestión de citas con calendario interactivo",
        "Historial médico de mascotas y clientes",
        "Roles, permisos y panel de administración",
        "API REST y despliegue con Docker",
      ],
      github: "https://github.com/danielantmann/TFG",
      linkLabel: "Repo del equipo (TFG)",
    },
  ];

  const renderProjectLinks = (project) => {
    if (project.id === 4) {
      return (
        <>
          <a
            href={project.github}
            className="project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arendel.es
          </a>
          <a
            href={project.demo}
            className="project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entregalia.com
          </a>
        </>
      );
    }

    if (project.repositories) {
      return project.repositories.map((repo, index) => (
        <a
          key={index}
          href={repo.url}
          className="project-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.label}
        </a>
      ));
    }

    if (project.id === 3) {
      return (
        <>
          <button
            className="project-btn"
            onClick={(e) => {
              e.stopPropagation();
              setShowVideoModal(true);
            }}
          >
            Ver Video
          </button>
          <a
            href={project.github}
            className="project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            RiTrackApp
          </a>
        </>
      );
    }

    return (
      <button
        className="project-btn"
        onClick={(e) => {
          e.stopPropagation();
          if (project.id === 1) {
            setShowStreetwearModal(true);
          } else {
            window.open(project.github, "_blank", "noopener noreferrer");
          }
        }}
      >
        {project.linkLabel || "Ver Proyecto"}
      </button>
    );
  };

  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <span className="brutal-section-tag">// Proyectos</span>
        <h2 ref={titleRef} className="section-heading" data-brutal>
          Proyectos
        </h2>
        <p className="projects-intro">
          Una selección de mis trabajos. Haz clic en cada proyecto para ver más detalles, enlaces y demos.
        </p>
        <div
          className="projects-showcase"
          ref={projectsRef}
          data-brutal-stagger
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className={`case-study-card${selectedProject === project.id ? " case-study-card--open" : ""}${project.id % 2 === 0 ? " case-study-card--alt" : ""}`}
              onClick={() =>
                setSelectedProject(
                  project.id === selectedProject ? null : project.id
                )
              }
            >
              <div className="case-study-card__index" aria-hidden="true">
                {String(project.id).padStart(2, "0")}
              </div>
              <div className="case-study-card__visual">
                <div className="project-icon">{project.icon}</div>
              </div>
              <div className="case-study-card__body">
                <span className={`project-badge project-badge--${project.badge}`}>
                  {badgeLabels[project.badge]}
                </span>
                <h3>{project.title}</h3>
                <p className="project-context">{project.context}</p>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {selectedProject === project.id && (
                  <div className="project-details">
                    <div className="project-features">
                      <h4 className="brutal-label">Destacado</h4>
                      <ul>
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-links">
                      {renderProjectLinks(project)}
                    </div>
                  </div>
                )}
                <span className="case-study-card__cta brutal-label">
                  {selectedProject === project.id ? "Cerrar −" : "Ver más +"}
                </span>
              </div>
            </article>
          ))}
        </div>

        {showVideoModal && (
          <div
            className="video-modal-overlay"
            onClick={() => setShowVideoModal(false)}
          >
            <div
              className="video-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="video-modal-close"
                onClick={() => setShowVideoModal(false)}
              >
                <FaTimes />
              </button>
              <iframe
                className="video-modal-player"
                src="https://www.youtube-nocookie.com/embed/gjTUbWmKGJc?autoplay=1&mute=1"
                title="RiTrack Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-presentation"
              ></iframe>
            </div>
          </div>
        )}

        {showStreetwearModal && (
          <div
            className="video-modal-overlay"
            onClick={() => setShowStreetwearModal(false)}
          >
            <div
              className="video-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="video-modal-close"
                onClick={() => setShowStreetwearModal(false)}
              >
                <FaTimes />
              </button>
              <iframe
                className="video-modal-player"
                src="https://www.youtube-nocookie.com/embed/zBt2wpjKVmQ?si=1OHJuOwA8bG9mBVj&autoplay=1&mute=1"
                title="E-Commerce Streetwear Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-presentation"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
