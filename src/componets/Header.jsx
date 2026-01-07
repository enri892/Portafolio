import React from "react";
import "./Header.css";
import { useStaggerIn } from '../hooks/useAnimations';

function Header() {
  const navRef = useStaggerIn(0.3);

  return (
    <header className="header">
      <h1 className="logo">&lt;/EnriqueUrib3&gt;</h1>

      <nav className="nav" ref={navRef}>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
