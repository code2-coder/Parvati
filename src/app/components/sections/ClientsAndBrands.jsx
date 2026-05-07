import React from 'react';
import { motion } from 'motion/react';

export default function ClientsAndBrands() {
  const clients = [
    { name: 'Sanjay Kaizen Industries', image: '/assets/c_1.png', domain: '' },
    { name: 'Vaidya Group of Industries', image: '/assets/c_2.png', domain: 'vaidyagroup.com' },
    { name: 'Radico', image: '/assets/c_3.png', domain: 'radicokhaitan.com' },
    { name: 'SMS Limited', image: '/assets/c_4.png', domain: 'smsl.co.in' },
    { name: 'Woodridge High', image: '/assets/c_5.png', domain: 'woodridgehigh.com' },
    { name: 'Foundation School', image: '/assets/c_6.png', domain: 'foundationschool.com' },
    { name: 'Sai Agro Services', image: '/assets/c_7.png', domain: '' },
    { name: 'Mahavitaran', image: '/assets/c_8.png', domain: 'mahadiscom.in' },
    { name: 'Kamalnayan Bajaj Hospital', image: '/assets/c_9.png', domain: 'kamalnayanbajajhospital.org' },
    { name: 'Paperpack Industries', image: '/assets/c_10.png', domain: '' },
    { name: 'Sahyadri School', image: '/assets/c_11.png', domain: 'sahyadrischool.org' },
    { name: 'Orchid Group of Institutions', image: '/assets/c_12.png', domain: 'orchid.edu.in' },
    { name: 'Shree Gurudatta Sahakari Bank Ltd.', image: '/assets/c_13.png', domain: '' }
  ];

  const brands = [
    { name: 'HP', image: '/assets/b_1.png', domain: 'hp.com' },
    { name: 'Lenovo', image: '/assets/b_2.png', domain: 'lenovo.com' },
    { name: 'Dell', image: '/assets/b_3.png', domain: 'dell.com' },
    { name: 'CP Plus', image: '/assets/b_4.png', domain: 'cpplusworld.com' },
    { name: 'tp-link', image: '/assets/b_5.png', domain: 'tp-link.com' },
    { name: 'SECURUS', image: '/assets/b_6.png', domain: 'securuscctv.com' },
    { name: 'eSSL', image: '/assets/b_7.png', domain: 'esslsecurity.com' },
    { name: 'logitech', image: '/assets/b_8.png', domain: 'logitech.com' },
    { name: 'Quick Heal', image: '/assets/b_9.png', domain: 'quickheal.com' },
    { name: 'BenQ', image: '/assets/b_10.png', domain: 'benq.com' },
    { name: 'Seagate', image: '/assets/b_11.png', domain: 'seagate.com' },
    { name: 'Western Digital', image: '/assets/b_12.png', domain: 'wd.com' },
    { name: 'COFE', image: '/assets/b_13.png', domain: 'cofesolutions.com' },
    { name: 'TOSHIBA', image: '/assets/b_14.png', domain: 'toshiba.com' },
    { name: 'D-Link', image: '/assets/b_15.png', domain: 'dlink.com' },
    { name: 'Canon', image: '/assets/b_16.png', domain: 'canon.com' },
    { name: 'EPSON', image: '/assets/b_17.png', domain: 'epson.com' },
    { name: 'Dahua', image: '/assets/b_18.png', domain: 'dahuasecurity.com' }
  ];

  // Helper component to handle logo rendering with fallback
  const LogoImage = ({ name, domain, image, isBrand = false }) => {
    const [error, setError] = React.useState(false);

    // Prioritize direct image path, then Clearbit API
    const logoUrl = image || (domain ? `https://logo.clearbit.com/${domain}?size=200` : null);

    if (error || !logoUrl) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          {/* Simple icon fallback if no logo found */}
          <div className={`w-8 h-8 mb-2 rounded-full flex items-center justify-center ${isBrand ? 'bg-[#194c7c]/10' : 'bg-[#ea5a14]/10'}`}>
            <svg className={`w-4 h-4 ${isBrand ? 'text-[#194c7c]' : 'text-[#ea5a14]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span className={`text-[10px] font-bold text-slate-500 uppercase tracking-tight text-center leading-tight`}>
            {name}
          </span>
        </div>
      );
    }

    return (
      <img
        src={logoUrl}
        alt={name}
        className="max-h-12 max-w-[140px] w-auto object-contain transition-all duration-300 group-hover:scale-110"
        onError={() => setError(true)}
      />
    );
  };

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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="aspect-square bg-white border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center p-6 text-center group transition-all hover:shadow-xl hover:border-[#ea5a14]/20"
              >
                <LogoImage name={client.name} domain={client.domain} image={client.image} />
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

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="aspect-[3/2] bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center p-4 text-center group transition-all hover:shadow-md hover:border-[#194c7c]/20"
              >
                <LogoImage name={brand.name} domain={brand.domain} image={brand.image} isBrand={true} />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
