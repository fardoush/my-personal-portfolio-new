import React from "react";
import Hero from "./Hero";
import SkillSection from "./SkillSection";
import About from "./About";
// import Projects from "./Projects";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServiceSection";
import ContactInfo from "./ContactInfo";
import ProfessionalJourny from "./ProfessionalJourny";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <SkillSection />
      </div>
      <div id="projects">
        <PortfolioSection />
      </div>
      <div id="resume">
        <ProfessionalJourny />
      </div>
      {/* <Projects/> */}
      <div id="service">
        <ServicesSection />
      </div>
      <div id="contact">
        <ContactInfo />
      </div>
    </div>
  );
};

export default HomePage;
