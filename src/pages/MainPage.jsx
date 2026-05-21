import React from "react";
import Header from "../componets/Header";
import AboutMe from "../componets/AboutMe";
import Experience from "../componets/Experience";
import TeamShowcase from "../componets/TeamShowcase";
import Projects from "../componets/Projects";
import Contact from "../componets/Contact";
import Footer from "../componets/Footer";

function MainPage() {
  return (
    <>
      <Header />
      <AboutMe />
      <Experience />
      <TeamShowcase />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default MainPage;
