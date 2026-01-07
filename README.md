# Portfolio Personal - Enrique Uribe

Este proyecto es un portfolio personal desarrollado con React y Vite, creado para mostrar mi experiencia profesional, proyectos destacados y facilitar el contacto con posibles colaboradores o empleadores.

---

## Descripción general

El portfolio ofrece las siguientes secciones:

- **Página principal**: Presentación personal, descarga de CV y un resumen interactivo de habilidades.
- **Proyectos destacados**: Cada proyecto incluye descripción, tecnologías usadas, funcionalidades clave y demos o videos interactivos.
- **Formulario de contacto**: Permite que los visitantes me envíen mensajes de manera directa, utilizando Formspree para gestionar el envío sin necesidad de un backend propio.
- **Navegación intuitiva**: Menú accesible que facilita moverse por las distintas secciones del portfolio, con diseño responsive adaptado a todos los dispositivos.

---

## Proceso de desarrollo

### Inicio del proyecto

- Se configuró el proyecto con Vite + React para un entorno rápido y con recarga en caliente.
- Se implementó ESLint para garantizar buenas prácticas de desarrollo y consistencia en el código.

### Organización y estilos

- Código estructurado en componentes reutilizables: `Header`, `Footer`, `Projects`, `AboutMe`, `Contact`, `VideoModal`, etc.
- Sistema de estilos propio utilizando CSS modular y variables CSS para mantener coherencia en colores, tipografía y layout.
- Tema visual oscuro profesional, con acentos de color sutiles y efectos de glassmorphism.

### Animaciones y efectos

- Se añadieron animaciones personalizadas al hacer scroll mediante hooks (`useScrollAnimations`, `useScrollStagger`).
- Microinteracciones y transiciones suaves en elementos interactivos como botones y tarjetas de proyectos.

---

## Componentes principales

- **AboutMe**: Sección con un preview de código simulado y listado de habilidades categorizadas por Frontend, Backend, Base de Datos y DevOps.
- **Projects**: Lista de proyectos dinámicos con modal de video o demos, mostrando tecnologías y características de cada proyecto.
- **Contact**: Formulario con validación en tiempo real y feedback visual al enviar mensajes.

---

## Sistema de navegación

- Scroll suave entre secciones usando `scrollIntoView` y enlaces internos.
- Menú sticky que permite acceder a cualquier sección de manera rápida.

---

## Recursos y assets incluidos

- **Vídeos**: Archivos MP4 para demostraciones de proyectos.
- **Documentos**: PDF de CV para descarga directa.
- **Iconos**: Favicon personalizado y librerías de iconos de tecnologías.
- **Estilos**: CSS modular con sistema de variables y soporte responsive.

---

## Tecnologías empleadas

| Tecnología | Descripción |
|------------|-------------|
| **React** | Biblioteca principal para la construcción de interfaces. |
| **Vite** | Herramienta de build y desarrollo rápido. |
| **React Icons** | Iconografía integrada en componentes. |
| **Formspree** | Gestión de envíos de formularios sin backend. |
| **ESLint** | Linter para mantener buenas prácticas de código. |
| **CSS Variables** | Sistema de diseño consistente y mantenible. |
| **Hooks personalizados** | Animaciones y efectos de scroll. |

---

## Características destacadas

- Modal interactivo de video para mostrar demos de proyectos.
- Editor simulado para preview de código en AboutMe.
- Layout responsive optimizado para desktop, tablet y móvil.
- Animaciones suaves y microinteracciones en elementos interactivos.
- Tema unificado y profesional con colores consistentes.
- Navegación clara y accesible con menú sticky.

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Header.jsx
│   ├── AboutMe.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── VideoModal.jsx
├── hooks/
│   └── useScrollAnimations.js
├── pages/
│   └── MainPage.jsx
├── App.css
├── App.jsx
└── main.jsx

public/
├── favicon.svg
├── favicon.ico
├── CV.pdf
└── proyectos/
```

---

## Despliegue

El proyecto fue testeado localmente y es compatible con cualquier hosting de aplicaciones React estático, incluyendo:

- Vercel
- Netlify
- GitHub Pages

---

## Autor

**Enrique Uribe** – Full Stack Developer

- **GitHub**: [github.com/enri892](https://github.com/enri892)
- **LinkedIn**: [linkedin.com/in/enrique-uribe](https://www.linkedin.com/in/enrique-uribe-954072379/)
- **Email**: enriqueurib0505@gmail.com

---

¡Gracias por visitar mi portfolio!