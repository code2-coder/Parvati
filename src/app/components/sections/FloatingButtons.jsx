import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingButtons() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 text-sm font-bold text-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none hidden md:block"
      >
        Chat with us
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-t border-r border-gray-100"></div>
      </motion.div>

      <a
        href="https://wa.me/919767375262"
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#128C7E] to-[#25D366] rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.6)] transition-all hover:scale-110 active:scale-95"
        aria-label="WhatsApp Support"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </motion.div>
      </a>
    </motion.div>
  );
}