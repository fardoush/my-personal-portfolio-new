import React from "react";

const Skills = ({ name, icon, level, color, shadow }) => {
  return (
    <div
      className={`group relative p-8 rounded-[2.5rem] flex flex-col items-center justify-center gap-5 transition-all duration-500 hover:-translate-y-3 border border-gray-100 dark:border-white/5 bg-white/80 dark:bg-[#111114] shadow-sm ${shadow}`}
    >
      {/* Hover Ring Effect */}
      <div className="absolute inset-0 rounded-[2.5rem] border border-transparent group-hover:border-indigo-500/20 transition-all duration-700 scale-95 group-hover:scale-105"></div>

      {/* Icon with Glow */}
      <div
        className={`text-6xl ${color} transition-all duration-500 group-hover:scale-110 relative z-10`}
      >
        <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity bg-current rounded-full"></div>
        <div className="relative">{icon}</div>
      </div>

      {/* Text Info */}
      <div className="text-center z-10">
        <h4 className="text-gray-900 dark:text-white font-black text-[14px] uppercase tracking-tighter group-hover:tracking-widest transition-all duration-500">
          {name}
        </h4>

        <div
          className={`mt-3 text-[9px] font-bold px-4 py-1 rounded-full border transition-all duration-500 ${
            level === "Learning"
              ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/20"
              : "bg-transparent border-gray-200 dark:border-white/10 text-gray-400 dark:text-gray-500 group-hover:border-indigo-500 group-hover:text-indigo-500"
          }`}
        >
          {level}
        </div>
      </div>

      {/* Decorative line at bottom */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 group-hover:w-16"></div>
    </div>
  );
};

export default Skills;
