import React, { useState, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function TestimonialCard({ name, role, rating, text, delay }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-8 md:p-10 rounded-3xl overflow-hidden bg-[#0A101F] border border-white/10 group h-full flex flex-col shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Spotlight Effect Inside Card */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(37, 99, 235, 0.15), transparent 40%)`,
        }}
      />
      {/* Border Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(37, 99, 235, 0.5), transparent 40%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      <div className="absolute top-6 right-6 text-white/5 group-hover:text-primary/20 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12">
        <Quote size={100} strokeWidth={1} />
      </div>

      <div className="flex gap-1.5 mb-8 relative z-10">
        {[...Array(rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: delay + i * 0.1 + 0.3 }}
          >
            <Star className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
          </motion.div>
        ))}
      </div>
      
      <p className="text-slate-300 mb-10 font-light leading-relaxed relative z-10 text-lg flex-grow tracking-wide">
        "{text}"
      </p>
      
      <div className="flex items-center gap-5 relative z-10 mt-auto border-t border-white/10 pt-6">
        <div className="relative">
          {/* Animated Glowing Ring Behind Avatar */}
          <div className="absolute -inset-1 bg-gradient-to-br from-primary via-blue-400 to-[#ea5a14] rounded-full opacity-50 blur-sm group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700" />
          <div className="w-14 h-14 bg-[#0F172A] rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10 border border-white/20">
            {name.charAt(0)}
          </div>
        </div>
        <div>
          <div className="font-bold text-white text-lg tracking-tight group-hover:text-primary transition-colors font-['Montserrat',sans-serif]">{name}</div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-1 font-['Montserrat',sans-serif]">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}