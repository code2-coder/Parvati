import React from 'react';
import { Building2, ShoppingCart, GraduationCap, HeartPulse, Factory, Hotel, Landmark, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

export default function Industries() {
  const industries = [
    { icon: Building2, title: 'Corporate Offices', desc: 'Complete IT infrastructure setup for modern workplaces.', color: 'blue' },
    { icon: ShoppingCart, title: 'Retail Stores', desc: 'Advanced CCTV & security systems to protect your business.', color: 'indigo' },
    { icon: GraduationCap, title: 'Education', desc: 'High-performance computer labs & campus-wide networks.', color: 'violet' },
    { icon: HeartPulse, title: 'Healthcare', desc: 'Secure data management and reliable hardware support.', color: 'rose' },
    { icon: Factory, title: 'Manufacturing', desc: 'Industrial-grade IT solutions for production environments.', color: 'emerald' },
    { icon: Hotel, title: 'Hospitality', desc: 'Seamless WiFi & robust connectivity for guests and staff.', color: 'amber' },
    { icon: Landmark, title: 'Government', desc: 'Secure and reliable IT infrastructure for public services.', color: 'cyan' },
    { icon: Wallet, title: 'Banking', desc: 'Biometric & access control for high-security environments.', color: 'slate' }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Sectors We Empower</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Industries We Serve</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">Providing customized IT and security solutions across diverse business sectors.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-xl">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed group-hover:text-slate-200 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}