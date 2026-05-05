import React from 'react';
import { motion } from 'motion/react';

export default function SolutionsGrid() {
  const solutions = [
    { title: "CCTV SECURITY SOLUTIONS", img: "/assets/cctv-camera.png" },
    { title: "IT SOLUTIONS", img: "/assets/networking.png" },
    { title: "AUDIO-VIDEO SOLUTIONS", img: "/assets/smart-classroom.png" },
    { title: "BIOMETRIC SOLUTIONS", img: "/assets/biometrics.png" },
    { title: "NETWORK SOLUTION", img: "/assets/networking.png" },
    { title: "INTERACTIVE DISPLAY SOLUTIONS", img: "/assets/smart-classroom.png" }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col bg-white border border-gray-100 shadow-sm"
            >
              <div className="bg-[#194c7c] text-white text-center py-2 px-4">
                <span className="text-xs font-bold uppercase tracking-wider font-['Montserrat',sans-serif]">{solution.title}</span>
              </div>
              <div className="h-48 w-full p-2 flex items-center justify-center overflow-hidden">
                <img src={solution.img} alt={solution.title} className="w-full h-full object-cover mix-blend-multiply opacity-90" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
