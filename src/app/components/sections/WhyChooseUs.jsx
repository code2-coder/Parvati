import React from 'react';
import { Shield, Zap, Award, CheckCircle, Laptop, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const features = [
    { icon: Shield, title: 'Trusted & Reliable', desc: 'Over 10 years of proven track record in delivering quality IT solutions.', color: 'blue' },
    { icon: Zap, title: 'Fast Response', desc: '24/7 support with quick turnaround time for all your IT emergencies.', color: 'amber' },
    { icon: Award, title: 'Expert Team', desc: 'Certified professionals with extensive experience in latest technologies.', color: 'indigo' },
    { icon: CheckCircle, title: 'Quality Service', desc: 'We ensure 100% customer satisfaction with quality products and services.', color: 'emerald' },
    { icon: Laptop, title: 'Latest Technology', desc: 'We use cutting-edge tools and equipment for all installations.', color: 'violet' },
    { icon: Users, title: 'Customer First', desc: 'Your needs are our priority - personalized solutions for every client.', color: 'rose' }
  ];

  const getColorClasses = (color) => {
    const map = {
      blue: 'bg-blue-50 text-blue-600',
      amber: 'bg-amber-50 text-amber-600',
      indigo: 'bg-indigo-50 text-indigo-600',
      emerald: 'bg-emerald-50 text-emerald-600',
      violet: 'bg-violet-50 text-violet-600',
      rose: 'bg-rose-50 text-rose-600',
    };
    return map[color] || map.blue;
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Advantage</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Why Partner with <br /><span className="text-primary">Parvati Systems?</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            We don't just provide services; we build lasting technology foundations that help your business thrive and stay secure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-7xl">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${getColorClasses(item.color)}`}>
                <item.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}