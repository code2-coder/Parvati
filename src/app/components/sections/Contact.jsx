import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappNumber = "919767375262";
    const text = `*New Inquiry from Website*\n\n` +
                 `*Name:* ${formData.fullName}\n` +
                 `*Phone:* ${formData.phoneNumber}\n` +
                 `*Email:* ${formData.email}\n` +
                 `*Message:* ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      content: 'Shop No.7, J Tower Building, Ahilybai Holkar Chowk, Padampura, Ch. Sambhajinagar, Maharashtra 431001',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Call / WhatsApp',
      content: '+91 97673 75262',
      color: 'emerald'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'info@parvatisystems.com',
      color: 'indigo'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 10:00 AM - 08:00 PM',
      color: 'amber'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left: Contact Info */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              {/* Section Heading */}
              <div className="flex items-center gap-6 mb-8">
                <h2 className="text-[#194c7c] text-3xl md:text-5xl font-bold uppercase tracking-tight font-['Montserrat',sans-serif]">
                  GET IN <span className="text-[#ea5a14]">TOUCH</span>
                </h2>
                <div className="flex h-[2px] flex-grow max-w-[100px] overflow-hidden rounded-full">
                  <div className="w-1/3 bg-[#ea5a14]"></div>
                  <div className="w-2/3 bg-slate-100"></div>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed text-slate-600 font-light max-w-sm mb-12">
                Ready to secure your business or upgrade your IT infrastructure? Our experts are here to provide the <span className="text-[#194c7c] font-bold text-nowrap">Best IT Solutions</span>.
              </p>
            </motion.div>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 group items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-[#194c7c] group-hover:bg-[#ea5a14] group-hover:text-white group-hover:border-[#ea5a14] transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                    <item.icon size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-[#194c7c] text-[16px] font-bold leading-relaxed max-w-sm">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-50/50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-2xl shadow-blue-900/5 relative overflow-hidden group"
            >
              {/* Form Decorative Accents */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#194c7c] to-[#ea5a14]"></div>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea5a14]/20 focus:border-[#ea5a14] transition-all font-semibold text-[15px] text-[#194c7c] placeholder-slate-300 shadow-sm" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea5a14]/20 focus:border-[#ea5a14] transition-all font-semibold text-[15px] text-[#194c7c] placeholder-slate-300 shadow-sm" 
                    placeholder="+91 97673 75262" 
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea5a14]/20 focus:border-[#ea5a14] transition-all font-semibold text-[15px] text-[#194c7c] placeholder-slate-300 shadow-sm" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4} 
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea5a14]/20 focus:border-[#ea5a14] transition-all font-semibold resize-none text-[15px] text-[#194c7c] placeholder-slate-300 shadow-sm" 
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#ea5a14] to-[#d14b0d] text-white font-black tracking-widest rounded-xl shadow-xl shadow-[#ea5a14]/20 hover:shadow-2xl hover:shadow-[#ea5a14]/30 transition-all flex items-center justify-center gap-4 uppercase text-[13px]"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}