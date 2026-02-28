import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PortfolioCard = ({ project, onClick }) => {
  const { img, title, category } = project;

  return (
    <div className="group bg-slate-50 dark:bg-[#121217] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
      <div className="relative h-72 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-8">
        <span className="text-[11px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
          {category}
        </span>
        <h3 className="text-2xl font-bold mt-2 mb-6 text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 transition-colors">
          {title}
        </h3>

        <button
          onClick={onClick}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all group/btn"
        >
          View Case Study
          <FaArrowRight
            className="group-hover/btn:translate-x-1 transition-transform"
            size={14}
          />
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
