import React from 'react';
import { CheckCircle, Award, Clock, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTA() {
  const offers = [
    { icon: CheckCircle, text: 'Free Site Survey', delay: 0.2 },
    { icon: Award, text: 'Enterprise Discounts', delay: 0.3 },
    { icon: Clock, text: 'Same Day Service', delay: 0.4 }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#ea5a14] font-bold tracking-widest uppercase text-xs mb-6 block">Ready to Secure Your Assets?</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Scale Your Infrastructure <br />
                <span className="text-[#ea5a14]">With Confidence.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
                Get a comprehensive technology assessment and a tailored quote for your project. Special packages for corporate and industrial clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {offers.map((offer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: offer.delay }}
                  className="bg-white/5 border border-white/10 p-8 rounded-[2rem] group hover:bg-white/10 transition-all duration-500"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#ea5a14] group-hover:scale-110 transition-transform">
                      <offer.icon className="w-6 h-6" />
                    </div>
                    <p className="text-white font-bold tracking-tight">{offer.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-10 py-5 bg-[#194c7c] text-white font-black rounded-2xl shadow-xl hover:bg-[#133b61] transition-all flex items-center justify-center gap-3 group"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/919767375262"
                className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                WhatsApp Support
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}