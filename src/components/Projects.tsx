import React from 'react';
import { Github, ExternalLink, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import fireImg from '../../images/fire.png'; // new import for local image
import pTraffic from '../../images/ptraffic.jpeg'; // added import for predictive-traffic image

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Fire & Smoke Detection',
      description: 'An AI-powered safety system built with YOLOv8, OpenCV, and Python. Features include real-time fire/smoke detection, dataset training on Kaggle via Google Colab, and model optimization with Roboflow.',
      image: fireImg,
      technologies: ['YOLOv8', 'OpenCV', 'Python'],
      githubUrl: 'https://github.com/anjaliKumari669/fire-detection-system',
      liveUrl: 'https://youtu.be/GwHVa75NeaQ?si=ljjIxjYHFuCKiX8g',
      featured: true,
    },
    {
      id: 2,
      title: 'Predictive Traffic Management',
      description: 'An AI and IoT-powered system designed to analyze real-time traffic data and predict congestion patterns, improving urban mobility and reducing delays.',
      image: pTraffic,
      technologies: ['IoT', 'Python', 'Machine Learning'],
      githubUrl: 'https://github.com/anjaliOfficialcoll/predictive_traffic',
      liveUrl: 'https://predictivetraffic.netlify.app/',
    },
    {
  id: 3,
  title: 'WanderLust',
  description: 'A travel and tourism platform that helps users explore destinations, plan trips, and discover personalized recommendations with an intuitive interface.',
  image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
  technologies: ['React', 'Node.js', 'MongoDB'],
  githubUrl: 'https://github.com/anjaliOfficialcoll/Wanderlust',
  liveUrl: 'https://wanderlust-c0q0.onrender.com/listings',
},

   {
  id: 4,
  title: 'Habit Harmony Match',
  description: 'A lifestyle web app that matches users based on daily habits and routines, fostering better compatibility and meaningful connections.',
  image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800',
  technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  githubUrl: 'https://github.com/anjaliOfficialcoll/ApanaghrMain',
  liveUrl: 'https://habit-harmony-match.lovable.app/',
},
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4">Featured Projects</h2>
          <motion.div 
            className="w-20 h-1 bg-[#7A4F2D] mx-auto mb-8"
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             viewport={{ once: true }}
           />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on recently. Each one represents a unique 
            challenge and showcases different aspects of my development skills.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-blue-100 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7A4F2D]/20 to-[#5e3b24]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <motion.div 
                  className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.a
                    href={project.githubUrl}
                    className="bg-white p-3 rounded-full text-gray-800 hover:bg-[#E7DCCB] transition-all duration-300 shadow-lg"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    className="bg-white p-3 rounded-full text-gray-800 hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </motion.div>
                {project.featured && (
                  <motion.div 
                    className="absolute top-4 right-4 bg-[#7A4F2D] text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  >
                    <Zap size={14} />
                    Featured
                  </motion.div>
                )}
              </div>
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-[#E7DCCB] text-[#7A4F2D] text-sm font-medium rounded-full hover:bg-[#D2C2AD] transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-[#1F1F1F] hover:text-[#7A4F2D] transition-all duration-300 font-medium"
                    whileHover={{ x: 3 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-[#1F1F1F] hover:text-[#7A4F2D] transition-all duration-300 font-medium"
                    whileHover={{ x: 3 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-[#7A4F2D] text-[#F5EFE7] px-8 py-3 rounded-full font-semibold hover:bg-[#5e3b24] transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(122, 79, 45, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
