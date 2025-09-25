import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import errorHandler from './middleware/error.middleware.js';
import contactRoutes from './routes/contact.routes.js';
import careerRoutes from './routes/career.routes.js';

const app = express();

// Middleware
app.use(cors({
  origin: ['https://www.nextelbpo.co', 'https://nextelbpo.co'],
  credentials: true
}));
app.use(bodyParser.json());

// Routes
app.use('/api', contactRoutes);
app.use('/api', careerRoutes);

// Error handling middleware
app.use(errorHandler);

export default app