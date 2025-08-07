import express from 'express';
const careerRoutes = express.Router();
import resumeLimiter from '../config/rateLimiter.config.js';
import submitResume from '../controllers/careerController.js';

careerRoutes.post('/submit-resume', resumeLimiter, submitResume);

export default careerRoutes;