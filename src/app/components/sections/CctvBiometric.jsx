import React from 'react';
import { motion } from 'motion/react';

export default function CctvBiometric() {
  return (
    <section id="cctv-biometric" className="py-24 bg-white relative overflow-hidden">
      {/* Background Graphic - Modern Geometry */}
      <div className="absolute right-0 top-0 w-[400px] h-full pointer-events-none z-0 overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-l from-slate-900 to-transparent"></div>
        <div className="absolute -right-20 top-0 w-full h-[150%] border-r-[40px] border-slate-900 -skew-x-12 origin-top-right"></div>
        <div className="absolute -right-40 top-0 w-full h-[150%] border-r-[80px] border-slate-900 -skew-x-12 origin-top-right"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">

        {/* CCTV SURVEILLANCE SYSTEM SECTION */}
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
              CCTV <span className="text-[#ea5a14]">SURVEILLANCE</span>
            </h2>
            <div className="flex h-[2px] flex-grow max-w-[150px] overflow-hidden rounded-full">
              <div className="w-1/3 bg-[#ea5a14]"></div>
              <div className="w-2/3 bg-slate-100"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg leading-relaxed text-slate-600 font-light mb-8">
                Closed Circuit Television (CCTV) is an essential infrastructure for modern security. Unlike broadcast TV, these systems transmit video over a closed loop, directly connecting cameras to monitors and recording devices for absolute privacy and control.
              </p>
              <div className="p-6 bg-slate-50 border-l-4 border-[#ea5a14] rounded-r-xl">
                <p className="text-[15px] text-slate-700 italic">
                  "Thanks to reduced costs in precision hardware, high-end surveillance is now accessible for small businesses and private estates alike."
                </p>
              </div>
            </div>

            {/* Images Grid for CCTV */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.02 }} className="aspect-square bg-slate-50 rounded-2xl p-6 flex items-center justify-center border border-slate-100 shadow-sm">
                <img src="/assets/photo_10.jfif" alt="CCTV Array" className="max-h-full object-contain mix-blend-multiply" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="aspect-square bg-slate-50 rounded-2xl p-6 flex items-center justify-center border border-slate-100 shadow-sm mt-8">
                <img src="/assets/photo_11.jfif" alt="Solar CCTV" className="max-h-full object-contain mix-blend-multiply" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* BIOMETRIC SOLUTIONS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Section Heading */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-[#194c7c] text-3xl md:text-5xl font-bold uppercase tracking-tight font-['Montserrat',sans-serif]">
              BIOMETRIC <span className="text-[#ea5a14]">SOLUTIONS</span>
            </h2>
            <div className="flex h-[2px] flex-grow max-w-[150px] overflow-hidden rounded-full">
              <div className="w-1/3 bg-[#ea5a14]"></div>
              <div className="w-2/3 bg-slate-100"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1">
              {/* Images Grid for Biometrics */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm col-span-2">
                  <img src="/assets/photo_12.jfif" alt="Fingerprint scanning" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="aspect-square bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <img src="/assets/photo_13.jfif" alt="Access Panel" className="max-h-full object-contain mix-blend-multiply" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="aspect-square bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <img src="/assets/photo_14.jfif" alt="Attendance Device" className="max-h-full object-contain mix-blend-multiply" />
                </motion.div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-lg leading-relaxed text-slate-600 font-light mb-8">
                Biometrics provides an unshakeable method of identity verification based on unique physical characteristics. From fingerprint patterns to facial recognition, our solutions offer accuracy far beyond traditional passwords or cards.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Fingerprint", desc: "Analyzing unique fingertip patterns" },
                  { title: "Facial Recognition", desc: "Measuring distinct facial characteristics" },
                  { title: "RFID Integration", desc: "Combining biometrics with secure identification cards" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-[#194c7c]/10 flex items-center justify-center text-[#194c7c] font-bold text-lg">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#194c7c]">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
