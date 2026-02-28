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
    title: "Email",
    value: "fardoushjahanara@gmail.com",
    label: "Send a message anytime",
  },
  {
    icon: <FaPhoneAlt className="text-purple-500" size={24} />,
    title: "Call",
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
    <section className="lg:py-20 md:py-12 py-5 px-4 md:px-12 bg-white dark:bg-[#0a0a0c] transition-colors duration-300">
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
            My <span className="text-indigo-500">contacts.</span>
          </h2>
        </div>

        {/* contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactDetails.map((contact, index) => (
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
                  {contact.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 uppercase border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full">
                  {contact.title}
                </span>
              </div>

              <h4 className="lg:text-lg md:text-sm text-xs font-bold text-slate-800 dark:text-white mb-1">
                  {contact.value}
                </h4>

               <p className="text-sm text-slate-500 dark:text-slate-400">
                  {contact.label}
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

export default ContactInfo;
