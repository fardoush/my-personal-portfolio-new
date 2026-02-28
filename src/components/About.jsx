import React from "react";
import { FaCode, FaCoffee, FaDownload, FaRocket } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const About = () => {
  const aboutContent = {
    badge: {
      number: "3+",
      label: "Year of Experience",
    },
    sectionTitle: "Who am I?",
    heading: {
      regular: "Crafting Digital Experiences",
      gradient: "With Code & Logic",
    },
    paragraphs: [
      {
        id: 1,
        content: (
          <>
            Hi, I'm a passionate{" "}
            <span className="text-gray-900 dark:text-white font-semibold underline decoration-indigo-500/30">
              Frontend Developer
            </span>{" "}
            dedicated to building visually stunning and highly functional web
            applications. With a strong foundation in{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              React & Tailwind CSS
            </span>
            , I specialize in turning complex problems into elegant designs.
          </>
        ),
      },
      {
        id: 2,
        content: (
          <>
            Currently, I'm expanding my horizons by diving deep into{" "}
            <span className="text-emerald-600 dark:text-green-500 italic font-medium">
              Backend Development
            </span>{" "}
            (Node.js, Express.js & MongoDB). I believe in clean code, continuous
            learning, and coffee-driven development!
          </>
        ),
      },
    ],
    stats: [
      {
        id: 1,
        icon: <FaCode />,
        label: "Clean Code",
        color: "text-indigo-500",
      },
      {
        id: 2,
        icon: <FaRocket />,
        label: "Performance",
        color: "text-purple-500",
      },
      {
        id: 3,
        icon: <FaCoffee />,
        label: "Hard Work",
        color: "text-orange-500",
      },
    ],
    profileImage:
      "https://i.ibb.co.com/Pzghn0kL/597360935-2289533001558111-7439562014991189627-n.jpg",
  };
  return (
    <section className="bg-white dark:bg-[#08080a] lg:py-20 md:py-12 py-6 px-6 md:px-12 overflow-hidden transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* left side Image  */}
          <div className="relative group">
            {/* bg shap glow */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-indigo-600/10 dark:bg-indigo-600/20 blur-[100px] rounded-full group-hover:bg-indigo-600/30 transition-all duration-700"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-600/5 dark:bg-purple-600/10 blur-[100px] rounded-full group-hover:bg-purple-600/20 transition-all duration-700"></div>
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#111116] p-4 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <img
                src={aboutContent.profileImage}
                alt=""
                className="rounded-[2rem] w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 object-cover"
              />
            </div>

            {/* experience badge overlay */}
            <div className="absolute bottom-10 right-10 bg-indigo-600 p-6 rounded-2xl shadow-2xl border border-white/10 hidden md:block animate-bounce hover:scale-110 z-20">
              <p className="text-3xl font-black text-white">
                {aboutContent.badge.number}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-100">
                {aboutContent.badge.label}
              </p>
            </div>
          </div>
          {/* Right side content  */}
          <div className="flex flex-col text-center lg:text-left">
            <h4 className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-[0.3em] text-sm mb-4">
              {aboutContent.sectionTitle}
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
              {aboutContent.heading.regular} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                {aboutContent.heading.gradient}
              </span>
            </h2>
            <div className="space-y-6">
              {aboutContent.paragraphs.map((para) => (
                <p
                  key={para.id}
                  className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
                >
                  {para.content}
                </p>
              ))}
            </div>

            {/* Stats/Icons Row */}
            <div className="grid grid-cols-3 gap-4 my-10 border-y border-gray-100 dark:border-white/5 py-8">
              {aboutContent.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col items-center lg:items-start group/stat"
                >
                  <div
                    className={`${stat.color} text-2xl mb-2 group-hover/stat:scale-125 transition-transform`}
                  >
                    {stat.icon}
                  </div>
                  <span className="text-gray-800 dark:text-white font-bold text-xs md:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            {/* Buttons Section */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
              {/* Download CV Button */}
              <a href="/public/Jahanara Fardoush FED.docx.pdf" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-600/30 active:scale-95 group border-none">
                Download CV{" "}
                <FaDownload className="group-hover:translate-y-1 transition-transform" />
              </a>

              {/* Get In Touch Button */}
              <a href="#contact" className="flex items-center gap-3 px-8 py-4 bg-gray-50 dark:bg-transparent border-2 border-gray-200 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 text-gray-900 dark:text-white font-bold rounded-2xl transition-all active:scale-95">
                Get In Touch{" "}
                <HiOutlineMail className="text-xl text-indigo-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
