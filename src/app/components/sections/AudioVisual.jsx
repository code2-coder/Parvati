import React from 'react';
import { motion } from 'motion/react';

export default function AudioVisual() {
  const avSolutions = [
    "Projection Solutions 2d and 3d with high resolution outputs",
    "Sound Reinforcement and Local audio conferencing including",
    "public address solutions",
    "Network Audio and Video Conferencing",
    "LCD's and plasma screens",
    "Digital Media signage",
    "Audio and Video switching, converting & distribution",
    "A/V Devices and lighting Controllers",
    "Smart boards and smart classrooms"
  ];

  return (
    <section id="audio-visual" className="py-24 bg-white relative overflow-hidden">
      {/* Background Graphic - Subtle Watermark */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[600px] pointer-events-none z-0">
        <img src="/assets/photo_20.jfif" alt="Watermark" className="w-full h-full object-cover opacity-[0.03]  mix-blend-multiply" />
        <div className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Heading */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-[#194c7c] text-3xl md:text-5xl font-bold uppercase tracking-tight font-['Montserrat',sans-serif]">
              A/V <span className="text-[#ea5a14]">INFRASTRUCTURE</span>
            </h2>
            <div className="flex h-[2px] flex-grow max-w-[150px] overflow-hidden rounded-full">
              <div className="w-1/3 bg-[#ea5a14]"></div>
              <div className="w-2/3 bg-slate-100"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <p className="text-lg leading-relaxed text-slate-600 font-light mb-8">
                As a leading Audio Visual systems integrator, <span className="text-[#194c7c] font-bold">Parvati Systems</span> provides end-to-end design, installation, and service solutions. We specialize in facilitating enhanced communication through the dynamic application of modern technology.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {avSolutions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ea5a14] mt-2 flex-shrink-0"></div>
                    <span className="text-[14px] text-slate-600 font-medium leading-snug">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-slate-100 rounded-[2rem] -rotate-3 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-700"></div>
              <div className="relative aspect-[4/3] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex items-center justify-center p-8">
                <img src="/assets/photo_20.jfif" alt="Classroom Illustration" className="w-full h-full object-contain mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-slate-600 font-light mb-16 max-w-4xl text-justify">
            Our expertise goes beyond standard setups to include collaborative working environments (CWE). We integrate people, processes, and technology to enhance decision-making through document cameras, interactive tables, and conferencing software.
          </p>

          {/* AV Images Grid (Floating Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["/assets/photo_21.jfif", "/assets/photo_22.jfif", "/assets/photo_23.jfif"].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
                className="bg-slate-50 aspect-video rounded-2xl p-6 border border-slate-100 shadow-lg flex items-center justify-center group"
              >
                <img src={img} alt="AV Setup" className="max-h-full object-contain mix-blend-multiply grayscale-[50%] group-hover:grayscale-0 transition-all" />
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
