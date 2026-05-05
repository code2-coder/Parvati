import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import Services from './components/sections/Services';
import About from './components/sections/About';
import CctvBiometric from './components/sections/CctvBiometric';
import AudioVisual from './components/sections/AudioVisual';
import IfpdAndPa from './components/sections/IfpdAndPa';
import AmcAndNetwork from './components/sections/AmcAndNetwork';
import SolutionsGrid from './components/sections/SolutionsGrid';
import ClientsAndBrands from './components/sections/ClientsAndBrands';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Process from './components/sections/Process';
import Footer from './components/sections/Footer';
import FloatingButtons from './components/sections/FloatingButtons';


export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Header />

      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <AmcAndNetwork />
        <CctvBiometric />
        <IfpdAndPa />
        <AudioVisual />
        <SolutionsGrid />
        <Testimonials />
        <ClientsAndBrands />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}