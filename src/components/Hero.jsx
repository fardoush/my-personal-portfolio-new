import React from "react";
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiJavascript, SiFigma } from "react-icons/si";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-[#08080a] text-gray-900 dark:text-white flex items-center overflow-hidden transition-colors duration-500 pt-16 sm:pt-0">
      <div className="lg:container w-full mx-auto px-6 py-12 sm:py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* --- LEFT CONTENT --- */}
        <div className="order-2 lg:order-1 text-center lg:text-left relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold mb-6 tracking-[0.2em] uppercase">
            Frontend Developer
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight mb-6">
            Building The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Future of Web
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-base md:text-xl max-w-xl mb-10 mx-auto lg:mx-0 leading-relaxed">
            Hi, I'm{" "}
            <span className="text-gray-900 dark:text-white font-bold underline decoration-indigo-500 underline-offset-8">
              Jahanara Fardoush
            </span>
            . I craft high-performance, beautiful user interfaces that solve
            real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 px-4 sm:px-0">
            <button className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
              VIEW PROJECTS{" "}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-gray-300 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-gray-500 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95">
              DOWNLOAD CV <FaDownload className="text-sm text-indigo-500" />
            </button>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 mt-12 text-gray-400">
            <a
              href="#"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* --- RIGHT SIDE: IMAGE & ORBITING ICONS --- */}
        <div className="order-1 lg:order-2 flex justify-center items-center relative h-[400px] sm:h-[450px] md:h-[550px]">
          {/* Main Photo Wrapper (Layer: z-20) */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 z-20 animate-float">
            <div className="absolute inset-0 bg-indigo-600/20 rounded-[3rem] rotate-6 blur-2xl"></div>
            <div className="relative h-full w-full bg-gray-50 dark:bg-[#111116] border-2 border-gray-200 dark:border-gray-800 rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co.com/8TDRdgB/81500102-771823583329068-985863245480853504-n.jpg"
                alt="Jahanara Fardoush"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Available Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-[#111116] border border-gray-200 dark:border-gray-800 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-2xl z-30">
              <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-gray-500 dark:text-gray-300 tracking-wider">
                AVAILABLE FOR PROJECTS
              </span>
            </div>
          </div>

          {/* Orbiting Icons (Layer: z-50) */}
          <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
            {/* React */}
            <div className="animate-orbit delay-1">
              <div className="bg-white/95 dark:bg-[#111116]/90 p-3 rounded-xl border border-gray-200 dark:border-white/10 text-sky-500 shadow-xl pointer-events-auto">
                <SiReact size={26} />
              </div>
            </div>

            {/* Tailwind */}
            <div className="animate-orbit delay-2">
              <div className="bg-white/95 dark:bg-[#111116]/90 p-3 rounded-xl border border-gray-200 dark:border-white/10 text-cyan-500 shadow-xl pointer-events-auto">
                <SiTailwindcss size={26} />
              </div>
            </div>

            {/* Javascript */}
            <div className="animate-orbit delay-3">
              <div className="bg-white/95 dark:bg-[#111116]/90 p-3 rounded-xl border border-gray-200 dark:border-white/10 text-yellow-500 shadow-xl pointer-events-auto">
                <SiJavascript size={26} />
              </div>
            </div>

            {/* Figma */}
            <div className="animate-orbit delay-4">
              <div className="bg-white/95 dark:bg-[#111116]/90 p-3 rounded-xl border border-gray-200 dark:border-white/10 text-pink-500 shadow-xl pointer-events-auto">
                <SiFigma size={26} />
              </div>
            </div>
          </div>

          {/* Glow Behind Everything */}
          <div className="absolute w-80 h-80 bg-indigo-600/10 blur-[120px] rounded-full z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
