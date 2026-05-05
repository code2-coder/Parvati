import fs from 'fs';
import path from 'path';

const appPath = path.resolve('src/app/App.tsx');
let content = fs.readFileSync(appPath, 'utf8');

const componentsDir = path.resolve('src/app/components');
const sectionsDir = path.join(componentsDir, 'sections');
const sharedDir = path.join(componentsDir, 'shared');

if (!fs.existsSync(sectionsDir)) fs.mkdirSync(sectionsDir, { recursive: true });
if (!fs.existsSync(sharedDir)) fs.mkdirSync(sharedDir, { recursive: true });

// We'll manually specify the parts to extract based on the comments.
const extractSection = (regex, name, imports, props = '') => {
  const match = content.match(regex);
  if (!match) {
    console.log(`Could not find section ${name}`);
    return;
  }
  let sectionContent = match[0];
  content = content.replace(sectionContent, `<${name} ${props}/>`);

  // Specific fix for Header since it uses state
  let stateAdditions = '';
  if (name === 'Header') {
    stateAdditions = `
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
`;
  }

  const componentCode = `import React${name === 'Header' ? ', { useState, useEffect }' : ''} from 'react';
${imports}

export default function ${name}() {
${stateAdditions}
  return (
    ${sectionContent.trim()}
  );
}
`;
  fs.writeFileSync(path.join(sectionsDir, `${name}.tsx`), componentCode);
};

// State logic in App.tsx needs to be removed
content = content.replace(/const \[mobileMenuOpen, setMobileMenuOpen\] = useState\(false\);\n  const \[scrolled, setScrolled\] = useState\(false\);\n\n  useEffect\(\(\) => \{\n    const handleScroll = \(\) => \{\n      setScrolled\(window\.scrollY > 50\);\n    \};\n    window\.addEventListener\('scroll', handleScroll\);\n    return \(\) => window\.removeEventListener\('scroll', handleScroll\);\n  \}, \[\]\);\n/g, '');

extractSection(/{\/\* Sticky Header \*\/}[\s\S]*?<\/motion\.header>/, 'Header', `import { Menu, X, Phone, MessageCircle } from 'lucide-react';\nimport { motion } from 'motion/react';\nimport { Monitor } from 'lucide-react';`);
extractSection(/{\/\* Hero Section \*\/}[\s\S]*?<\/section>/, 'Hero', `import { ArrowRight, Monitor, Camera, Server } from 'lucide-react';\nimport { motion } from 'motion/react';`);
extractSection(/{\/\* Stats Section \*\/}[\s\S]*?<\/section>/, 'Stats', `import { Users, CheckCircle, Award, Clock } from 'lucide-react';\nimport { motion } from 'motion/react';\nimport Counter from '../shared/Counter';`);
extractSection(/{\/\* Why Choose Us \*\/}[\s\S]*?<\/section>/, 'WhyChooseUs', `import { Shield, Zap, Award, CheckCircle, Laptop, Users } from 'lucide-react';\nimport { motion } from 'motion/react';`);
extractSection(/{\/\* Services Section \*\/}[\s\S]*?<\/section>/, 'Services', `import { Monitor, Camera, Fingerprint, Server, HardDrive, Wifi } from 'lucide-react';\nimport { motion } from 'motion/react';\nimport ServiceCard from '../shared/ServiceCard';`);
extractSection(/{\/\* About Section \*\/}[\s\S]*?<\/section>/, 'About', `import { motion } from 'motion/react';`);
extractSection(/{\/\* Brands We Deal With \*\/}[\s\S]*?<\/section>/, 'Brands', `import { motion } from 'motion/react';`);
extractSection(/{\/\* Industries We Serve \*\/}[\s\S]*?<\/section>/, 'Industries', `import { Monitor, Camera, Server, Shield, Database, Wifi, HardDrive, Fingerprint } from 'lucide-react';\nimport { motion } from 'motion/react';`);
extractSection(/{\/\* FAQ Section \*\/}[\s\S]*?<\/section>/, 'FAQ', `import { motion } from 'motion/react';\nimport FAQItem from '../shared/FAQItem';`);
extractSection(/{\/\* Special Offer CTA \*\/}[\s\S]*?<\/section>/, 'CTA', `import { CheckCircle, Award, Clock, Phone, MessageCircle } from 'lucide-react';\nimport { motion } from 'motion/react';`);
extractSection(/{\/\* Testimonials Section \*\/}[\s\S]*?<\/section>/, 'Testimonials', `import { motion } from 'motion/react';\nimport TestimonialCard from '../shared/TestimonialCard';`);
extractSection(/{\/\* Contact Section \*\/}[\s\S]*?<\/section>/, 'Contact', `import { MapPin, Phone, Mail } from 'lucide-react';\nimport { motion } from 'motion/react';`);
extractSection(/<footer className="bg-gray-900 text-white py-12">[\s\S]*?<\/footer>/, 'Footer', `import { Monitor, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';`);
extractSection(/{\/\* Floating Action Buttons \*\/}[\s\S]*?<\/motion\.a>/, 'FloatingButtons', `import { MessageCircle, Phone } from 'lucide-react';\nimport { motion } from 'motion/react';`);

