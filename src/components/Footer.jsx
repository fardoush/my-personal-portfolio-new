import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const link = <>
  // <Link to="/" className="hover:text-indigo-500 transition-colors">Home</Link>
  // <Link to="about" className="hover:text-indigo-500 transition-colors">About</Link>
  // <Link to="projects" className="hover:text-indigo-500 transition-colors">Projects</Link>
  // <Link to="skills" className="hover:text-indigo-500 transition-colors">Skills</Link>
  // <Link to="" className="hover:text-indigo-500 transition-colors">Resume</Link>

  // </>
  return (
    <footer className="bg-white dark:bg-[#0a0a0c] border-t border-slate-100 dark:border-slate-900 pt-16 pb-8 px-4 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Top Part: Branding & Links */}
        <div className="flex flex-col md:flex-row justify-between  items-center gap-8 mb-12">
          <div className="max-w-xs">
            <Link
              to="/"
              className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4"
            >
              Jahanara<span className="text-indigo-500">F.</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-6">
              Modern Full-stack developer specialized in building sleek,
              high-performance web applications. Let's create something
              meaningful together.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/fardoush",
                label: "Github",
              },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/in/jahanara-fardoush-401193181/",
                label: "LinkedIn",
              },
              {
                icon: <FaTwitter />,
                link: "https://x.com/fardosuh",
                label: "Twitter",
              },
              { icon: <FaInstagram />, link: "#", label: "Instagram" },
            ].map((social, i) => (
              <a
                target="_blank"
                key={i}
                href={social.link}
                aria-label={social.label}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-[#121217] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-indigo-500 hover:border-indigo-500 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Part: Quick Navigation */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-100 dark:border-slate-900">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm font-medium">

              <li>
                <Link to="/projects" className="hover:text-indigo-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <a href="services" className="hover:text-indigo-500 transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm font-medium">
              <li>
                <Link to="resume" className="hover:text-indigo-500 transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="about" className="hover:text-indigo-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="skills" className="hover:text-indigo-500 transition-colors">
                  Tech Stack
                </Link>
              </li>
            </ul>
          </div>
        </div> */}

        {/* Bottom Part: Copyright & Scroll to Top */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 dark:text-slate-500 text-xs font-medium">
            © {new Date().getFullYear()} Jahanara Fardoush Portfolio. All Rights
            Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-indigo-500 transition-colors"
          >
            Back to top
            <span className="p-2 bg-slate-50 dark:bg-[#121217] rounded-lg group-hover:-translate-y-1 transition-transform">
              <FaArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
