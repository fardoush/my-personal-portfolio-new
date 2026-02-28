import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaServer, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    title: "Single Page Applications (SPA)",
    desc: "Building fast, interactive, and high-performance web applications using modern frameworks like React.js.",
    icon: <FaCode className="text-indigo-500" size={30} />,
    tag: "Frontend",
  },
  {
    title: "Figma to Code Conversion",
    desc: "Converting your UI/UX designs (Figma, Adobe XD) into pixel-perfect, clean, and maintainable frontend code.",
    icon: <FaPaintBrush className="text-purple-500" size={30} />,
    tag: "Design",
  },
  {
    title: "Performance Optimization",
    desc: "Enhancing website speed, optimizing images, and ensuring smooth animations for a seamless user experience.",
    icon: <FaServer className="text-emerald-500" size={30} />,
    tag: "Systems",
  },
  {
    title: "Responsive Web Design",
    desc: "Creating mobile-first, fully responsive layouts that look great on any screen size—from smartphones to desktops.",
    icon: <FaMobileAlt className="text-orange-500" size={30} />,
    tag: "Performance",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-white dark:bg-[#0a0a0c] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[2px] w-12 bg-indigo-500"></span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs">
              What I Offer
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            My <span className="text-indigo-500">Services.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-slate-50 dark:bg-[#121217] border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white dark:bg-[#1c1c24] rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white group-hover:text-indigo-500 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.desc}
              </p>

              {/* Decorative Corner */}
              <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
