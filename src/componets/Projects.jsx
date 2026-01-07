import React, { useState } from "react";
import {
  FaServer,
  FaGraduationCap,
  FaRocket,
  FaBuilding,
  FaChartBar,
  FaDocker,
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

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showStreetwearModal, setShowStreetwearModal] = useState(false);
  const titleRef = useScrollAnimation(0.2);
  const projectsRef = useScrollStagger(0.3);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Streetwear",
      description:
        "Plataforma de comercio electrónico de ropa streetwear con catálogo de productos, carrito de compras y sistema de pagos.",
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
        "Catálogo de productos",
        "Carrito de compras",
        "Sistema de autenticación",
        "Gestión de inventario",
        "Panel de administración",
      ],
      github: "https://youtu.be/zBt2wpjKVmQ?si=1OHJuOwA8bG9mBVj",
      demo: "#",
    },
    {
      id: 2,
      title: "Sistema SaaS Multi-Tenant",
      description:
        "Plataforma SaaS totalmente funcional con sistema de pagos Stripe, autenticación JWT y gestión multi-tenant desplegada en DigitalOcean.",
      technologies: [
        "SpringBoot",
        "React",
        "PostgreSQL",
        "JWT",
        "Google OAuth",
        "API REST",
        "Stripe",
        "Webhooks Stripe",
        "Docker",
        "DigitalOcean",
      ],
      icon: <FaCreditCard />,
      features: [
        "Login/Register con JWT",
        "Autenticación con Google",
        "Sistema completo de sesiones",
        "Gestión de tokens de sesión",
        "Control de tiempo de sesión",
        "Refresh tokens",
        "Sesiones activas",
        "Cierre de sesión remoto",
        "API REST completa",
        "Sistema de pagos Stripe",
        "Webhooks de Stripe",
        "Arquitectura multi-tenant",
        "Dashboard en tiempo real",
        "Gestión de suscripciones",
        "Sistema de mensajería por correo",
        "Panel completo de administración de RiTrack",
        "Despliegue en Droplets",
        "Frontend responsivo",
        "Botón de accesibilidad",
      ],
      github: "https://hargos.es",
      demo: "https://hargos.es",
    },
    {
      id: 3,
      title: "Sistema de Tracking de Riders (RiTrack)",
      description:
        "Aplicación web de seguimiento de riders en tiempo real conectada con hargos.es, usando WebSockets y API de Glovo para gestión completa de entregas.",
      technologies: [
        "React",
        "SpringBoot",
        "PostgreSQL",
        "JWT",
        "API Glovo",
        "WebSockets",
        "DigitalOcean",
        "Docker",
      ],
      icon: <FaMotorcycle />,
      features: [
        "Tracking en tiempo real",
        "Conexión con JWT de hargos.es",
        "CRUD completo de riders",
        "Bloqueo de riders",
        "Seguimiento de pedidos mediante MapBox",
        "Personalización de mapas",
        "Filtro del mapa por ciudad",
        "Restringir ciudades a trabajadores",
        "Uso de GeoJson para las ciudades",
        "Gestión de estados",
        "WebSockets para comunicación",
        "API Glovo integrada",
        "Despliegue en Droplets",
        "Sistema de configuración tenant",
        "Gestión de trabajadores",
        "Invitaciones por código/enlace",
        "Configuración localhost completa",
        "Diferenciación de roles",
        "Permisos por rol",
        "Gestión jerárquica",
        "Sistema de métricas",
        "Subida de CSV",
        "Base de datos de métricas por rider",
        "Análisis de rendimiento",
        "Filtro de búsqueda",
        "Descarga de métricas filtradas",
        "Exportación de datos",
        "Búsqueda avanzada",
        "Panel de administración",
        "Estadísticas en tiempo real",
        "Gestión de zonas de cobertura",
        "Reportes automáticos",
        "Monitoreo de servicio",
        "Sistema de bloqueo automático",
        "Dashboard analítico",
        "Balanceador de carga",
        "Caché de rendimiento",
      ],
    },
    {
      id: 4,
      title: "Páginas Web Desplegadas",
      description:
        "Desarrollo y despliegue de sitios web empresariales con frontend en React y backend con SpringBoot para sistema de mensajería.",
      technologies: [
        "React",
        "SpringBoot",
        "Docker",
        "DigitalOcean",
        "MySQL",
        "Email Service",
      ],
      icon: <FaGlobe />,
      features: [
        "Arendel.es - Sitio web corporativo",
        "Entregalia.com - Sitio web corporativo",
        "Sistema de mensajería por correo",
        "Backend con SpringBoot",
        "Despliegue en DigitalOcean Droplet",
        "Contenerización con Docker",
      ],
      github: "https://arendel.es",
      demo: "https://entregalia.com",
    },
    {
      id: 5,
      title: "Sistema de Gestión Veterinaria",
      description:
        "Aplicación completa para gestión de veterinaria con panel de administración, calendario de citas y control de clientes, mascotas y tratamientos.",
      technologies: [
        "React",
        "Laravel",
        "Docker",
        "PostgreSQL",
        "JavaScript",
        "HTML5",
        "CSS3",
        "API REST",
        "Calendar",
      ],
      icon: <FaPaw />,
      features: [
        "Panel de administración",
        "Panel de usuario/cliente",
        "Gestión de citas",
        "Calendario interactivo con Calendar",
        "Gestión de pacientes (mascotas)",
        "Registro de clientes",
        "Historial médico",
        "Control de tratamientos",
        "Sistema de recordatorios",
        "Agenda de veterinarios",
        "Reportes y estadísticas",
        "Autenticación de usuarios",
        "Roles y permisos",
        "Base de datos relacional",
        "API REST completa",
        "Sistema de backups",
        "Despliegue con Docker",
        "Frontend responsivo",
        "Gestión de servicios",
        "Búsqueda avanzada",
        "Integración de emails",
      ],
      github: "https://github.com/danielantmann/TFG",
      demo: "https://github.com/danielantmann/TFG",
    },
  ];

  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <h2 ref={titleRef}>Mis Proyectos</h2>
        <div className="projects-grid" ref={projectsRef}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() =>
                setSelectedProject(
                  project.id === selectedProject ? null : project.id
                )
              }
            >
              <div className="project-image">
                <div className="project-icon">{project.icon}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
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
                      <h4>Características:</h4>
                      <ul>
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-links">
                      {project.id === 4 ? (
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
                      ) : (
                        <button 
                          className="project-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.id === 3) {
                              setShowVideoModal(true);
                            } else if (project.id === 1) {
                              setShowStreetwearModal(true);
                            } else {
                              window.open(project.github, '_blank', 'noopener noreferrer');
                            }
                          }}
                        >
                          Ver Proyecto
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for video */}
        {showVideoModal && (
          <div className="video-modal-overlay" onClick={() => setShowVideoModal(false)}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="video-modal-close" onClick={() => setShowVideoModal(false)}>
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

        {/* Modal for streetwear */}
        {showStreetwearModal && (
          <div className="video-modal-overlay" onClick={() => setShowStreetwearModal(false)}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="video-modal-close" onClick={() => setShowStreetwearModal(false)}>
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
