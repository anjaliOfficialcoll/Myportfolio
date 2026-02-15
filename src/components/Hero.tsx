import React from 'react';
import { Github, Linkedin, X, Youtube, Instagram, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import laptopImg from '../../images/laptopimg.avif';

const Hero: React.FC = () => {
  const social = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anjali-kumari-6b2742281/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/anjaliOfficialcoll', label: 'GitHub' },
    { icon: X, href: 'https://x.com/anjaliTwit00', label: 'X' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
  <div id="home" className="min-h-screen flex items-center bg-[#F5EFE7]">

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-[#1F1F1F]"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
              AK !<br></br><span className="inline-block"> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7A4F2D] via-[#B07A4D] to-[#F2E8DD]">Aspiring</span>
              </span>{' '}
              Software Engineer
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-6">
              CSE B.Tech Student | Intern | Content creation
            </p>

            <p className="max-w-xl text-sm md:text-base text-gray-600 mb-8">
              I build polished web experiences with modern React toolchains, Tailwind CSS and micro-interactions. Currently exploring performance, accessibility and design systems.
            </p>

            {/* Resume button — opens Google Drive link in a new tab */}
            <div className="flex items-center gap-4">
              <a
                href="https://drive.google.com/file/d/1C2qG9x5Y702ZKpwtRdiwC5DYNffr_ux_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1F1F1F] text-[#F5EFE7] px-5 py-3 rounded-full font-semibold shadow hover:bg-[#2a2a2a] transition-colors"
                aria-label="Open resume in Google Drive (opens in new tab)"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Right: Profile card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* laptop image fills entire card (full width) */}
            <div className="w-full h-56 md:h-[420px]">
              <img
                src={laptopImg}
                alt="decorative laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
  </div>
  );
};

export default Hero;