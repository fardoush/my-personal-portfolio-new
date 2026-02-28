import React, { useEffect, useState } from "react";
import PortfolioModal from "./PortfolioModal";
import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "React App", "Backend", "Other"];

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading portfolio:", err));
  }, []);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="min-h-screen bg-white dark:bg-[#08080a] text-slate-900 dark:text-white lg:py-20 md:py-12 py-8 px-4 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[2px] w-12 bg-indigo-500"></span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs">
              Curated Work
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            Featured <span className="text-indigo-500">Projects.</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeTab === cat
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-indigo-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
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

export default PortfolioSection;