// Oh wait, FloatingButtons has two motion.a
extractSection(/<motion\.a\n        href="tel:\+919767375262"[\s\S]*?<\/motion\.a>/, 'FloatingButtons2', `import { Phone } from 'lucide-react';\nimport { motion } from 'motion/react';`);


// Now extract the shared components at the bottom of the file
const extractShared = (regex, name, imports) => {
  const match = content.match(regex);
  if (!match) return;
  const sectionContent = match[0];
  content = content.replace(sectionContent, '');
  
  const componentCode = `import React${name === 'Counter' || name === 'FAQItem' ? ', { useState, useEffect }' : (name==='FAQItem'? ', {useState}' : '')} from 'react';
${imports}

${sectionContent.trim()}
`;
  fs.writeFileSync(path.join(sharedDir, `${name}.tsx`), componentCode);
};

extractShared(/function ServiceCard\([\s\S]*?}\n/, 'ServiceCard', `import { ChevronRight } from 'lucide-react';\nimport { motion } from 'motion/react';`);
extractShared(/function FAQItem\([\s\S]*?}\n/, 'FAQItem', `import { Plus, Minus } from 'lucide-react';\nimport { motion, AnimatePresence } from 'motion/react';`);
extractShared(/function TestimonialCard\([\s\S]*?}\n/, 'TestimonialCard', `import { Star } from 'lucide-react';\nimport { motion } from 'motion/react';`);
extractShared(/function Counter\([\s\S]*?}\n/, 'Counter', `import { motion } from 'motion/react';`);

// Combine FloatingButtons
let floatingBtns = '';
if (fs.existsSync(path.join(sectionsDir, 'FloatingButtons.tsx')) && fs.existsSync(path.join(sectionsDir, 'FloatingButtons2.tsx'))) {
  const f1 = fs.readFileSync(path.join(sectionsDir, 'FloatingButtons.tsx'), 'utf8');
  const f2 = fs.readFileSync(path.join(sectionsDir, 'FloatingButtons2.tsx'), 'utf8');
  const m1 = f1.match(/return \([\s\S]*?\);/)[0];
  const m2 = f2.match(/return \([\s\S]*?\);/)[0];
  
  fs.writeFileSync(path.join(sectionsDir, 'FloatingButtons.tsx'), `import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingButtons() {
  return (
    <>
      ${m1.replace('return (', '').replace(');', '').trim()}
      ${m2.replace('return (', '').replace(');', '').trim()}
    </>
  );
}
`);
  content = content.replace('<FloatingButtons2 />', '');
  fs.unlinkSync(path.join(sectionsDir, 'FloatingButtons2.tsx'));
}

// Add imports to App.tsx
const newAppContent = `import React from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Brands from './components/sections/Brands';
import Industries from './components/sections/Industries';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import FloatingButtons from './components/sections/FloatingButtons';

${content.replace(/import {.*?} from 'lucide-react';/, '')}
`;

fs.writeFileSync(appPath, newAppContent);
console.log('Successfully refactored App.tsx');
