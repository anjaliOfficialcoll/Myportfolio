import React from 'react';
import { Calendar, MapPin, Award, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    
 {
  id: 3,
  title: 'Software Engineering Intern',
  company: 'Apanghr',
  location: 'Remote', // or City, State if applicable
  period: 'Summer 2024', // adjust timeframe
  description: 'Worked on real-world projects focusing on web development and backend integration. Assisted senior engineers in building scalable features and debugging applications.',
  achievements: [
    'Contributed to development of key application modules',
    'Collaborated with team to improve code quality through reviews',
    'Gained hands-on experience with modern web technologies'
  ]
},

    
  ];

  const awards = [
  {
    title: '1st Prize – Innovators Day',
    organization: 'Shri Manakula College',
    year: '2024',
    description: 'Won for Predictive Traffic Management project (IoT + AI/ML).'
  },
  {
    title: '3rd Prize – SpaceHer Project Idea Contest',
    organization: 'SpaceHer',
    year: '2024',
    description: 'Recognized for Women\'s Safety via SpaceTech project idea.'
  },
  {
    title: 'Organizer – Sankalp 2.0 Virtual Hackathon',
    organization: 'GatherTown',
    year: '2024',
    description: 'Organized and coordinated a national-level hackathon.'
  },
  {
    title: 'Technology Virtual Experience Program',
    organization: 'Deloitte Australia (Forage)',
    year: '2025',
    description: 'Completed job simulation including development, coding, and writing a proposal for a dashboard (Aug 10, 2025).'
  }
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4">Experience & Achievements</h2>
          <motion.div 
            className="w-20 h-1 bg-[#7A4F2D] mx-auto mb-8"
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             viewport={{ once: true }}
           />
         </motion.div>
 
         <div className="grid lg:grid-cols-3 gap-12">
           {/* Experience Timeline */}
           <div className="lg:col-span-2">
             <h3 className="text-2xl font-bold text-[#1F1F1F] mb-8">Professional Experience</h3>
             <motion.div
               className="space-y-8"
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
             >
               {experiences.map((exp, index) => (
                 <motion.div
                   key={exp.id}
                   variants={itemVariants}
                   className="relative pl-8 pb-8 border-l-2 border-[#E7DCCB] last:border-l-0"
                 >
                   <motion.div 
                    className="absolute -left-2 top-0 w-4 h-4 bg-[#7A4F2D] rounded-full"
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     transition={{ duration: 0.4, delay: index * 0.2 }}
                     viewport={{ once: true }}
                   />
                   <motion.div 
                    className="bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-400 border border-transparent hover:border-[#E7DCCB]"
                     whileHover={{ 
                       x: 5,
                       scale: 1.02,
                       boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
                     }}
                     transition={{ duration: 0.3, ease: "easeOut" }}
                   >
                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <motion.h4 
                        className="text-xl font-bold text-[#1F1F1F] hover:text-[#7A4F2D] transition-colors duration-300"
                         whileHover={{ x: 3 }}
                       >
                         {exp.title}
                       </motion.h4>
                       <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
                         <Calendar size={14} className="mr-1" />
                         {exp.period}
                       </div>
                     </div>
                     <div className="flex items-center text-[#7A4F2D] font-semibold mb-2">
                       <span>{exp.company}</span>
                     </div>
                     <div className="flex items-center text-[#4b4b4b] text-sm mb-4">
                       <MapPin size={14} className="mr-1" />
                       {exp.location}
                     </div>
                     <p className="text-[#4b4b4b] mb-4 leading-relaxed">{exp.description}</p>
                     <div className="space-y-2">
                       {exp.achievements.map((achievement, achIndex) => (
                         <motion.div 
                           key={achIndex} 
                           className="flex items-start"
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                           viewport={{ once: true }}
                         >
                          <motion.div 
                            className="w-2 h-2 bg-[#7A4F2D] rounded-full mt-2 mr-3 flex-shrink-0"
                             whileHover={{ scale: 1.5 }}
                             transition={{ duration: 0.2 }}
                           />
                          <span className="text-[#1F1F1F]">{achievement}</span>
                         </motion.div>
                       ))}
                     </div>
                   </motion.div>
                 </motion.div>
               ))}
             </motion.div>
           </div>
 
           {/* Awards & Achievements */}
           <div>
             <h3 className="text-2xl font-bold text-[#1F1F1F] mb-8">Awards & Recognition</h3>
             <motion.div
               className="space-y-6"
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
             >
               {awards.map((award, index) => (
                 <motion.div
                   key={index}
                   variants={itemVariants}
                   className="bg-gradient-to-br from-[#EDE2D6] to-[#F5EFE7] rounded-lg p-6 hover:shadow-xl transition-all duration-400 border border-transparent hover:border-[#E7DCCB]"
                   whileHover={{ 
                     scale: 1.03,
                     y: -3,
                     boxShadow: "0 20px 25px -5px rgba(122, 79, 45, 0.08)"
                   }}
                   transition={{ duration: 0.3, ease: "easeOut" }}
                 >
                   <div className="flex items-center mb-3">
                     <motion.div 
                      className="p-2 bg-[#7A4F2D] rounded-lg mr-3"
                       whileHover={{ 
                         rotate: 10,
                         scale: 1.1
                       }}
                       transition={{ duration: 0.2 }}
                     >
                      {index === 0 ? <Trophy className="text-white" size={20} /> : <Award className="text-white" size={20} />}
                     </motion.div>
                     <div>
                      <motion.h4 
                        className="font-bold text-[#1F1F1F] hover:text-[#7A4F2D] transition-colors duration-300"
                         whileHover={{ x: 2 }}
                       >
                         {award.title}
                       </motion.h4>
                       <p className="text-sm text-[#4b4b4b]">{award.year}</p>
                     </div>
                   </div>
                  <p className="text-[#7A4F2D] font-semibold mb-2">{award.organization}</p>
                  <p className="text-[#4b4b4b] text-sm leading-relaxed">{award.description}</p>
                 </motion.div>
               ))}
             </motion.div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Experience;