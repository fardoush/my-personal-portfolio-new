import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { GoArrowUpRight } from "react-icons/go";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-[#08080a]/80 backdrop-blur-xl py-3 border-b border-gray-200 dark:border-white/10 shadow-lg"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 md:px-12 flex justify-between items-center">
          {/* Logo & Hire Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="group cursor-pointer">
              {/* <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border-2 border-indigo-500 flex items-center justify-center text-white font-black text-xs sm:text-sm bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)] group-hover:rotate-12 transition-all duration-300">
                JF
              </div> */}
              <h2 className=" text-xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
              Jahanara<span className="text-indigo-500">F.</span>
            </h2>
            </div>
            {/* <button className="hidden sm:block px-5 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-[11px] font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-500/20">
              HIRE ME ↗
            </button> */}
          </div>

          {/* Desktop Navigation (Visible Only on LG) */}
          <div className="hidden lg:flex items-center bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-8 py-2.5 rounded-full backdrop-blur-md">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-white text-[13px] font-bold transition-colors uppercase tracking-[0.1em]"
                  >
                    {link.name}
                  </a>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Always Visible Toggle */}
            <ThemeToggle />

            {/* Hamburger Icon (Hidden on LG) */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-gray-800 dark:text-white p-2 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 active:scale-90 transition-all"
            >
              <HiMenuAlt3 size={24} className="" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[120] bg-white/98 dark:bg-[#08080a]/98 backdrop-blur-2xl flex flex-col transition-all duration-700 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 sm:p-8 border-b border-gray-100 dark:border-white/5">
          {/* <span className="text-indigo-600 font-black text-2xl tracking-tighter">
            JF.
          </span> */}
           <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
              Jahanara<span className="text-indigo-500">F.</span>
            </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 dark:text-white p-2.5 bg-gray-100 dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10"
          >
            <HiX size={26} />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              onClick={() => setIsOpen(false)}
              href={link.href}
              className={`text-3xl sm:text-4xl font-black text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-500 transition-all transform ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <button className="mt-10 w-full max-w-[280px] py-4 bg-indigo-600 text-white font-black rounded-2xl shadow-xl active:scale-95 transition-all">
            LET'S TALK
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
