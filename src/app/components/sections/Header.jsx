import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients-brands' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? 'py-3' 
            : 'py-5'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`mx-auto transition-all duration-500 ${scrolled || mobileMenuOpen ? 'max-w-6xl px-4' : 'container px-6'}`}>
          <nav className={`flex items-center justify-between transition-all duration-500 ${
              scrolled || mobileMenuOpen ? 'glass px-6 py-3 rounded-2xl shadow-xl shadow-primary/5 bg-white/80 backdrop-blur-md border border-white/50' : 'px-0 py-0 bg-transparent'
            }`}>
            {/* Logo */}
            <motion.a 
              href="#home"
              className="flex items-center gap-3 group cursor-pointer relative z-[70]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img src="/assets/parvati-logo-transparent.png" alt="Parvati Systems Logo" className="h-10 md:h-12 w-auto relative z-10" />
              </div>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="relative px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#ea5a14] transition-colors group rounded-full overflow-hidden"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-[#ea5a14]/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a 
                href="tel:+919767375262" 
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[#194c7c] bg-white/80 hover:bg-white border border-gray-200/80 hover:border-[#194c7c] rounded-full transition-all backdrop-blur-md"
                whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4 text-[#ea5a14]" />
                Call Now
              </motion.a>
              <motion.a 
                href="https://wa.me/919767375262" 
                className="group flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 rounded-full transition-all"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`lg:hidden p-2 rounded-full transition-colors relative z-[70] ${scrolled || mobileMenuOpen ? 'bg-gray-100 hover:bg-gray-200 text-gray-800' : 'bg-white/80 hover:bg-white backdrop-blur-md text-gray-800 shadow-sm'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Full-Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2 } }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white/95 flex flex-col pt-32 pb-8 px-6 overflow-y-auto lg:hidden supports-[backdrop-filter]:bg-white/80"
          >
            <div className="flex flex-col gap-6 flex-grow mt-8">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name}
                  href={link.href} 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                  className="flex items-center justify-between py-4 border-b border-gray-100 text-3xl font-black text-[#194c7c] hover:text-[#ea5a14] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight className="w-8 h-8 opacity-20" />
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 pt-10 mt-auto"
            >
              <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] text-center mb-2">Need Assistance?</p>
              <a href="tel:+919767375262" className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-100 text-[#194c7c] font-bold rounded-xl transition-all shadow-sm active:scale-95">
                <Phone className="w-5 h-5 text-[#ea5a14]" />
                Call +91 97673 75262
              </a>
              <a href="https://wa.me/919767375262" className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold rounded-xl shadow-xl shadow-[#25D366]/30 transition-all active:scale-95">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}