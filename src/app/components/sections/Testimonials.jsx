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
      {/* Immersive Background Effects */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#ea5a14]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03] bg-[length:50px_50px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 flex flex-col items-center"
        >
          {/* Glowing Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0F172A]/80 border border-white/10 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ea5a14] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea5a14]"></span>
            </span>
            <h2 className="text-xs font-bold tracking-[0.25em] text-blue-200 uppercase">
              Client Success Stories
            </h2>
          </div>
          
          <h3 className="text-4xl md:text-6xl font-black text-white mb-6 text-center leading-[1.1] tracking-tight">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-[#ea5a14]">Trust &</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-[#ea5a14]">Reliability</span>
          </h3>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl text-center leading-relaxed font-light">
            Our success is measured by the satisfaction of our clients. See how our cutting-edge solutions have transformed their operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}