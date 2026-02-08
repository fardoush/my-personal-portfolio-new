import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  // প্রজেক্টের ডাটা এখানে যোগ করবেন
  const projectData = [
    {
      id: 1,
      title: "E-Commerce Experience",
      description: "A fully responsive modern store with high performance and smooth UI animations.",
      tags: ["React", "Tailwind", "Node.js"],
      image: "https://via.placeholder.com/600x400", // আপনার প্রজেক্টের স্ক্রিনশট দিন
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Social Dashboard",
      description: "Real-time analytics dashboard for monitoring user engagement and data visualization.",
      tags: ["Next.js", "Firebase", "Chart.js"],
      image: "https://via.placeholder.com/600x400",
      github: "#",
      live: "#"
    },
    // আরও প্রজেক্ট এখানে বাড়াতে পারেন
  ];

  return (
    <section id="works" className="py-32 bg-white dark:bg-[#08080a] transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[2px] w-12 bg-indigo-500"></span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs">
              Selected Works
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            Featured <span className="text-indigo-500">Projects.</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projectData.map((project) => (
            <div key={project.id} className="group relative">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-[#111116] border border-gray-200 dark:border-white/5 shadow-2xl transition-all duration-500 group-hover:shadow-indigo-500/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[350px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-indigo-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                  <a href={project.github} className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-indigo-900 transition-all active:scale-90">
                    <FaGithub size={24} />
                  </a>
                  <a href={project.live} className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-indigo-900 transition-all active:scale-90">
                    <FaExternalLinkAlt size={22} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-8 px-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-[10px] font-black uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-4 py-1.5 rounded-lg border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button (Optional) */}
        <div className="mt-24 text-center">
            <button className="px-10 py-5 bg-transparent border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold rounded-2xl hover:border-indigo-500 transition-all active:scale-95">
                Explore More Projects
            </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;