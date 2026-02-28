import React, { useEffect, useState } from "react";
import { MdWork, MdSchool } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";

const ProfessionalJourny = () => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [activeTab, setActiveTab] = useState("experience");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setExperience(data.experience || []);
        setEducation(data.education || []);
      });
  }, []);

  return (
    <section className="bg-white dark:bg-[#08080a] lg:py-20 md:py-12 py-8 px-6 md:px-12 transition-colors duration-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* start header  */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[2px] w-12 bg-indigo-500"></span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs">
              Qualification
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            My <span className="text-indigo-500">Resume.</span>
          </h2>
        </div>
        {/* end header  */}
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 bg-gray-100 dark:bg-[#16161e] border border-gray-200 dark:border-white/5 rounded-2xl shadow-xl backdrop-blur-md">
              <button
                onClick={() => setActiveTab("experience")}
                className={`flex items-center md:gap-3 gap-2 px-3 md:px-10 py-3 rounded-xl transition-all duration-500 font-bold text-xs md:text-sm uppercase tracking-wider ${
                  activeTab === "experience"
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "text-gray-500 hover:text-indigo-500"
                }`}
              >
                <MdWork className="text-xl" /> Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`flex items-center md:gap-3 gap-2 px-3 md:px-10 py-3 rounded-xl transition-all duration-500 font-bold text-xs md:text-sm uppercase tracking-wider ${
                  activeTab === "education"
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "text-gray-500 hover:text-indigo-500"
                }`}
              >
                <MdSchool className="text-xl" /> Education
              </button>
            </div>
          </div>

          {/* Dynamic Content Mapping */}
          <div className="space-y-10">
            {activeTab === "experience"
              ? experience.map((exp) => (
                  <ExperienceCard exp={exp} key={exp.id} />
                ))
              : education.map((edu) => (
                  <EducationCard edu={edu} key={edu.id} />
                ))}
          </div>

          {/* Available Badge */}
          <div className="mt-20 text-center">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-8"></div>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-3 italic">
              <FaCircle className="text-[6px] text-emerald-500 animate-pulse" />{" "}
              Available for new opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourny;
