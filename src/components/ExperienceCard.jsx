import React from "react";
import { MdWork, MdLocationOn, MdTerminal } from "react-icons/md";
import { HiOutlineCalendar, HiOutlineLightningBolt } from "react-icons/hi";
import { BsCheck2Circle } from "react-icons/bs";

const ExperienceCard = ({ exp }) => {
  const {
    role,
    company,
    location,
    duration,
    type,
    description,
    achievements,
    skills,
  } = exp;
  return (
    <div className="relative group transition-all duration-500">
      <div className="bg-gray-50 dark:bg-[#111116] border border-gray-200 dark:border-white/5 rounded-[2.5rem]  p-6 md:p-8 lg:p-10 hover:border-indigo-500/40 transition-all shadow-xl ">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          <div className="flex gap-5 items-start">
            <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/10">
              <MdTerminal className="text-3xl text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                {role}
              </h3>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <MdWork className="text-indigo-500" /> {company}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <MdLocationOn className="text-indigo-500" /> {location}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-2 w-full lg:w-auto">
            <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-300 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20">
              <HiOutlineCalendar className="text-lg" /> {duration}
            </div>
            <span className="text-[10px] font-black tracking-widest text-emerald-600 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 uppercase w-fit lg:self-end">
              {type}
            </span>
          </div>
        </div>

        <p className="mt-8 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
          {description}
        </p>

        <div className="mt-8 space-y-4">
          <h4 className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
            <HiOutlineLightningBolt className="text-orange-500 text-lg" /> Core
            Impact
          </h4>
          {achievements.map((ach, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5"
            >
              <BsCheck2Circle className="text-indigo-500 text-xl mt-0.5 shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                {ach}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-1.5 text-[11px] font-bold text-gray-600 dark:text-indigo-300 bg-gray-100 dark:bg-[#1f1f2b] rounded-xl border border-gray-200 dark:border-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
