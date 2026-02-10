import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaEnvelope className="text-indigo-500" size={24} />,
    title: "Email Me",
    value: "fardoushjahanara@gmail.com",
    label: "Send a message anytime",
  },
  {
    icon: <FaPhoneAlt className="text-purple-500" size={24} />,
    title: "Call Me",
    value: "+880 1923 134484",
    label: "9am - 10pm",
  },
  {
    icon: <FaMapMarkerAlt className="text-emerald-500" size={24} />,
    title: "Location",
    value: "Dhaka, Bangladesh",
    label: "Available for remote work",
  },
  {
    icon: <FaClock className="text-orange-500" size={24} />,
    title: "Response Time",
    value: "Within 24 Hours",
    label: "I'm quite fast!",
  },
];

const ContactInfo = () => {
  return (
    <div className="bg-white dark:bg-[#0a0a0c] pt-24 pb-12 px-4 md:px-12 border-t border-slate-100 dark:border-slate-900 transition-colors duration-300">
      {" "}
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[2px] w-12 bg-indigo-500"></span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs">
              contact us
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            Contact <span className="text-indigo-500">Info.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-[#121217] border border-slate-200 dark:border-slate-800 flex items-start gap-5 transition-colors duration-300"
            >
              <div className="p-4 bg-white dark:bg-[#1c1c24] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">
                  {item.title}
                </p>
                <h4 className="lg:text-lg md:text-sm text-xs font-bold text-slate-800 dark:text-white mb-1">
                  {item.value}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
