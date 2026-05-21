import React, { useState } from "react";
import "./Header.css";
import { useStaggerIn } from "../hooks/useAnimations";

function Header() {
  const navRef = useStaggerIn(0.3);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark" ref={navRef}>
        <div className="container">
          <a href="#sobre-mi" className="navbar-brand logo mb-0" onClick={closeMenu}>
            &lt;/EnriqueUribe&gt;
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-controls="navbarNav"
            aria-expanded={menuOpen}
            aria-label="Abrir menú de navegación"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end${menuOpen ? " show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#sobre-mi" onClick={closeMenu}>
                  Sobre mí
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experiencia" onClick={closeMenu}>
                  Experiencia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#perfil" onClick={closeMenu}>
                  Perfil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#proyectos" onClick={closeMenu}>
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto" onClick={closeMenu}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
