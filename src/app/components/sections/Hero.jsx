import React from 'react';
import { ArrowRight, Phone, Monitor, Camera, Presentation } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const bottomBarItems = [
    { label: "COMPUTER", bg: "bg-[#194c7c]" },
    { label: "NETWORKING", bg: "bg-[#ea5a14]" },
    { label: "CCTV CAMERA", bg: "bg-[#194c7c]" },
    { label: "AUDIO", bg: "bg-[#ea5a14]" },
    { label: "VIDEO", bg: "bg-[#194c7c]" },
    { label: "UPS", bg: "bg-[#ea5a14]" },
  ];

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-white pt-24 pb-0">
      {/* Background Parallax & Image */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 z-0 flex justify-end"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent z-10 md:hidden" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=2000" 
          alt="Tech Workspace" 
          className="w-full lg:w-3/4 h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f6f7_1px,transparent_1px),linear-gradient(to_bottom,#f5f6f7_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-50 z-0" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-30 flex-grow flex flex-col justify-center py-10 md:py-16">
        <div className="max-w-4xl relative">
          
          {/* Subtle glowing orb behind text on mobile to ensure readability */}
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-white rounded-full blur-[100px] -z-10 md:hidden" />

          {/* Main Content matching the brochure with reveal animation */}
          <motion.div className="overflow-hidden mb-6 md:mb-8">
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ea5a14] to-[#ff8c54] leading-[1.05] tracking-tight font-['Montserrat',sans-serif] uppercase drop-shadow-sm"
            >
              ONE-STOP TECH <br />
              SOLUTION HUB
            </motion.h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-2 md:gap-4 mb-10 border-b-2 border-slate-200/60 pb-6 w-max"
          >
            <h2 className="text-xs sm:text-sm md:text-xl font-bold text-[#333] tracking-[0.15em] md:tracking-[0.2em] uppercase">
              SALES <span className="text-[#ea5a14] mx-1 md:mx-4">•</span> 
              SERVICE <span className="text-[#ea5a14] mx-1 md:mx-4">•</span> 
              SMART SOLUTIONS
            </h2>
          </motion.div>

          {/* Icons with Floating Animations */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-6 md:gap-16 mb-16"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className="text-[#333] group-hover:text-[#ea5a14] group-hover:drop-shadow-[0_0_12px_rgba(234,90,20,0.4)] transition-all duration-300">
                <Monitor size={42} strokeWidth={1.5} className="md:w-12 md:h-12" />
              </div>
            </motion.div>
            <div className="w-px h-10 md:h-12 bg-gray-300"></div>
            <motion.div 
              whileHover={{ y: -5 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className="text-[#333] group-hover:text-[#194c7c] group-hover:drop-shadow-[0_0_12px_rgba(25,76,124,0.4)] transition-all duration-300">
                <Camera size={42} strokeWidth={1.5} className="md:w-12 md:h-12" />
              </div>
            </motion.div>
            <div className="w-px h-10 md:h-12 bg-gray-300"></div>
            <motion.div 
              whileHover={{ y: -5 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className="text-[#333] group-hover:text-[#ea5a14] group-hover:drop-shadow-[0_0_12px_rgba(234,90,20,0.4)] transition-all duration-300">
                <Presentation size={42} strokeWidth={1.5} className="md:w-12 md:h-12" />
              </div>
            </motion.div>
          </motion.div>

          {/* Web-specific Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a 
              href="#services" 
              className="group w-full sm:w-auto px-8 md:px-10 py-4 bg-[#194c7c] text-white font-bold rounded shadow-xl shadow-[#194c7c]/20 hover:bg-[#113a60] transition-all flex items-center justify-center gap-3 uppercase text-sm tracking-wide active:scale-95"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+919767375262" 
              className="group w-full sm:w-auto px-8 md:px-10 py-4 bg-white text-[#ea5a14] font-bold rounded border-2 border-[#ea5a14] hover:bg-[#ea5a14] hover:text-white transition-all flex items-center justify-center gap-3 uppercase text-sm tracking-wide shadow-sm active:scale-95"
            >
              <Phone className="w-5 h-5 text-[#ea5a14] group-hover:text-white transition-colors" />
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Features Bar exactly as requested */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full hidden md:flex relative z-40 mt-auto"
      >
        {bottomBarItems.map((item, index) => (
          <motion.div 
            key={index} 
            whileHover={{ y: -5 }}
            className={`flex-1 py-5 flex items-center justify-center cursor-default shadow-[0_-5px_20px_rgba(0,0,0,0.05)] ${item.bg}`}
          >
            <span className="text-white text-sm lg:text-base font-bold uppercase tracking-widest font-['Montserrat',sans-serif]">
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Mobile-optimized Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full grid grid-cols-2 md:hidden relative z-40 mt-auto shadow-[0_-5px_20px_rgba(0,0,0,0.05)]"
      >
        {bottomBarItems.map((item, index) => (
          <div 
            key={index} 
            className={`py-3.5 flex items-center justify-center ${item.bg}`}
          >
            <span className="text-white text-[11px] font-bold uppercase tracking-widest font-['Montserrat',sans-serif]">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}