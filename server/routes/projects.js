import express from 'express';
import Project from '../models/Project.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Get all projects (public)
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single project (public)
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create project (protected)
router.post('/', protect, async (req, res) => {
  try {
    const { title, description, image, technologies, githubUrl, liveUrl, featured, order } = req.body;

    const project = new Project({
      title,
      description,
      image,
      technologies,
      githubUrl,
      liveUrl,
      featured,
      order
    });

    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update project (protected)
router.put('/:id', protect, async (req, res) => {
  try {
    const { title, description, image, technologies, githubUrl, liveUrl, featured, order } = req.body;

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    project.title = title || project.title;
    project.description = description || project.description;
    project.image = image || project.image;
    project.technologies = technologies || project.technologies;
    project.githubUrl = githubUrl || project.githubUrl;
    project.liveUrl = liveUrl !== undefined ? liveUrl : project.liveUrl;
    project.featured = featured !== undefined ? featured : project.featured;
    project.order = order !== undefined ? order : project.order;

    const updatedProject = await project.save();
    res.json(updatedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete project (protected)
router.delete('/:id', protect, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    await Project.deleteOne({ _id: req.params.id });
    res.json({ message: 'Project removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
