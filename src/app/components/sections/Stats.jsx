import React from 'react';
import { Users, CheckCircle, Award, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import Counter from '../shared/Counter';

export default function Stats() {
  const stats = [
    { icon: Users, value: '500+', label: 'Corporate Clients', color: 'blue' },
    { icon: CheckCircle, value: '1200+', label: 'Installations', color: 'indigo' },
    { icon: Award, value: '10+', label: 'Years of Trust', color: 'violet' },
    { icon: Clock, value: '24/7', label: 'Availability', color: 'emerald' }
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-6 relative">
                <motion.div
                  className="w-20 h-20 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 flex items-center justify-center relative z-10 border border-slate-100"
                  whileHover={{ y: -5, rotate: 5 }}
                >
                  <stat.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </motion.div>
                <div className="absolute -inset-2 bg-primary/5 rounded-[2.5rem] blur-xl z-0" />
              </div>
              
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-2">
                  <Counter end={stat.value} />
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}