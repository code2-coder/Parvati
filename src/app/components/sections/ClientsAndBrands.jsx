import React from 'react';
import { motion } from 'motion/react';

export default function ClientsAndBrands() {
  const clients = [
    'Sanjay Kaizen Industries', 'Vaidya Group of Industries', 'Radico', 
    'SMS Limited', 'Woodridge High', 'Foundation School', 
    'Sai Agro Services', 'Mahavitaran', 'Kamalnayan Bajaj Hospital', 
    'Paperpack Industries', 'Sahyadri School', 'Orchid Group of Institutions'
  ];

  const brands = [
    'HP', 'Lenovo', 'Dell', 'CP Plus', 'tp-link', 'SECURUS', 'eSSL', 'logitech',
    'Quick Heal', 'BenQ', 'Seagate', 'Western Digital', 'COFE', 'Trueview', 'TOSHIBA', 'D-Link',
    'Canon', 'EPSON', 'Dahua', 'HIKVISION'
  ];

  return (
    <section id="clients-brands" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* CLIENTS SECTION */}
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
              OUR <span className="text-[#ea5a14]">CLIENTS</span>
            </h2>
            <div className="flex h-[2px] flex-grow max-w-[150px] overflow-hidden rounded-full">
              <div className="w-1/3 bg-[#ea5a14]"></div>
              <div className="w-2/3 bg-slate-200"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -5 }}
                className="px-6 py-5 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center text-center group transition-all hover:shadow-xl hover:border-[#ea5a14]/20"
              >
                <span className="text-[13px] font-black text-slate-500 uppercase tracking-wide group-hover:text-[#194c7c] transition-colors">{client}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BRANDS PARTNERS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Section Heading */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-[#194c7c] text-3xl md:text-5xl font-bold uppercase tracking-tight font-['Montserrat',sans-serif]">
              BRAND <span className="text-[#ea5a14]">PARTNERS</span>
            </h2>
            <div className="flex h-[2px] flex-grow max-w-[150px] overflow-hidden rounded-full">
              <div className="w-1/3 bg-[#ea5a14]"></div>
              <div className="w-2/3 bg-slate-200"></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }}
                className="px-6 py-4 bg-white border border-slate-100 shadow-sm rounded-lg flex items-center justify-center text-center min-w-[120px] transition-all hover:shadow-md"
              >
                <span className="text-[12px] font-black text-[#194c7c] uppercase tracking-[0.15em]">{brand}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
