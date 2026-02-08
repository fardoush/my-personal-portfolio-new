import React from "react";
import Hero from "./Hero";
import SkillSection from "./SkillSection";
import About from "./About";
// import Projects from "./Projects";
import ProfessionalJourny from "./ProfessionalJourny";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServiceSection";
import ContactInfo from "./ContactInfo";

const HomePage = () => {
  return (
    <div>
      <Hero />
       <About />
       <ProfessionalJourny/>
      <SkillSection />
      {/* <Projects/> */}
      <PortfolioSection/>
      <ServicesSection/>
      <ContactInfo/>
     
    </div>
  );
};

export default HomePage;
