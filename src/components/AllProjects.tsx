import { useState, useEffect } from 'react';
import { Github, ExternalLink, Zap, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectsAPI } from '../services/api';
import fireImg from '../../images/fire.png';
import pTraffic from '../../images/ptraffic.jpeg';
import interviewIq from '../../images/inteviewIq.png';

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
}

const fallbackProjects: Project[] = [
  {
    _id: 'local-1',
    title: 'Fire & Smoke Detection',
    description:
      'An AI-powered safety system built with YOLOv8, OpenCV, and Python. Features include real-time fire/smoke detection, dataset training on Kaggle via Google Colab, and model optimization with Roboflow.',
    image: fireImg,
    technologies: ['YOLOv8', 'OpenCV', 'Python'],
    githubUrl: 'https://github.com/anjaliKumari669/fire-detection-system',
    liveUrl: 'https://youtu.be/GwHVa75NeaQ?si=ljjIxjYHFuCKiX8g',
    featured: true,
    order: 1,
  },
  {
    _id: 'local-2',
    title: 'Predictive Traffic Management',
    description:
      'An AI and IoT-powered system designed to analyze real-time traffic data and predict congestion patterns, improving urban mobility and reducing delays.',
    image: pTraffic,
    technologies: ['IoT', 'Python', 'Machine Learning'],
    githubUrl: 'https://github.com/anjaliOfficialcoll/predictive_traffic',
    liveUrl: 'https://predictivetraffic.netlify.app/',
    featured: false,
    order: 2,
  },
  {
    _id: 'local-3',
    title: 'WanderLust',
    description:
      'A travel and tourism platform that helps users explore destinations, plan trips, and discover personalized recommendations with an intuitive interface.',
    image:
      'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/anjaliOfficialcoll/Wanderlust',
    liveUrl: 'https://wanderlust-c0q0.onrender.com/listings',
    featured: false,
    order: 3,
  },
  {
    _id: 'local-4',
    title: 'InterviewIQ 🎯',
    description:
      'AI-powered interview practice platform using Google Gemini API – Master your interview skills with real-time AI feedback and adaptive difficulty.',
    image: interviewIq,
    technologies: ['Google Gemini AI', 'Node.js', 'Express.js', 'JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/anjaliOfficialcoll/ai-interview-simulator',
    liveUrl: 'https://ai-interview-simulator-production-39ec.up.railway.app/',
    featured: false,
    order: 4,
  },
  {
    _id: 'local-5',
    title: 'Tweetify',
    description:
      'A Twitter-inspired web application that allows users to create, view, and manage tweets with full CRUD functionality.',
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800',
    technologies: ['Node.js', 'Express.js', 'MongoDB Atlas', 'EJS', 'Render'],
    githubUrl: 'https://github.com/anjaliOfficialcoll/tweetify-rest-api',
    liveUrl: 'https://tweetify-no52.onrender.com',
    featured: false,
    order: 5,
  },
];

const AllProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectsAPI.getAll();
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
          setUsingFallback(false);
        } else {
          setProjects(fallbackProjects);
          setUsingFallback(true);
        }
      } catch (error) {
        console.error('Failed to fetch projects:', error);
        setProjects(fallbackProjects);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <section className="min-h-screen py-20 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          onClick={handleBackToHome}
          className="flex items-center gap-2 mb-8 text-[#7A4F2D] hover:text-[#5D3A1E] transition-colors font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </motion.button>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4">All Projects</h1>
          <motion.div
            className="w-20 h-1 bg-[#7A4F2D] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my complete portfolio of projects showcasing various technologies and skills.
          </p>
          {usingFallback && (
            <p className="mt-4 text-sm text-[#7A4F2D]">
              Showing your saved projects while live data is unavailable.
            </p>
          )}
        </motion.div>

        {loading ? (
          <div className="text-center py-20">
            <div className="text-2xl text-gray-600">Loading projects...</div>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No projects to display yet.</p>
          </div>
        ) : (
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <motion.div
                key={project._id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-blue-100"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-[#7A4F2D]/20 to-[#5e3b24]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full text-gray-800 hover:bg-[#E7DCCB] transition-all duration-300 shadow-lg"
                      whileHover={{
                        scale: 1.15,
                        rotate: 5,
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full text-gray-800 hover:bg-gray-100 transition-all duration-300 shadow-lg"
                        whileHover={{
                          scale: 1.15,
                          rotate: -5,
                          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </motion.div>
                  {project.featured && (
                    <motion.div
                      className="absolute top-3 right-3 bg-[#7A4F2D] text-white px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg"
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <Zap size={12} />
                      Featured
                    </motion.div>
                  )}
                </div>
                <div className="p-4">
                  <motion.h3
                    className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-2.5 py-0.5 bg-[#E7DCCB] text-[#7A4F2D] text-xs font-medium rounded-full hover:bg-[#D2C2AD] transition-colors duration-300"
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[#1F1F1F] hover:text-[#7A4F2D] transition-all duration-300 font-medium"
                      whileHover={{ x: 3 }}
                    >
                      <Github size={14} />
                      Code
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[#1F1F1F] hover:text-[#7A4F2D] transition-all duration-300 font-medium"
                        whileHover={{ x: 3 }}
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AllProjects;
