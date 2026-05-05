import React from 'react';
import { motion } from 'motion/react';

export default function Brands() {
  const brands = [
    { name: 'HP', domain: 'hp.com' },
    { name: 'Dell', domain: 'dell.com' },
    { name: 'Lenovo', domain: 'lenovo.com' },
    { name: 'Canon', domain: 'canon.com' },
    { name: 'Epson', domain: 'epson.com' },
    { name: 'Hikvision', domain: 'hikvision.com' },
    { name: 'Dahua', domain: 'dahuasecurity.com' },
    { name: 'CP Plus', domain: 'cpplusworld.com' },
    { name: 'D-Link', domain: 'dlink.com' },
    { name: 'TP-Link', domain: 'tp-link.com' },
    { name: 'Cisco', domain: 'cisco.com' },
    { name: 'Samsung', domain: 'samsung.com' }
  ];

  return (
    <section id="brands" className="py-24 bg-white overflow-hidden relative">
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 w-1/4 h-full pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_bottom,#194c7c_1px,transparent_1px)] bg-[size:100%_40px]">
      </div>

      <div className="container mx-auto px-6 mb-16 relative z-10 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Section Heading */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-[2px] w-12 bg-[#ea5a14]"></div>
            <h2 className="text-[#194c7c] text-3xl md:text-5xl font-bold uppercase tracking-tight font-['Montserrat',sans-serif]">
              TRUSTED <span className="text-[#ea5a14]">PARTNERS</span>
            </h2>
            <div className="h-[2px] w-12 bg-[#ea5a14]"></div>
          </div>
          
          <p className="text-lg leading-relaxed text-slate-600 font-light max-w-3xl">
            We take pride in our association with global technology leaders. As authorized partners, we deliver genuine products backed by official warranties and world-class technical support.
          </p>
        </motion.div>
      </div>

      {/* Brand Marquee Wrapper */}
      <div className="relative group">
        {/* Gradient Fades for Smooth Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex overflow-hidden">
          {/* First Marquee Set */}
          <div className="py-8 animate-marquee whitespace-nowrap flex items-center">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="mx-8">
                <motion.div 
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="w-48 h-24 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center p-6 group/logo transition-all hover:shadow-xl hover:border-[#ea5a14]/30"
                >
                  <img 
                    src={`https://logo.clearbit.com/${brand.domain}`}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden text-xl font-bold text-slate-400 group-hover/logo:text-[#194c7c] transition-colors">{brand.name}</span>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Second Marquee Set for Loop */}
          <div className="py-8 animate-marquee whitespace-nowrap flex items-center" aria-hidden="true">
            {[...brands, ...brands].map((brand, index) => (
              <div key={`dup-${index}`} className="mx-8">
                <motion.div 
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="w-48 h-24 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center p-6 group/logo transition-all hover:shadow-xl hover:border-[#ea5a14]/30"
                >
                  <img 
                    src={`https://logo.clearbit.com/${brand.domain}`}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden text-xl font-bold text-slate-400 group-hover/logo:text-[#194c7c] transition-colors">{brand.name}</span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}