import React from 'react';
import { motion } from 'motion/react';
import TestimonialCard from '../shared/TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Operations Director",
      rating: 5,
      text: "The surveillance setup they installed at our logistics hub is top-notch. Their attention to blind spots and system stability is truly professional.",
      delay: 0.1
    },
    {
      name: "Priya Sharma",
      role: "CTO, Tech Solutions",
      rating: 5,
      text: "We needed a robust networking infrastructure for our new office. Parvati Systems delivered ahead of schedule with perfect execution.",
      delay: 0.2
    },
    {
      name: "Amit Deshmukh",
      role: "Retail Chain Owner",
      rating: 5,
      text: "Reliable and responsive. Their hardware maintenance services have saved us countless hours of downtime. Highly recommended IT partner.",
      delay: 0.3
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(25,76,124,0.1),transparent_50%)]" />
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-[#ea5a14]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* CSS Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 flex flex-col items-center"
        >
          {/* Section Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 shadow-2xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ea5a14] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea5a14]"></span>
            </span>
            <h2 className="text-[10px] md:text-xs font-black tracking-[0.3em] text-blue-100 uppercase font-['Montserrat',sans-serif]">
              Client Success Stories
            </h2>
          </motion.div>
          
          <h3 className="text-4xl md:text-7xl font-black text-white mb-8 text-center leading-[1.05] tracking-tight font-['Montserrat',sans-serif]">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-[#ea5a14] animate-gradient">Trust &</span><br/>
            <span className="text-white">Reliability</span>
          </h3>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl text-center leading-relaxed font-light tracking-wide">
            Our success is measured by the satisfaction of our clients. See how our cutting-edge solutions have transformed their operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}