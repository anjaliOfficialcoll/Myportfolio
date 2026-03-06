import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';

dotenv.config();

const projects = [
  {
    title: 'Fire & Smoke Detection',
    description: 'An AI-powered safety system built with YOLOv8, OpenCV, and Python. Features include real-time fire/smoke detection, dataset training on Kaggle via Google Colab, and model optimization with Roboflow.',
    image: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?w=800',
    technologies: ['YOLOv8', 'OpenCV', 'Python'],
    githubUrl: 'https://github.com/anjaliKumari669/fire-detection-system',
    liveUrl: 'https://youtu.be/GwHVa75NeaQ?si=ljjIxjYHFuCKiX8g',
    featured: true,
    order: 1
  },
  {
    title: 'Predictive Traffic Management',
    description: 'An AI and IoT-powered system designed to analyze real-time traffic data and predict congestion patterns, improving urban mobility and reducing delays.',
    image: 'https://images.unsplash.com/photo-1486365227551-f3f90034a57c?w=800',
    technologies: ['IoT', 'Python', 'Machine Learning'],
    githubUrl: 'https://github.com/anjaliOfficialcoll/predictive_traffic',
    liveUrl: 'https://predictivetraffic.netlify.app/',
    featured: false,
    order: 2
  },
  {
    title: 'WanderLust',
    description: 'A travel and tourism platform that helps users explore destinations, plan trips, and discover personalized recommendations with an intuitive interface.',
    image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/anjaliOfficialcoll/Wanderlust',
    liveUrl: 'https://wanderlust-c0q0.onrender.com/listings',
    featured: false,
    order: 3
  },
  {
    title: 'InterviewIQ 🎯',
    description: 'AI-powered interview practice platform using Google Gemini API – Master your interview skills with real-time AI feedback and adaptive difficulty.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800',
    technologies: ['Google Gemini AI', 'Node.js', 'Express.js', 'JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/anjaliOfficialcoll/ai-interview-simulator',
    liveUrl: 'https://ai-interview-simulator-production-39ec.up.railway.app/',
    featured: false,
    order: 4
  },
  {
    title: 'Tweetify',
    description: 'A Twitter-inspired web application that allows users to create, view, and manage tweets with full CRUD functionality.',
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800',
    technologies: ['Node.js', 'Express.js', 'MongoDB Atlas', 'EJS', 'Render'],
    githubUrl: 'https://github.com/anjaliOfficialcoll/tweetify-rest-api',
    liveUrl: 'https://tweetify-no52.onrender.com',
    featured: false,
    order: 5
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects');

    // Insert new projects
    await Project.insertMany(projects);
    console.log('Successfully seeded database with projects');

    mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
