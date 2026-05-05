import React from 'react';
import { Search, Settings, ShieldCheck, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: 'Consultation',
      desc: 'We analyze your requirements and site conditions to propose the best solution.',
      color: 'blue'
    },
    {
      icon: Settings,
      title: 'Implementation',
      desc: 'Expert installation and configuration of systems with minimal disruption.',
      color: 'indigo'
    },
    {
      icon: ShieldCheck,
      title: 'Testing',
      desc: 'Rigorous testing of all components to ensure maximum reliability and security.',
      color: 'purple'
    },
    {
      icon: Headphones,
      title: 'Support',
      desc: 'Ongoing maintenance and 24/7 technical support for your peace of mind.',
      color: 'cyan'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-20 opacity-5">
        <div className="w-96 h-96 border-[40px] border-primary rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Our Working Process</h2>
          <p className="text-lg text-slate-600 font-medium">From initial discovery to final deployment and support, we ensure a seamless experience.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative z-10 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center">
                <motion.div 
                  className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-500"
                  whileHover={{ y: -10, rotate: 5 }}
                >
                  <step.icon className="w-10 h-10" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg border-2 border-white">
                    {index + 1}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 text-center font-medium text-sm leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
