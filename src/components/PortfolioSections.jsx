import React, { useEffect, useState } from "react";
import PortfolioModal from "./PortfolioModal";
import PortfolioCard from "./PortfolioCard";

const PortfolioSections = () => {
    const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading portfolio:", err));
  }, []);
    return (
        <section className="min-h-screen bg-white dark:bg-[#08080a] text-slate-900 dark:text-white lg:py-24 md:py-16 py-10 px-4 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <span className="h-[2px] w-12 bg-indigo-500"></span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            Featured <span className="text-indigo-500">Projects.</span>
          </h2>
          
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <PortfolioModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
    );
};

export default PortfolioSections;