import React, { useState } from 'react';
import { Code, Palette, Server, Smartphone, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import selfie3 from '../../images/selfie3.jpg';


// fallback URL used when local image fails to load (replace with a local file path if you add one)
const akProfessionalsFallback = 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800';

const About = () => {
  const [imgSrc, setImgSrc] = useState(selfie3);
  const skills = [
    { icon: Code, name: 'Frontend Development', description: 'React, TypeScript, Next.js' },
    { icon: Server, name: 'Backend Development', description: 'Node.js, Python, Express' },
    { icon: Database, name: 'Database Design', description: 'PostgreSQL, MongoDB' },
    { icon: Palette, name: 'UI/UX Design', description: 'Figma, Adobe Creative Suite' },
    { icon: Smartphone, name: 'Mobile Development', description: 'React Native, Flutter' },
    { icon: Globe, name: 'Cloud & DevOps', description: 'AWS, Docker, CI/CD' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4">About Me</h2>
          <motion.div 
            className="w-20 h-1 bg-[#7A4F2D] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Intro */}
<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
  <motion.div
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-bold text-gray-900 mb-6">Hi, I'm Anjali Kumari!</h3>
    <div className="space-y-6 text-gray-600 leading-relaxed">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm a passionate <strong>CSE B.Tech student</strong> with a strong interest in 
        <strong> Full-Stack Development, AI/ML, and Problem Solving</strong>. My journey 
        began with curiosity about how technology works, and it has evolved into building 
        projects that combine innovation with real-world impact.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Beyond academics, I enjoy exploring new technologies, participating in hackathons, 
        and contributing to tech communities. I also love brainstorming fresh design ideas 
        over a good cup of coffee. I believe in the power of <strong>clean code and 
        thoughtful design</strong> to create meaningful digital experiences.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        I'm always eager to <strong>learn, innovate, and collaborate</strong> with fellow 
        developers and designers. My goal is to grow into a skilled 
        <strong> software engineer</strong> while bringing innovative ideas to life.
      </motion.p>
    </div>
  </motion.div>



          {/* Image/Graphic */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gradient-to-br from-[#EDE2D6] to-[#F5EFE7] rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* white box holding the image */}
              <div className="bg-white rounded-2xl shadow-lg p-3 w-64 h-64 flex items-center justify-center overflow-hidden">
                <motion.img
                  src={imgSrc}
                  alt="Anjali selfie"
                  className="w-full h-full object-cover rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  onError={() => setImgSrc(akProfessionalsFallback)}
                />
              </div>
               <motion.div
                 className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"
                 animate={{ opacity: [0.3, 0.6, 0.3] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               />
             </div>
           </motion.div>
         </div>

        {/* Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-[#F8F3EE] p-6 rounded-xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-[#E7DCCB]"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="p-3 bg-[#E7DCCB] rounded-lg group-hover:bg-[#D2C2AD] transition-all duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <skill.icon className="text-[#7A4F2D] transition-transform duration-300" size={24} />
                  </motion.div>
                </div>
                <h4 className="text-xl font-semibold text-[#1F1F1F] mb-2 group-hover:text-[#7A4F2D] transition-colors duration-300">
                  {skill.name}
                </h4>
                <p className="text-[#4b4b4b] group-hover:text-[#2f2f2f] transition-colors duration-300">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
