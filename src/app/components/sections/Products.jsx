import React from 'react';
import { motion } from 'motion/react';

const productsCol1 = [
  { name: 'DESKTOP / LAPTOP', color: 'blue' },
  { name: 'IP & HD CCTV SURVEILLANCE', color: 'orange' },
  { name: 'DIGITAL PROJECTOR & LED', color: 'blue' },
  { name: 'PUBLIC ADDRESS SYSTEM', color: 'orange' },
  { name: 'AUDIO VIDEO SOLUTIONS', color: 'blue' },
  { name: 'PRINTER / SCANNER', color: 'orange' }
];

const productsCol2 = [
  { name: 'NETWORK ACCESSORIES', color: 'orange' },
  { name: 'SERVER & FIREWALL', color: 'blue' },
  { name: 'FINGER PRINT ACCESS CONTROL', color: 'orange' },
  { name: 'DIGITAL E-LERNING SOLUTIONS', color: 'blue' },
  { name: 'IP - TELEPHONE (EPBX System)', color: 'orange' },
  { name: 'BIOMETRIC MACHINE', color: 'blue' }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Background Graphic - Tech Keyboard Pattern on the right */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none z-0">
        <img 
          src="/assets/tech_keyboard_bg.png" 
          alt="Tech Pattern" 
          className="w-full h-full object-cover object-left opacity-30" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        {/* PRODUCTS SECTION (Matching the image bottom part) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[#194c7c] text-3xl md:text-4xl font-bold uppercase tracking-tight font-['Montserrat',sans-serif] whitespace-nowrap">
              PRODUCTS
            </h2>
            <div className="flex h-[2px] mt-2 flex-grow max-w-[400px]">
              <div className="w-1/3 bg-[#ea5a14]"></div>
              <div className="w-2/3 bg-slate-200"></div>
            </div>
          </div>

          <p className="text-[15px] leading-[1.8] text-slate-600 text-justify mb-12">
            We are offering clients choice and value. We have the solutions, tools and resources to help clients speed time to application deployment, optimize infrastructure capacity, reduce power consumption and free resources to focus on innovation that drives business growth. We partner with leading innovators to ensure you get the best possible I.T. Products.
          </p>

          {/* Product Grid matching the colored blocks in image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            
            {/* Column 1 */}
            <div className="space-y-4 relative pl-4 border-l-2 border-[#ea5a14]">
              {productsCol1.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`${item.color === 'blue' ? 'bg-[#194c7c]' : 'bg-[#ea5a14]'} py-3 px-6 text-white`}
                >
                  <span className="font-bold text-[13px] tracking-widest uppercase">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-4 relative pl-4 border-l-2 border-[#ea5a14] mt-4 md:mt-0">
              {productsCol2.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`${item.color === 'blue' ? 'bg-[#194c7c]' : 'bg-[#ea5a14]'} py-3 px-6 text-white`}
                >
                  <span className="font-bold text-[13px] tracking-widest uppercase">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
