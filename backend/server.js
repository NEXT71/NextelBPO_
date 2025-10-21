import { config } from 'dotenv';
import app from './app.js';

config();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is healthy' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment check:');
  console.log('- PORT:', PORT);
  console.log('- RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'Set' : 'Not set');
  console.log('- CORS configured for:', process.env.FRONTEND_URL || 'Not set');
});