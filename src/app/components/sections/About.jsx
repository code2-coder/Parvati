import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="pt-24 pb-0 bg-white relative overflow-hidden">
      {/* Background Graphic - Tech Keyboard Pattern on the right */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none z-0">
        <img 
          src="/assets/tech_keyboard_bg.png" 
          alt="Tech Pattern" 
          className="w-full h-full object-cover object-left opacity-30" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-3"
          >
            <motion.h3 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ea5a14] to-[#194c7c] drop-shadow-md tracking-wide"
            >
              Smart Security Solutions for Every Space
            </motion.h3>
          </motion.div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[#194c7c] text-3xl md:text-4xl font-bold uppercase tracking-tight font-['Montserrat',sans-serif] whitespace-nowrap">
              ABOUT US
            </h2>
            <div className="flex h-[2px] mt-2 flex-grow max-w-[400px]">
              <div className="w-1/3 bg-[#ea5a14]"></div>
              <div className="w-2/3 bg-slate-200"></div>
            </div>
          </div>

          <p className="text-[15px] leading-[1.8] text-slate-600 text-justify mb-6">
            Parvati Systems Founded in 2018 IT professionals, Offering a wide range of Complete IT Solutions, Sales and services, for all computer, laptop and other devices and their repairing services, with a focus on computer components by providing a great shopping experience, rapid delivery, tech customer service and provide the best warranty support. We are up-to-date with the current innovations of electronics and thus keep high-end branded new & classic models of desktops and laptops along with its accessories that you can easily choose from. We also provide - CCTV surveillance camera, access control security systems, Networking, Interactive Flat Panal Display ,Digital E-learning Systems, , Public Address System, Projector, Printer, Refurbished Laptop & Desktop, We are driven by focus on quality, constant innovation and customer satisfaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}