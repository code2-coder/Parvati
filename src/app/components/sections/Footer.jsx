import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-white mt-10 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10">
          
          {/* Logo & Social Section */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center md:w-[250px] gap-8">
            <img src="/assets/parvati-logo-transparent.png" alt="Parvati Systems Logo" className="w-48 h-auto" />
            
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-80 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                <Facebook size={18} fill="currentColor" strokeWidth={0} />
              </a>
              <a href="https://www.instagram.com/parvati_systems?igsh=ZXNzNWg3MGxkbmhr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:opacity-80 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="mailto:parvati.systems@gmail.com" className="w-10 h-10 rounded-full bg-[#EA4335] text-white flex items-center justify-center hover:opacity-80 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Contact Block Section */}
          <div className="flex-grow bg-[#f5f6f7] rounded-sm p-8 md:p-10">
            <h3 className="text-[#333] font-bold text-lg tracking-wide uppercase mb-6 font-['Montserrat',sans-serif]">
              FOR ANY ASSISTANCE...
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-20 font-bold text-[#194c7c] text-[15px]">Mob:</span>
                <span className="text-[#333] text-[15px] font-medium">+91 9767375262 | 9665985262</span>
              </div>
              
              <div className="flex items-start">
                <span className="w-20 font-bold text-[#194c7c] text-[15px] flex-shrink-0">Office:</span>
                <span className="text-[#333] text-[15px] font-medium leading-[1.6]">
                  Shop No.7, Jai Towers, Ahilyabai Holkar Chowk, Panchavati Rd, near Ahilyabai Holkar Chowk, Shriram Nagar, Konkanwadi, Chhatrapati Sambhajinagar, Maharashtra 431001
                </span>
              </div>
              
              <div className="flex items-start">
                <span className="w-20 font-bold text-[#194c7c] text-[15px]">Email:</span>
                <a href="mailto:parvati.systems@gmail.com" className="text-[#333] text-[15px] font-medium hover:text-[#ea5a14] transition-colors">
                  parvati.systems@gmail.com
                </a>
              </div>
            </div>
          </div>
          
        </div>

        {/* All Rights Reserved Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-gray-500 text-sm font-medium">
              &copy; {new Date().getFullYear()} Parvati Systems. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-sm font-medium">
              Designed & Developed with ❤️ by{" "}
              <a 
                href="https://www.codefusionprojects.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold text-[#194c7c] hover:text-[#ea5a14] transition-colors"
              >
                Code Fusion Projects
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-[#ea5a14] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#ea5a14] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}