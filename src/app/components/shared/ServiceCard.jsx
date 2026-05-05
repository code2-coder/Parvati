import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ServiceCard({ icon, title, description, delay }) {
  return (
    <motion.div
      className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-slate-100 group relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />

      <div className="relative z-10">
        <motion.div
          className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center mb-8 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500"
          whileHover={{ scale: 1.05, rotate: -3 }}
        >
          {React.cloneElement(icon, { className: 'w-8 h-8' })}
        </motion.div>
        
        <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-600 mb-8 leading-relaxed font-medium">
          {description}
        </p>
        
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group/link"
        >
          <span className="relative">
            Get Details
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
          </span>
          <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover/link:bg-primary group-hover/link:border-primary group-hover/link:text-white transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
}