import express from 'express';
const contactRoutes = express.Router();
import contactFormLimiter  from '../config/rateLimiter.config.js';
import submitContactForm  from '../controllers/contactController.js';

contactRoutes.post('/contact', contactFormLimiter, submitContactForm);


export default contactRoutes;
