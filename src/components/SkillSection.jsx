import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiExpress,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import Skills from "./Skills";

const SkillSection = () => {
  const skillsData = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      level: "Expert",
      color: "text-orange-500",
      shadow: "hover:shadow-orange-500/10",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      level: "Expert",
      color: "text-blue-500",
      shadow: "hover:shadow-blue-500/10",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: "Intermediate",
      color: "text-yellow-400",
      shadow: "hover:shadow-yellow-400/10",
    },
    {
      name: "React",
      icon: <FaReact />,
      level: "Advanced",
      color: "text-sky-400",
      shadow: "hover:shadow-sky-400/10",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      level: "Expert",
      color: "text-cyan-400",
      shadow: "hover:shadow-cyan-400/10",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      level: "Intermediate",
      color: "text-yellow-500",
      shadow: "hover:shadow-yellow-500/10",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      level: "Learning",
      color: "text-green-500",
      shadow: "hover:shadow-green-500/10",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      level: "Learning",
      color: "text-gray-600 dark:text-gray-300",
      shadow: "hover:shadow-gray-500/10",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: "Learning",
      color: "text-green-600",
      shadow: "hover:shadow-green-600/10",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      level: "Intermediate",
      color: "text-[#4479A1]",
      shadow: "hover:shadow-[#4479A1]/10",
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      level: "Intermediate",
      color: "text-pink-500",
      shadow: "hover:shadow-pink-500/10",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      level: "Advanced",
      color: "text-orange-600",
      shadow: "hover:shadow-orange-600/10",
    },
    {
      name: "VS Code",
      icon: <VscCode />,
      level: "Expert",
      color: "text-blue-500",
      shadow: "hover:shadow-blue-500/10",
    },
  ];

  return (
    <section
      id="skills"
      className="lg:py-20 md:py-12 py-6 bg-white dark:bg-[#08080a] transition-colors duration-700 relative overflow-hidden"
    >
      {/* Subtle Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}

        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[2px] w-12 bg-indigo-500"></span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs">
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            Tech <span className="text-indigo-500">Stack.</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
          {skillsData.map((skill, index) => (
            <Skills key={index} {...skill} />
          ))}
        </div>

        {/* Footer Accent */}
        <div className="mt-24 flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
          <div className="h-[1px] w-full max-w-xs bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent mb-4"></div>
          <p className="text-gray-500 dark:text-gray-500 text-[11px] font-medium tracking-[0.2em] uppercase">
            Continuous Learning • Growing Everyday
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
