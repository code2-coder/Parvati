import React, { useState } from 'react';
import { Plus, Minus, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQItem({ question, answer, delay }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`border transition-all duration-300 rounded-[2rem] overflow-hidden ${
        isOpen ? 'bg-white border-primary shadow-xl shadow-primary/5' : 'bg-slate-50 border-slate-100 hover:border-slate-200'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <button
        className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-slate-900'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500'
          }`}
        >
          <ChevronDown size={18} strokeWidth={3} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}