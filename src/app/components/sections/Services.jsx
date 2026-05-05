import React from 'react';
import { motion } from 'motion/react';

export default function Services() {
  const dealInItems = [
    "Computers & Laptop Sales Services",
    "Advanced IP routing and switching Network Management",
    "CCTV camera services",
    "Network product & firewall security",
    "LAN and WAN connectivity (network cabling, wireless connectivity) Wi-Fi solution",
    "Computer Application installation and support Fiber optics",
    "Server solution Anti-virus Solutions",
    "Biometric attendance machine",
    "Networking Infrastructure & Security, Video, Voice, Data and Specialized Systems.",
    "Audio Visual Solution and E-learning solutions",
    "Surveillance Security Systems",
    "Annual Maintenance Contract"
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Graphic - Circuit Style */}
      <div className="absolute right-0 top-0 w-1/4 h-full pointer-events-none opacity-[0.05]">
        <svg viewBox="0 0 100 800" preserveAspectRatio="none" className="w-full h-full text-slate-900 fill-none stroke-current stroke-[0.5]">
          <path d="M 50 0 L 50 50 L 20 80 L 20 300 L 50 330 L 50 500 L 80 530 L 80 800" />
          <circle cx="50" cy="50" r="1.5" fill="currentColor" />
          <path d="M 80 0 L 80 100 L 50 130 L 50 400 L 80 430 L 80 800" />
          <circle cx="80" cy="100" r="1.5" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          {/* Section Heading */}
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-[#194c7c] text-3xl md:text-5xl font-bold uppercase tracking-tight font-['Montserrat',sans-serif]">
              OUR <span className="text-[#ea5a14]">SERVICES</span>
            </h2>
            <div className="flex h-[2px] flex-grow max-w-[200px] overflow-hidden rounded-full">
              <div className="w-1/3 bg-[#ea5a14]"></div>
              <div className="w-2/3 bg-slate-200"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <p className="text-lg leading-relaxed text-slate-600 font-light">
              <span className="text-[#194c7c] font-bold">Parvati Systems</span> delivers complete IT solutions tailored for industries, schools, hospitals, and corporate offices. We are trusted partners for both private and public sector organizations, providing results driven by precision and ethical business practices.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 font-light">
              We specialize in long-term project management and specialized technical interventions, ensuring that your infrastructure is robust, scalable, and secure.
            </p>
          </div>
        </motion.div>

        {/* Services Grid "We Deal In" */}
        <div className="mb-20">
          <div className="inline-block px-4 py-1.5 bg-[#ea5a14]/10 rounded-full mb-8">
            <span className="text-[#ea5a14] text-xs font-black uppercase tracking-[0.2em]">Core Expertise</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dealInItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-xl hover:border-[#ea5a14]/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ea5a14] mt-2.5 group-hover:scale-150 transition-transform"></div>
                  <span className="text-[15px] text-slate-700 font-medium leading-relaxed">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Assets Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "/assets/photo_1.jfif",
            "/assets/photo_2.jfif",
            "/assets/photo_3.jfif"
          ].map((src, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/50"
            >
              <img 
                src={src} 
                alt={`Service Representation ${i + 1}`} 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#194c7c]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}