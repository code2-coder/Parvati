import React from 'react';
import { motion } from 'motion/react';

export default function IfpdAndPa() {
  return (
    <section id="ifpd-pa" className="py-24 bg-white relative overflow-hidden">
      {/* Background Graphic - Modern Geometry */}
      <div className="absolute right-0 top-0 w-[400px] h-full pointer-events-none z-0 overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-l from-slate-900 to-transparent"></div>
        <div className="absolute -right-20 top-0 w-full h-[150%] border-r-[40px] border-slate-900 -skew-x-12 origin-top-right"></div>
        <div className="absolute -right-40 top-0 w-full h-[150%] border-r-[80px] border-slate-900 -skew-x-12 origin-top-right"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">

        {/* INTERACTIVE FLAT PANEL DISPLAY SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          {/* Section Heading */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-[#194c7c] text-3xl md:text-5xl font-bold uppercase tracking-tight font-['Montserrat',sans-serif]">
              INTERACTIVE <span className="text-[#ea5a14]">DISPLAYS</span>
            </h2>
            <div className="flex h-[2px] flex-grow max-w-[150px] overflow-hidden rounded-full">
              <div className="w-1/3 bg-[#ea5a14]"></div>
              <div className="w-2/3 bg-slate-100"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-600 font-light">
                <span className="text-[#194c7c] font-bold">Parvati Systems</span> presents a premium range of smart screens for classrooms, boardrooms, and entertainment. Our Interactive Flat Panel Displays (IFPD) are engineered to deliver a superior tactile experience, from infinite digital whiteboarding to stunning 4K visual clarity.
              </p>
              <div className="p-6 bg-slate-50 border-l-4 border-[#194c7c] rounded-r-xl">
                <p className="text-[15px] text-slate-700 italic">
                  "A perfect evolution from outdated projectors, offering ultra-sensitive touch technology and a natural handwriting experience."
                </p>
              </div>
              <p className="text-sm text-slate-500">
                IFPDs come with the latest Android 11 OS, loaded with collaboration-focused applications for modern education and business.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.02 }} className="aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm col-span-2">
                <img src="/assets/photo_15.jfif" alt="Teacher using IFPD" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-center">
                <img src="/assets/photo_16.jfif" alt="Connectivity" className="max-h-full w-full object-contain mix-blend-multiply opacity-80" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-center">
                <img src="/assets/photo_17.jfif" alt="Diagram" className="max-h-full w-full object-contain mix-blend-multiply opacity-80" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* PUBLIC ADDRESS SYSTEMS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Section Heading */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-[#194c7c] text-3xl md:text-5xl font-bold uppercase tracking-tight font-['Montserrat',sans-serif]">
              PUBLIC <span className="text-[#ea5a14]">ADDRESS SYSTEMS</span>
            </h2>
            <div className="flex h-[2px] flex-grow max-w-[150px] overflow-hidden rounded-full">
              <div className="w-1/3 bg-[#ea5a14]"></div>
              <div className="w-2/3 bg-slate-100"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -5 }} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center justify-center">
                  <img src="/assets/photo_18.jfif" alt="Speaker" className="max-h-32 object-contain mix-blend-multiply" />

                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center justify-center mt-8">
                  <img src="/assets/photo_19.jfif" alt="Amplifier" className="max-h-24 object-contain mix-blend-multiply" />
                </motion.div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-lg leading-relaxed text-slate-600 font-light mb-8">
                Our Public Address Systems provide crystalline sound enhancement for large venues, sports fields, and public facilities. From high-tier amplifiers to distributed speaker networks, we ensure your message is heard clearly across any distance.
              </p>
              <div className="flex items-center gap-4 text-[#194c7c]">
                <div className="w-12 h-12 rounded-full bg-[#194c7c]/10 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                </div>
                <span className="text-sm font-semibold italic text-slate-500">Includes microphones, mixers, and multi-zone distribution.</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
