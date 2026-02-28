import React from "react";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PortfolioModal = ({ project, onClose }) => {
  const { img, title, category, details, tech, gitLink, liveLink } = project;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 dark:bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white dark:bg-[#16161e] w-full max-w-3xl rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] flex flex-col">
        {/* Scrollable Content Area */}
        <div className="overflow-y-auto custom-scrollbar">
          {/* Image Section */}
          <div className="relative h-64 md:h-80 shrink-0">
            <img src={img} className="w-full h-full object-cover" alt={title} />
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-3 bg-gray-300 dark:bg-black/40 hover:bg-red-500 backdrop-blur-md  text-white rounded-full transition-colors z-10"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Details Section */}
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-xs font-black rounded-full border border-indigo-100 dark:border-indigo-600/20 uppercase">
                {category}
              </span>
              <div className="flex gap-4">
                <a
                  href={gitLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt size={22} />
                </a>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 dark:text-white">
              {title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-8">
              {details}
            </p>

            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 bg-slate-100 dark:bg-[#1f1f2b] rounded-lg text-[12px] font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
