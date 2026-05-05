import React from 'react';
import { motion } from 'motion/react';
import { Settings, Wrench } from 'lucide-react';

export default function AmcAndNetwork() {
  return (
    <section id="amc-network" className="py-24 bg-white relative overflow-hidden">
      {/* Background Graphic - Tech Grid */}
      <div className="absolute right-0 top-0 w-1/4 h-full pointer-events-none opacity-[0.03] bg-[linear-gradient(to_bottom,#194c7c_1px,transparent_1px)] bg-[size:100%_60px]">
        <div className="absolute inset-y-0 left-0 border-l border-[#194c7c]/20"></div>
        <div className="absolute inset-y-0 left-12 border-l border-[#194c7c]/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">

        {/* AMC SERVICES SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          {/* Section Heading */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-[#194c7c] text-3xl md:text-5xl font-bold uppercase tracking-tight font-['Montserrat',sans-serif]">
              AMC <span className="text-[#ea5a14]">SERVICES</span>
            </h2>
            <div className="flex h-[2px] flex-grow max-w-[150px] overflow-hidden rounded-full">
              <div className="w-1/3 bg-[#ea5a14]"></div>
              <div className="w-2/3 bg-slate-100"></div>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-slate-600 font-light mb-12 max-w-4xl">
            Our <span className="text-[#194c7c] font-bold">Annual Maintenance Contract</span> (AMC) is a strategic commitment to your infrastructure's health. We provide routine checkups and proactive interventions to ensure your technology never skips a beat. From software updates to critical hardware maintenance, we act as the powerful technical arm of your business.
          </p>

          {/* Three Image Blocks for AMC */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: 24/7/365 Support */}
            <motion.div whileHover={{ y: -5 }} className="bg-[#194c7c] rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 text-white relative overflow-hidden group">
              <img src="/assets/photo_4.jfif" alt="Hardware Repair" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 s cale-110 group-hover:scale-100 absolute inset-0" />
              <div className="absolute inset-0 bg-[#ea5a14] translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10"></div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-black text-5xl">24</span>
                <div className="flex flex-col text-[12px] font-black leading-tight opacity-80">
                  <span>HOURS</span>
                  <span>365 DAYS</span>
                </div>
              </div>
              <Settings className="w-16 h-16 animate-spin-slow opacity-20 absolute -bottom-4 -right-4" />
              <p className="font-bold tracking-widest text-xs opacity-80 uppercase">Continuous Support</p>
            </motion.div>

            {/* Box 2: CCTV AMC SERVICES */}
            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center justify-center p-8 relative group overflow-hidden">
              <img
                src="/assets/photo_5.jfif"
                alt="CCTV Maintenance"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.08] group-hover:opacity-20 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="flex gap-4 text-[#ea5a14] mb-6 relative z-10">
                <Settings className="w-10 h-10 group-hover:rotate-90 transition-transform duration-500" />
                <Wrench className="w-10 h-10 group-hover:-rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-[#194c7c] font-black tracking-tight text-center text-lg relative z-10">CCTV MAINTENANCE</h3>
              <p className="text-slate-400 text-xs mt-2 uppercase font-bold tracking-widest relative z-10">Authorized Service</p>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
            </motion.div>

            {/* Box 3: Hardware Repairing */}
            <motion.div whileHover={{ y: -5 }} className="bg-slate-50 rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex items-center justify-center group">
              <img src="/assets/photo_6.jfif" alt="Hardware Repair" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" />
            </motion.div>
          </div>
        </motion.div>


        {/* NETWORK MANAGEMENT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Section Heading */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-[#194c7c] text-3xl md:text-5xl font-bold uppercase tracking-tight font-['Montserrat',sans-serif]">
              NETWORK <span className="text-[#ea5a14]">MANAGEMENT</span>
            </h2>
            <div className="flex h-[2px] flex-grow max-w-[150px] overflow-hidden rounded-full">
              <div className="w-1/3 bg-[#ea5a14]"></div>
              <div className="w-2/3 bg-slate-100"></div>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-slate-600 font-light mb-12 max-w-4xl">
            Network stability is the backbone of operational productivity. Our integrated solutions optimize fault management, unify performance tracking, and automate configuration to ensure 99.9% uptime. We don't just fix networks; we streamline your business performance through high-tier resources.
          </p>

          {/* Three Image Blocks for Network Management */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "/assets/photo_7.jfif",
              "/assets/photo_8.jfif",
              "/assets/photo_9.jfif"
            ].map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-slate-900 aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden relative group border border-slate-800"
              >
                <img
                  src={img}
                  alt="Network Service"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
