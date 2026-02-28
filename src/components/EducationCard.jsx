import React from "react";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineCalendar } from "react-icons/hi";

const EducationCard = ({ edu }) => {
  const { degree, institution, location, duration, result } = edu;
  return (
    <div className="bg-gray-50 dark:bg-[#111116] border border-gray-200 dark:border-white/5 p-6 md:p-8 lg:p-10 rounded-2xl hover:border-indigo-500/40 transition-all shadow-xl group">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">
            {degree}
          </h3>
          <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">
            {institution}
          </p>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">
            CGPA:{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              {result}
            </span>
          </p>
          <span className="flex items-center gap-1.5 text-sm text-gray-500 mt-2">
            <MdLocationOn className="text-indigo-500" /> {location}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-300 bg-indigo-500/10 px-5 py-2.5 rounded-full border border-indigo-500/20">
          <HiOutlineCalendar className="text-xl" /> {duration}
        </div>
      </div>
      {/* <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
        {description}
      </p> */}
    </div>
  );
};

export default EducationCard;
