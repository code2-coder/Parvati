import React from 'react';
import { motion } from 'motion/react';
import FAQItem from '../shared/FAQItem';

export default function FAQ() {
  const faqs = [
    {
      q: 'Do you provide on-site service for computer and laptop repairs?',
      a: 'Yes, we offer both on-site and in-shop repair services. Our technicians can visit your location for diagnosis and repair at your convenience.',
      delay: 0.1
    },
    {
      q: 'What is the warranty period for CCTV installations?',
      a: 'We provide a comprehensive 1-year warranty on all CCTV installations, covering both hardware and installation work. Extended warranty options are also available.',
      delay: 0.2
    },
    {
      q: 'Do you offer Annual Maintenance Contracts (AMC)?',
      a: 'Yes, we offer flexible AMC plans for computers, servers, CCTV systems, and networking equipment with priority support and regular maintenance visits.',
      delay: 0.3
    },
    {
      q: 'How quickly can you respond to service requests?',
      a: 'We provide 24/7 support. For critical issues, our team can respond within 2-4 hours. Regular service requests are typically handled within 24 hours.',
      delay: 0.4
    },
    {
      q: 'Do you supply genuine spare parts and products?',
      a: 'Absolutely! We only deal in 100% genuine products and spare parts from authorized brands to ensure quality and reliability.',
      delay: 0.5
    },
    {
      q: 'Can you customize IT solutions for my business needs?',
      a: 'Yes, we specialize in creating customized IT solutions tailored to your specific business requirements, budget, and scale.',
      delay: 0.6
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Header Area */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section Heading matching brochure style */}
            <div className="flex items-center mb-6">
              <h2 className="text-[#194c7c] text-3xl md:text-4xl font-bold uppercase mr-4 tracking-wide font-['Montserrat',sans-serif]">
                F.A.Q.
              </h2>
              <div className="flex h-[2px] mt-2 flex-grow max-w-[200px]">
                <div className="w-16 bg-[#ea5a14]"></div>
                <div className="flex-grow bg-[#5a6268]"></div>
              </div>
            </div>
            <p className="text-[15px] leading-[1.8] text-[#333] text-justify md:pr-10 mb-6">
              Have a different question? Feel free to contact our support team for any specific queries.
            </p>
            
            <div className="mt-10 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <p className="text-sm font-bold text-slate-900 mb-2 tracking-tight">Need immediate help?</p>
              <a href="tel:+919767375262" className="text-primary font-black text-xl hover:underline">
                +91 97673 75262
              </a>
            </div>
          </motion.div>

          {/* FAQ Items Area */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} delay={faq.delay} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}